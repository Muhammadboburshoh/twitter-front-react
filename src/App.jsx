import { useEffect, useState } from 'react'
import IO from 'socket.io-client'

import './App.css';

function App() {

  const [ connect, setConnect ] = useState(false)
  const [ socket, setSocket ] = useState(null)
  useEffect(() => {

    setSocket(IO('http://localhost:5000/main',{
      transports: ['websocket',],
      autoConnect: false,
      path: '/socket'
    }))

  }, [])


  useEffect(() => {

    if(connect) {
      socket.connect()
    } else {
      if(socket) socket.disconnect()
    }

  }, [connect, socket])
  
  return (
    <>
      <button onClick={() => setConnect(!connect)}>{connect? 'Disconnect': 'Connect'}</button>
    </>
  );
}

export default App;
