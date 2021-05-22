import { createContext } from 'react'
import IO from 'socket.io-client'

const Context =  createContext()

const Provider = ({children}) => {

  const socket = IO('http://localhost:5000/main', {
    transports: ['websocket',],
    path: '/socket'
  })

  return (
    <Context.Provider value={socket}>
      {children}
    </Context.Provider>
  )
}

export {
  Context,
  Provider
}