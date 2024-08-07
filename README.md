
# MERN AI Chatbot

# MERN Stack Chat Application

A comprehensive guide and implementation of a modern MERN stack chat application featuring user authentication, authorization, chat storage, JWT tokens, and a responsive chat UI. This project also integrates OpenAI to create a ChatGPT-like clone.

## Key Features

- **MERN Stack Deep Guide**: In-depth explanations and code for using MongoDB, Express, React, and Node.js.
- **User Authentication and Authorization**: Secure system for user sign-up, login, and protected routes.
- **Express Validators**: Middleware for validating user input data.
- **Chat Storage**: Store user chats in MongoDB for persistence.
- **Custom Authentication System**: Generate and manage authentication with JWT tokens and HTTP-only cookies.
- **Route Protection**: Secure user routes with verification checks.
- **Modern React App with Vite**: Fast and modern frontend build tool.
- **Material UI**: Create a beautiful and responsive chat UI.
- **Responsive Design**: Ensuring the application works seamlessly on all devices.
- **OpenAI Integration**: Integrate OpenAI with the Node and Express MERN stack application to create a ChatGPT-like clone.
- **User Sessions**: Store and manage user sessions.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Vite

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/neeeel30/mern-chatbot.git
   cd mern-chatbot
2. **Install server dependencies**

```sh
cd server
npm install
```
3. **Install client dependencies**
```sh
cd ../client
npm install\
```
4. **Set up environment variables**

Create a .env file in the server directory and add the following:

env
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key

```
**Running the Application**

1. **Start the server**

```sh
cd server
npm start
```
2. **Start the client**
```sh
cd ../client
npm run dev
```
### Features Breakdown

#### User Authentication and Authorization

- **Register and Login**: Create and manage user accounts with secure password hashing.
- **JWT Tokens**: Generate and verify JWT tokens for session management.
- **HTTP Only Cookies**: Use cookies to securely store JWT tokens.

#### Chat Functionality

- **Real-time Chat**: Store and retrieve user messages from MongoDB.
- **Chat UI**: Create a responsive chat interface using Material UI.

#### OpenAI Integration

- **ChatGPT Clone**: Use OpenAI's API to generate responses and create an interactive chat experience.
