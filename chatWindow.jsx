import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ height: '400px', overflowY: 'auto', padding: '16px', border: '1px solid #ddd' ,  backgroundColor: '#D1D1D1', }}>


      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText
              primary={`${message.sender}: ${message.text}`}
              secondary={message.timestamp}
            />
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </Box>
  );
};

export default ChatWindow;
