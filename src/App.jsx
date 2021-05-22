import { useState } from 'react';
import useSocket from './Hooks/useSocket';
import './App.css';

function App() {

  const [ message, setMessage ] = useState('')

  const socket = useSocket()

  return (
    <>
      <input type="text" onKeyUp={(e) => setMessage(e.target.value)} />

      <button onClick={() => socket.emit('send_mesage', message)}>Send</button>
    </>
  )
}

export default App;
