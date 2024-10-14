import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ChatWindow from './chatWindow';
import MessageInput from './messageInput';
import SimulateReceiveMessage from './SimulateReceiveMessage';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          Chat Interface
        </Typography>
        <ChatWindow />
        <MessageInput />
        <SimulateReceiveMessage/>
      </Container>
    </Provider>
  );
}

export default App;
