# 🏡 Wanderlust – Airbnb Clone

Wanderlust is a full-stack web application inspired by Airbnb, allowing users to browse, list, and review vacation rental properties. It features user authentication, image uploads, interactive maps, and a clean, modular architecture.

---

## 🚀 Features

- 🔐 User authentication (register/login/logout) using Passport.js
- 🏠 Create, edit, delete listings with images
- 💬 Post and delete reviews for listings
- 📤 Image uploads handled via Cloudinary
- 🗺️ Map integration with Leaflet and Nominatim (shows location pins)
- ✅ Server-side validation with Joi
- 📁 Organized using MVC pattern
- 🌐 EJS-based user interface

---

## 🛠️ Tech Stack

**Frontend**:
- HTML, CSS
- EJS (Embedded JavaScript Templates)
- Bootstrap

**Backend**:
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (Local Strategy for Auth)
- Cloudinary (Image Hosting)
- Multer (File Uploads)
- Nominatim + Leaflet (for interactive maps)

---

## 📁 Project Structure
MajorProject/
├── controllers/ # Route handlers / business logic
├── init/ # App/database initialization
├── models/ # Mongoose data models
├── public/ # Static assets (CSS, images)
├── routes/ # Express routes
├── utils/ # Utility/helper functions
├── views/ # EJS templates for frontend
├── app.js # Main application file
├── middleware.js # Custom Express middleware
├── cloudConfig.js # Cloudinary config
├── schema.js # Joi validation schemas
├── package.json # Project metadata and dependencies
└── .gitignore

