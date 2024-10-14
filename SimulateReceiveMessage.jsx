import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './chatSlice';

const SimulateReceiveMessage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const receiveMockMessage = () => {
      dispatch(receiveMessage({ text: 'Starting chatting', sender: 'Friend' }));
    };

    const timer = setTimeout(receiveMockMessage, 2000);  
    return () => clearTimeout(timer);
  }, [dispatch]);

  return null;
};

export default SimulateReceiveMessage;
