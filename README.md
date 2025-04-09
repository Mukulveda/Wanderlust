🌍 Wanderlust
Wanderlust is a full-stack web application that allows users to explore, add, and review travel-related listings such as places, hotels, restaurants, and more. It includes secure authentication, location-based map integration, and full CRUD functionality.

🏗️ Architecture (MVC)
Wanderlust is structured following the Model-View-Controller (MVC) architecture:

Model (M): Uses Mongoose to define data models like Listings and Reviews.
View (V): Built with EJS templates for rendering dynamic web pages.
Controller (C): Manages application logic using Express.js routes and handlers.

🚀 Features
🧭 Explore Listings: Users can browse all travel listings added by others.
➕ Create Listings: Authenticated users can add new listings (e.g., hotels, places, restaurants) with title, description, price, location, and image.
✏️ Edit/Delete Listings: Only the owner of a listing can edit or delete it.
🔍 Search: Users can search for listings by location or address.
📍 Map Integration: Each listing location is shown using Mapbox for better visual reference.
💬 Reviews: Users can add reviews to any listing.
❌ Delete Reviews: Only the author of a review or the owner of the listing can delete a review.
🔐 Authentication: Uses Passport.js for login, signup, and session management.
✨ Flash Messages: Provides success/error messages after actions like login, logout, or CRUD operations.
☁️ Image Uploads: Uses Cloudinary to store uploaded images for listings.

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript, EJS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: Passport.js
Image Hosting: Cloudinary
Map Integration: Mapbox
Flash Messages: connect-flash

✅ Use Cases
A traveler can search and explore new places, hotels, or restaurants.
A user can post their own listings for travel spots they recommend.
Users can review places they’ve visited and interact with other users' listings.
Listing owners maintain full control over their content.
The app ensures secure user login and data protection with authorization checks.

📸ScreenShot Of Website
![Screenshot 2025-04-09 225937](https://github.com/user-attachments/assets/bd68fa73-9210-49ed-8ce2-85d43825aac6)

📜 License
This project is open-source and available under the MIT License.

