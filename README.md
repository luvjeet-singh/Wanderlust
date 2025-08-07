🌍 Wanderlust - Airbnb clone website
Wanderlust is a full-stack Node.js web application that allows users to discover, create, and review campground listings around the world. Inspired by platforms like Airbnb, Wanderlust focuses on simplicity and accessibility, offering interactive maps, user authentication, image uploads, and dynamic search features.

✅ Live Demo: https://wanderlust-b5yn.onrender.com/listings

✨ Features
🏕 Campground Listings: Users can create, edit, and delete their own campgrounds, including location, description, and images.

📝 Reviews: Authenticated users can leave reviews and ratings for any campground.

🗺 Interactive Maps: Campgrounds are displayed on an interactive Leaflet map with location pins generated via Nominatim geocoding.

📷 Image Uploads: Images are uploaded and hosted securely using Cloudinary.

🔒 Authentication & Authorization: User accounts with secure login, registration, and permissions (e.g., only authors can edit their listings).

🎨 Responsive Design: Styled with Bootstrap for clean and mobile-friendly layouts.

🚀 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Templating: EJS (Embedded JavaScript Templates)

Styling: Bootstrap 5, custom CSS

Maps & Geocoding: Leaflet.js and Nominatim API

File Uploads: Multer middleware + Cloudinary storage

Authentication: Passport.js

Deployment: Render

🌱 What I Learned
Integrating third-party services like Cloudinary and Nominatim

Using Leaflet for interactive mapping without paid APIs

Managing environment variables securely

Implementing authentication with Passport

Deploying a Node.js app to Render

🔮 Future Improvements
Location search autocomplete

Pagination for listings and reviews

AJAX-based review submissions

Image galleries with multiple uploads

Rate limiting and enhanced error handling

