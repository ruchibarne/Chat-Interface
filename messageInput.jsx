import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './chatSlice';
import { Box, TextField, Button, colors } from '@mui/material';

const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.chat.currentUser);

  const handleSend = () => {
    if (text.trim() === '') {
      alert('Type Something');
      return;
    }
    dispatch(sendMessage({ text, sender: currentUser }));
    setText('');
  };

  return (
    <Box sx={{ display: 'flex', gap: '8px', mt: '16px' }}>
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
