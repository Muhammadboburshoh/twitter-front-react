import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { Provider as Socket } from "./Context/Socket"

const socketURL = "http://localhost:5000/main"

ReactDOM.render(
  <React.StrictMode>
    <Socket url={socketURL}>
      <App />
    </Socket>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister();

