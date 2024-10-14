import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],  // Array of message objects { id, text, sender, timestamp }
  currentUser: 'Ruchi',  // You can change or manage this state later for multiple users
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const { text, sender } = action.payload;
      state.messages.push({
        id: Date.now(),
        text,
        sender,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      const { text, sender } = action.payload;
      state.messages.push({
        id: Date.now(),
        text,
        sender,
        timestamp: new Date().toLocaleTimeString(),
      });
    }
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
