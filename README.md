<div style="display:inline;align-items:center;width:100%;">
     <img style="height:100px;width:100px" src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg" alt="Airbnb Clone" width="300">   
     <h1>Airbnb Clone</h1>
</div>

<p align="center">
  <strong>An Airbnb clone web application built using React.js, MongoDB, Express.js, Node.js, and Tailwind CSS.</strong>
</p>

<p align="center">
  <a href="#technologies-used">
    <img src="https://img.shields.io/badge/Made_with-React.js-blue?logo=react" alt="Made with React.js">
  </a>
  <a href="#technologies-used">
    <img src="https://img.shields.io/badge/Made_with-MongoDB-green?logo=mongodb" alt="Made with MongoDB">
  </a>
  <a href="#technologies-used">
    <img src="https://img.shields.io/badge/Made_with-Express.js-gray?logo=express" alt="Made with Express.js">
  </a>
  <a href="#technologies-used">
    <img src="https://img.shields.io/badge/Made_with-Node.js-green?logo=node.js" alt="Made with Node.js">
  </a>
  <a href="#technologies-used">
    <img src="https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css" alt="Styled with Tailwind CSS">
  </a>
</p>

## Features

- User authentication and authorization
- Property listing and search functionality
- Booking management
- Review system
- User profiles
- Payment integration

## Technologies Used

- <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React.js" width="20"/> React.js: A JavaScript library for building user interfaces.
- <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" width="20"/> MongoDB: A NoSQL database for storing property and user data.
- <img src="https://img.icons8.com/color/48/000000/express.png" alt="Express.js" width="20"/> Express.js: A web application framework for Node.js used for building the server-side application.
- <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" width="20"/> Node.js: A JavaScript runtime environment for running JavaScript on the server.
- <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width="20"/> Tailwind CSS: A utility-first CSS framework for styling the user interface.


## Getting Started

Follow the instructions below to get the project up and running on your local machine.

### Prerequisites

- Node.js (v12 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/airbnb-clone.git
   cd airbnb-clone
2. **Install the server dependencies:**
   ```shell
   cd server
   npm install
3. **Set up the environment variables:**

   - Create a `.env` file in the `server` directory.
   - Add the following environment variables and replace the values with your own:
     ```plaintext
     MONGO_URL=your_mongodb_uri
     ```
4. **Install the client dependencies:*
   ```shell
   cd ../client
   npm install
5. **Set up Tailwind CSS:**
   ```shell
   npm run tailwind:build
6. **Start the development server:**
   ```shell
   npm run dev
