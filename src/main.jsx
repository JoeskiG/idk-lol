import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './contexts/useGlobalContext.jsx'
import { ColorBoxProvider } from './contexts/useColorBoxContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <GlobalProvider>
      <ColorBoxProvider>
        <App />
      </ColorBoxProvider>
    </GlobalProvider>

  // </React.StrictMode>
)
