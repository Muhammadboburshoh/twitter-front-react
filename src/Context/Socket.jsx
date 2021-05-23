import { createContext } from 'react'
import IO from 'socket.io-client'

const Context =  createContext()

const Provider = ({url, children}) => {

  const socket = IO(url, {
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