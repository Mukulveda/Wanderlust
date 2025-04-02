🌍 Wanderlust
A full-stack web application inspired by Airbnb, allowing users to explore, add, and review travel destinations.

🏗️ Architecture (MVC)
Wanderlust follows the Model-View-Controller (MVC) pattern:

Model (M): Defines the database schema using MongoDB & Mongoose.

View (V): Uses EJS templates for dynamic rendering.

Controller (C): Handles logic with Node.js & Express.

🚀 Features
🏡 Listings Management: Users can create, edit, and delete listings.

🗺 Interactive Map: All locations are displayed on a map.

📝 Reviews & Ratings: Users can review listings.

🔐 Role-Based Access:

Only the owner of a listing can delete it.

Only the author of a review or the listing owner can delete reviews.

📷 Image Uploads: Users can upload images for listings.

🛡 Authentication & Authorization: Secure user management with Passport.js.

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript, EJS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: Passport.js

Map Integration: Mapbox

📸 Screenshots
Add some screenshots here.

🏗️ Installation & Setup
bash
Copy
Edit
# Clone the repository
git clone https://github.com/Mukulveda/Wanderlust.git

# Navigate to the project folder
cd Wanderlust

# Install dependencies
npm install

# Start the server
npm start
Visit http://localhost:3000 in your browser.

📜 License
This project is open-source and available under the MIT License.
