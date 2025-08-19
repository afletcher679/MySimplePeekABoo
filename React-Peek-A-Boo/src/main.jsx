// This the entry point for the React app. It mounts the React app to the DOM.
// It links to App.jsx and applies global styles from index.css. 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
