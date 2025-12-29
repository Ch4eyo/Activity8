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

### Clone the Repository

\\\ash
git clone https://github.com/docurev111/Chatroom-Activity-8.git
cd Chatroom-Activity-8
\\\

### Backend Setup

1. Navigate to backend directory:
\\\ash
cd backend
\\\

2. Install dependencies:
\\\ash
npm install
\\\

3. Create environment file (optional - uses defaults if not created):
\\\ash
# Copy the example file
copy .env.example .env

# Or create manually with these settings:
# PORT=3000
# DATABASE_PATH=./chatroom-john.sqlite
\\\

4. Start the development server:
\\\ash
npm run start:dev
\\\

The backend will start on \http://localhost:3000\

**Note:** The database file \chatroom-john.sqlite\ will be automatically created in the backend folder on first run.

### Frontend Setup

1. Open a new terminal and navigate to frontend directory:
\\\ash
cd frontend
\\\

2. Install dependencies:
\\\ash
npm install
\\\

3. Start the development server:
\\\ash
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

1. **Start the application** - Run both backend and frontend (see installation steps above)
2. **Access the app** - Open \http://localhost:5173\ in your browser
3. **Enter your username** - Choose any username to login
4. **Create or join a room** - Click "New Room" or select an existing room
5. **Start chatting** - Send messages in real-time
6. **See typing indicators** - Know when others are typing
7. **View message history** - All messages are saved automatically

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
    .env.example       # Environment variables template
    package.json
    chatroom-john.sqlite  # Database (auto-created)

 frontend/
     src/
        components/    # React components
        services/      # API & Socket services
        App.jsx        # Main component
     package.json
\\\

##  Configuration

### Backend Environment Variables

The backend uses these environment variables (defined in \.env\ or uses defaults):

- \PORT\ - Server port (default: 3000)
- \DATABASE_PATH\ - SQLite database file path (default: ./chatroom-john.sqlite)

### Frontend API Configuration

The frontend is configured to connect to \http://localhost:3000\ by default. 

To change the backend URL, modify:
- \rontend/src/services/api.js\ - Change \API_URL\
- \rontend/src/services/socket.js\ - Change \SOCKET_URL\

##  Key Features Explained

### Real-time Communication
The app uses Socket.IO for bidirectional, event-based communication between clients and server, enabling instant message delivery.

### Persistent Storage
Messages and rooms are stored in a SQLite database (\chatroom-john.sqlite\) using TypeORM, ensuring data persists across server restarts.

### User Experience
- **Consistent avatars** - Each user gets a unique emoji based on their username
- **Message alignment** - Your messages on the right, others on the left
- **Clean design** - No clutter, focus on conversation
- **Smooth animations** - Professional feel with subtle transitions

##  Troubleshooting

### Backend won't start
- Make sure port 3000 is not in use by another application
- Check that all dependencies are installed: \
pm install\
- Verify Node.js version is 16 or higher: \
ode --version\

### Frontend won't connect
- Ensure the backend is running first
- Check that backend is accessible at \http://localhost:3000\
- Clear browser cache and refresh

### Database issues
- The database file will be created automatically on first run
- If you need a fresh start, delete \ackend/chatroom-john.sqlite\ and restart the backend

##  License

This project is open source and available for educational purposes.

##  Contributing

Feel free to fork this project and submit pull requests for any improvements.

##  Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with  using React and NestJS**
