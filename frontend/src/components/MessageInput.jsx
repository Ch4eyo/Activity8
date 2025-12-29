import { useState } from 'react';
import './MessageInput.css';

function MessageInput({ onSendMessage, onTyping }) {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
    
    if (!isTyping && e.target.value.length > 0) {
      setIsTyping(true);
      onTyping(true);
    } else if (isTyping && e.target.value.length === 0) {
      setIsTyping(false);
      onTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
      setIsTyping(false);
      onTyping(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
        className="message-input-field"
      />
      <button type="submit" className="send-button" disabled={!message.trim()}>
        Send
      </button>
    </form>
  );
}

export default MessageInput;
