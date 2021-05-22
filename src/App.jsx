import { useEffect } from 'react'
import IO from 'socket.io-client'

import './App.css';

function App() {

  useEffect(() => {

    const socket = IO('http://localhost:4000',{
      transports: ['websocket',]
    })
    console.log(socket);

  }, [])

  
  return (
    <>
    </>
  );
}

export default App;
