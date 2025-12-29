import { useEffect, useRef } from 'react';
import './MessageList.css';

function MessageList({ messages, currentUsername }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Generate a consistent avatar for each user based on their username
  const getAvatar = (username) => {
    const avatars = ['👤', '🧑', '👨', '👩', '🧔', '👱', '🧑‍🦱', '👨‍🦰', '👩‍🦳', '🧑‍🦲'];
    const index = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % avatars.length;
    return avatars[index];
  };

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="no-messages">No messages yet. Start the conversation!</div>
      ) : (
        messages.map((message, index) => {
          const isOwnMessage = message.username === currentUsername;
          return (
            <div
              key={message.id || index}
              className={`message ${isOwnMessage ? 'own-message' : 'other-message'}`}
            >
              {!isOwnMessage && (
                <div className="message-avatar">
                  {getAvatar(message.username)}
                </div>
              )}
              <div className="message-content-wrapper">
                <div className="message-header">
                  {!isOwnMessage && <span className="message-username">{message.username}</span>}
                  <span className="message-time">{formatTime(message.createdAt)}</span>
                </div>
                <div className="message-content">{message.content}</div>
              </div>
              {isOwnMessage && (
                <div className="message-avatar own-avatar">
                  {getAvatar(currentUsername)}
                </div>
              )}
            </div>
          );
        })
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
