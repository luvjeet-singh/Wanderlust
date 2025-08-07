# 🌍 Wanderlust — Airbnb Clone Website

**Wanderlust** is a full-stack Node.js web application that allows users to discover, create, and review campground listings around the world.  
Inspired by platforms like Airbnb, Wanderlust emphasizes simplicity, clean UI, and map-based exploration.

---

## 🔗 Live Demo

🌐 [Wanderlust on Render](https://wanderlust-b5yn.onrender.com/listings)

---

## ✨ Features

- 🏕 **Campground Listings** — Users can create, edit, and delete their own campgrounds with location, description, and images.  
- 📝 **Reviews** — Authenticated users can leave reviews and ratings for any campground.  
- 🗺 **Interactive Maps** — Campgrounds are shown on a Leaflet.js map with pins generated via Nominatim geocoding.  
- 📷 **Image Uploads** — Users can upload images, which are securely stored and served via Cloudinary.  
- 🔒 **Authentication & Authorization** — Includes secure login, registration, and role-based access control. Only listing authors can edit/delete their content.  
- 🎨 **Responsive Design** — Mobile-friendly layout styled with Bootstrap 5 and custom CSS.

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (with Mongoose ODM)  
- **Templating Engine**: EJS (Embedded JavaScript Templates)  
- **Styling**: Bootstrap 5, Custom CSS  
- **Maps & Geocoding**: Leaflet.js, Nominatim API  
- **File Uploads**: Multer middleware + Cloudinary  
- **Authentication**: Passport.js  
- **Deployment**: Render

---

## 🌱 What I Learned

- Integrating third-party services like Cloudinary and Nominatim  
- Using Leaflet for interactive mapping without paid APIs  
- Managing environment variables securely  
- Implementing authentication with Passport  
- Deploying a Node.js app to Render

---

## 🔮 Future Improvements

- 🔍 Location search autocomplete  
- 📄 Pagination for listings and reviews  
- ⚡ AJAX-based review submissions  
- 🖼 Image galleries with multiple uploads  
- 🛡 Rate limiting and enhanced error handling

---
