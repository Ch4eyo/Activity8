import { useState, useEffect } from 'react';
import { roomsAPI } from '../services/api';
import './RoomList.css';

function RoomList({ onSelectRoom, selectedRoomId }) {
  const [rooms, setRooms] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDescription, setNewRoomDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const response = await roomsAPI.getAll();
      setRooms(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load rooms');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    try {
      await roomsAPI.create({
        name: newRoomName.trim(),
        description: newRoomDescription.trim(),
      });
      setNewRoomName('');
      setNewRoomDescription('');
      setShowCreateForm(false);
      fetchRooms();
    } catch (err) {
      setError('Failed to create room');
      console.error(err);
    }
  };

  if (loading) return <div className="room-list">Loading rooms...</div>;

  return (
    <div className="room-list">
      <div className="room-list-header">
        <h2>Chat Rooms</h2>
        <button
          className="create-room-btn"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Cancel' : '+ New Room'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {showCreateForm && (
        <form onSubmit={handleCreateRoom} className="create-room-form">
          <input
            type="text"
            placeholder="Room name"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            className="room-input"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newRoomDescription}
            onChange={(e) => setNewRoomDescription(e.target.value)}
            className="room-input"
          />
          <button type="submit" className="submit-btn">
            Create
          </button>
        </form>
      )}

      <div className="rooms-container">
        {rooms.length === 0 ? (
          <p className="no-rooms">No rooms yet. Create one!</p>
        ) : (
          rooms.map((room) => (
            <div
              key={room.id}
              className={`room-item ${selectedRoomId === room.id ? 'active' : ''}`}
              onClick={() => onSelectRoom(room)}
            >
              <div className="room-name">{room.name}</div>
              {room.description && (
                <div className="room-description">{room.description}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RoomList;
