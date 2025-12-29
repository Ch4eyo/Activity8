import { useState } from 'react';
import Login from './components/Login';
import RoomList from './components/RoomList';
import ChatRoom from './components/ChatRoom';
import VantaBackground from './components/VantaBackground';
import './App.css';

function App() {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('chat_username') || '';
  });
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleLogin = (user) => {
    setUsername(user);
    localStorage.setItem('chat_username', user);
  };

  const handleLogout = () => {
    setUsername('');
    setSelectedRoom(null);
    localStorage.removeItem('chat_username');
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

  if (!username) {
    return (
      <VantaBackground>
        <Login onLogin={handleLogin} />
      </VantaBackground>
    );
  }

  return (
    <VantaBackground>
      <div className="app">
        <div className="app-header">
          <div className="header-left">
            <div className="app-logo">Chatroom</div>
            <div className="app-tagline">Real-time messaging</div>
          </div>
          <div className="user-info">
            <div className="user-badge">
              <div className="user-avatar">{username.charAt(0).toUpperCase()}</div>
              <span className="username-text">{username}</span>
            </div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
        <div className="app-content">
          <RoomList onSelectRoom={handleSelectRoom} selectedRoomId={selectedRoom?.id} />
          <ChatRoom room={selectedRoom} username={username} />
        </div>
      </div>
    </VantaBackground>
  );
}

export default App;
