import React from 'react';
import './Notifications.css';

const Notification = ({ message, type, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default Notification;
