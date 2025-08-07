🌍 Wanderlust — Airbnb Clone Website
A full-stack Node.js web application that allows users to discover, create, and review campground listings around the world. Inspired by platforms like Airbnb, Wanderlust emphasizes simplicity, clean UI, and map-based exploration.

🔗 Live Demo: wanderlust-b5yn.onrender.com

✨ Features
🏕 Campground Listings
Users can create, edit, and delete their own campgrounds with location, description, and images.

📝 Reviews
Authenticated users can leave reviews and ratings for any campground.

🗺 Interactive Maps
Campgrounds are shown on a Leaflet.js map with pins generated via Nominatim geocoding.

📷 Image Uploads
Users can upload images, which are securely stored and served via Cloudinary.

🔒 Authentication & Authorization
Includes secure login, registration, and role-based access control. Only listing authors can edit/delete their content.

🎨 Responsive Design
Mobile-friendly layout styled with Bootstrap 5 and custom CSS.

🚀 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (with Mongoose ODM)

Templating Engine: EJS (Embedded JavaScript Templates)

Styling: Bootstrap 5, Custom CSS

Maps & Geocoding: Leaflet.js, Nominatim API

File Uploads: Multer middleware + Cloudinary

Authentication: Passport.js

Deployment: Render

🌱 What I Learned
Integrating third-party services like Cloudinary and Nominatim

Using Leaflet as an alternative to paid APIs like Mapbox

Securing app credentials with environment variables

Implementing robust authentication and authorization

Deploying full-stack applications using Render

🔮 Future Improvements
🔍 Location search autocomplete

📄 Pagination for listings and reviews

⚡ AJAX-based review submissions for smoother UX

🖼 Image galleries with drag-and-drop multi-upload

🛡️ Rate limiting and better error handling/security

