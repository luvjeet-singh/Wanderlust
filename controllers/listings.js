const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index = async (req, res) => {
  const { search } = req.query;

  let allListings;

  if (search) {
    const searchRegex = new RegExp(search, "i"); // case-insensitive regex
    allListings = await Listing.find({
      $or: [
        { title: searchRegex },
        { location: searchRegex },
        { country: searchRegex },
      ],
    });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.filterListings = async (req, res) => {
  const { category } = req.query;

  if (!category) {
    req.flash("error", "No category specified for filtering!");
    return res.redirect("/listings");
  }

  const allListings = await Listing.find({ category: category });

  res.render("listings/index.ejs", { allListings });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  //  Geocoding using Nominatim
  const location = req.body.listing.location;

  const geoRes = await axios.get("https://nominatim.openstreetmap.org/search", {
    params: {
      q: location,
      format: "json",
      limit: 1, // only get the first result
    },
    headers: {
      "User-Agent": "Wanderlust",
    },
  });

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  if (geoRes.data.length > 0) {
    const lat = geoRes.data[0].lat;
    const lon = geoRes.data[0].lon;
    console.log("Coordinates:", lat, lon);

    newListing.geometry = {
      type: "Point",
      coordinates: [lon, lat], // Note: GeoJSON format = [longitude, latitude]
    };
  } else {
    console.log("No coordinates found for location:", location);
  }

  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
