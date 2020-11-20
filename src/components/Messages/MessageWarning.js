import React from 'react';
import '../../styles/MessageWarning.css';

const MessageWarning = ({ message }) => {
  return (
    <div className="MessageWarning">
      {message}
    </div>
  );
};

export default MessageWarning;
