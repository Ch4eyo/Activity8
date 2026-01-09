# Chatroom Application

A real-time chat application built with React and NestJS, featuring WebSocket communication, MongoDB persistence, and animated 3D backgrounds.

## Overview

This chatroom application enables users to create and join multiple chat rooms for real-time messaging. Built with modern web technologies, it provides instant message delivery through WebSocket connections, persistent message storage in MongoDB, and a clean, responsive user interface.

## Technology Stack

**Frontend:**
- React 19 with Vite
- Socket.IO Client for real-time communication
- Axios for REST API requests
- Vanta.js and Three.js for 3D animated backgrounds

**Backend:**
- NestJS framework with TypeScript
- Socket.IO for WebSocket server
- Mongoose ODM with MongoDB
- Swagger for API documentation

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn
- MongoDB (version 4.4 or higher)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/docurev111/Chatroom-Activity-8.git
cd Chatroom-Activity-8
```

### 2. Install MongoDB

If MongoDB is not already installed on your system:

- **Windows:** Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- **macOS:** `brew install mongodb-community`
- **Linux:** Follow the [official MongoDB installation guide](https://docs.mongodb.com/manual/installation/)

Start the MongoDB service:
- **Windows:** MongoDB typically starts automatically as a service
- **macOS:** `brew services start mongodb-community`
- **Linux:** `sudo systemctl start mongod`

Verify MongoDB is running by executing `mongosh` in your terminal.

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file (optional, defaults will be used if not created):

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/chatroom-john
```

Start the backend server:

```bash
npm run start:dev
```

The backend will run on `http://localhost:3000`. API documentation is available at `http://localhost:3000/api/docs`.

### 4. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.

## Running the Application

1. Ensure MongoDB is running on your system
2. Start the backend server: `cd backend && npm run start:dev`
3. Start the frontend server: `cd frontend && npm run dev`
4. Open your browser and navigate to `http://localhost:5173`
5. Enter a username to begin chatting
6. Create a new room or join an existing one to start messaging

## Features

- Real-time messaging with WebSocket connections
- Multiple chat room support
- Persistent message history stored in MongoDB
- Typing indicators to show when users are composing messages
- Unique emoji avatars generated from usernames
- Responsive WhatsApp-inspired design
- Interactive 3D animated background effects
- REST API with Swagger documentation

## Project Structure

```
chatroom-activity-8/
├── backend/
│   ├── src/
│   │   ├── chat/          # WebSocket gateway for real-time events
│   │   ├── rooms/         # Room management endpoints
│   │   ├── messages/      # Message handling endpoints
│   │   ├── schemas/       # Mongoose database schemas
│   │   └── main.ts        # Application entry point
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # React UI components
│   │   ├── services/      # API and Socket.IO services
│   │   └── App.jsx        # Main application component
│   └── package.json
└── README.md
```

## API Endpoints

**Rooms:**
- `POST /rooms` - Create a new chat room
- `GET /rooms` - Retrieve all rooms
- `GET /rooms/:id` - Get a specific room
- `DELETE /rooms/:id` - Delete a room

**Messages:**
- `POST /messages` - Create a new message
- `GET /messages` - Retrieve all messages
- `GET /messages/room/:roomId` - Get messages for a specific room

**WebSocket Events:**
- `joinRoom` - Join a chat room
- `leaveRoom` - Leave a room
- `sendMessage` - Send a message to a room
- `typing` - Broadcast typing indicator

## Troubleshooting

**Backend fails to start:**
- Verify port 3000 is not already in use
- Ensure MongoDB is running: test with `mongosh`
- Check that all dependencies are installed: `npm install`

**Frontend cannot connect:**
- Confirm the backend is running on `http://localhost:3000`
- Clear browser cache and reload the page

**MongoDB connection issues:**
- Verify MongoDB service is running
- Test connection: `mongosh mongodb://localhost:27017`
- Check that port 27017 is not blocked by firewall

## License

This project is open source and available for educational purposes.

---

Built with React and NestJS
