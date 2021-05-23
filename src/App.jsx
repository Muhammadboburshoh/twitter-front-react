import { useState, useEffect } from 'react';
import useSocket from './Hooks/useSocket';
import './App.css';

function App() {

  const [ message, setMessage ] = useState('')
  const [ messages, setMessages ] = useState([])

  const socket = useSocket()

  useEffect(() => {

    socket.on('reseive_message', message => {
      setMessages((existedMessages) => [...existedMessages, message])
    })

  }, [socket])

  return (
    <>
      <input type="text" onKeyUp={(e) => setMessage(e.target.value)} />

      <button onClick={() => {

        socket.emit('send_mesage', message)

        setMessages([...messages, message])
      }}>Send</button>

      {
        messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))
      }
    </>
  )
}

export default App;
