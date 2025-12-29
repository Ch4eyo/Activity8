# Chatroom Application

A modern, real-time chat application built with React and NestJS, featuring a clean WhatsApp-inspired design with animated 3D backgrounds.

##  Features

- **Real-time Messaging** - Instant message delivery using Socket.IO
- **Multiple Chat Rooms** - Create and join different conversation spaces
- **User Authentication** - Username-based login with persistent sessions
- **Typing Indicators** - See when others are typing
- **Profile Avatars** - Unique emoji avatars for each user
- **Animated Background** - Interactive 3D ring effects using Vanta.js
- **Responsive Design** - Clean, modern UI inspired by popular messaging apps
- **Message History** - Persistent message storage with SQLite
- **REST API Documentation** - Auto-generated Swagger docs

##  Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks
- **Vite** - Fast build tool and dev server
- **Socket.IO Client** - Real-time bidirectional communication
- **Axios** - HTTP client for REST API calls
- **Vanta.js + Three.js** - 3D animated backgrounds
- **Inter Font** - Clean, modern typography

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe development
- **Socket.IO** - WebSocket server for real-time features
- **TypeORM** - Database ORM
- **SQLite** - Lightweight database
- **Swagger** - Automatic API documentation

##  Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

\\\ash
cd backend
npm install
npm run start:dev
\\\

The backend will start on \http://localhost:3000\

### Frontend Setup

\\\ash
cd frontend
npm install
npm run dev
\\\

The frontend will start on \http://localhost:5173\

##  Design Features

### Color Palette
- **Primary Green**: \#25d366\ - WhatsApp-inspired green
- **Dark Green**: \#128c7e\ - Accent color
- **Header**: \#075e54\ - WhatsApp signature dark green
- **Chat Background**: \#e5ddd5\ - Warm beige tone
- **Message Bubbles**: 
  - Own messages: \#d9fdd3\ (light green)
  - Other messages: \#ffffff\ (white)
- **Dark Sidebar**: \#111b21\ - Room list background

### UI Components
- **Clean Header** - Minimalist design with logo and user info
- **Dark Sidebar** - Room list with green accents
- **WhatsApp-style Messages** - Bubble chat with profile pictures
- **Smooth Animations** - Fade-in effects and transitions
- **Glass-morphism Effects** - Modern blur and transparency

##  API Documentation

Once the backend is running, access the interactive API documentation at:

\\\
http://localhost:3000/api/docs
\\\

### Available Endpoints

#### Rooms
- \POST /rooms\ - Create a new chat room
- \GET /rooms\ - Get all rooms
- \GET /rooms/:id\ - Get specific room
- \DELETE /rooms/:id\ - Delete a room

#### Messages
- \POST /messages\ - Create a message
- \GET /messages\ - Get all messages
- \GET /messages/room/:roomId\ - Get messages by room

#### WebSocket Events
- \joinRoom\ - Join a chat room
- \leaveRoom\ - Leave a room
- \sendMessage\ - Send a message
- \	yping\ - Typing indicator

##  Usage

1. **Start the application** - Run both backend and frontend
2. **Enter your username** - Choose any username to login
3. **Create or join a room** - Click "New Room" or select an existing room
4. **Start chatting** - Send messages in real-time
5. **See typing indicators** - Know when others are typing
6. **View message history** - All messages are saved

##  Project Structure

\\\
chatroom-activity-8/
 backend/
    src/
       chat/          # WebSocket gateway
       rooms/         # Room management
       messages/      # Message handling
       entities/      # Database models
       main.ts        # Application entry
    package.json

 frontend/
     src/
        components/    # React components
        services/      # API & Socket services
        App.jsx        # Main component
     package.json
\\\

##  Configuration

### Backend Environment
Create a \.env\ file in the backend directory (optional):
\\\env
PORT=3000
\\\

### Frontend API Configuration
The frontend is configured to connect to \http://localhost:3000\ by default. Modify \src/services/api.js\ and \src/services/socket.js\ to change this.

##  Key Features Explained

### Real-time Communication
The app uses Socket.IO for bidirectional, event-based communication between clients and server, enabling instant message delivery.

### Persistent Storage
Messages and rooms are stored in a SQLite database using TypeORM, ensuring data persists across server restarts.

### User Experience
- **Consistent avatars** - Each user gets a unique emoji based on their username
- **Message alignment** - Your messages on the right, others on the left
- **Clean design** - No clutter, focus on conversation
- **Smooth animations** - Professional feel with subtle transitions

##  License

This project is open source and available for educational purposes.

##  Contributing

Feel free to fork this project and submit pull requests for any improvements.

##  Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with  using React and NestJS**
