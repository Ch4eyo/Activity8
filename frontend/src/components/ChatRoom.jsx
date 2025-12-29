import { useState, useEffect } from 'react';
import { messagesAPI } from '../services/api';
import socketService from '../services/socket';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatRoom.css';

function ChatRoom({ room, username }) {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    if (!room) return;

    const loadMessages = async () => {
      try {
        const response = await messagesAPI.getByRoom(room.id);
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };

    // Load existing messages
    loadMessages();

    // Connect to WebSocket and join room
    socketService.connect();
    socketService.joinRoom(room.id, username);

    // Listen for new messages
    socketService.onNewMessage((message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listen for user joined
    socketService.onUserJoined((data) => {
      console.log(`${data.username} joined the room`);
    });

    // Listen for user left
    socketService.onUserLeft((data) => {
      console.log(`${data.username} left the room`);
    });

    // Listen for typing indicators
    socketService.onUserTyping((data) => {
      if (data.isTyping) {
        setTypingUsers((prev) => [...new Set([...prev, data.username])]);
      } else {
        setTypingUsers((prev) => prev.filter((u) => u !== data.username));
      }
    });

    // Cleanup on unmount or room change
    return () => {
      socketService.leaveRoom(room.id, username);
      socketService.removeAllListeners();
    };
  }, [room, username]);

  const handleSendMessage = (content) => {
    const messageData = {
      content,
      roomId: room.id,
      userId: 1, // This would come from actual user authentication
      username,
    };

    socketService.sendMessage(messageData);
  };

  const handleTyping = (isTyping) => {
    socketService.emitTyping(room.id, username, isTyping);
  };

  if (!room) {
    return (
      <div className="chat-room no-room-selected">
        <p>Select a room to start chatting</p>
      </div>
    );
  }

  return (
    <div className="chat-room">
      <div className="chat-header">
        <h2>{room.name}</h2>
        {room.description && <p className="room-desc">{room.description}</p>}
      </div>

      <MessageList messages={messages} currentUsername={username} />

      {typingUsers.length > 0 && (
        <div className="typing-indicator">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}

      <MessageInput onSendMessage={handleSendMessage} onTyping={handleTyping} />
    </div>
  );
}

export default ChatRoom;
