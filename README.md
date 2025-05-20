# Uber App Backend

This is the backend for the Uber-like application. It provides APIs for user and rider registration, login, and other functionalities. The backend is built using Node.js, Express, and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Rider Routes](#rider-routes)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features

- User and Rider registration with password encryption.
- User and Rider login with JWT token generation.
- Rider vehicle details and location management.
- Secure authentication using `jsonwebtoken` with the `HS256` algorithm.
- MongoDB as the database with Mongoose for schema modeling.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and rider data.
- **Mongoose**: ODM for MongoDB.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **bcrypt**: For password hashing and comparison.
- **dotenv**: For managing environment variables.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/uber-app-backend.git
   cd uber-app-backend