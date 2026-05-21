import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
// The BrowserRouter component is a higher-order component that provides routing capabilities to the entire application. It uses the HTML5 history API to keep the UI in sync with the URL. 
// By wrapping the App component with BrowserRouter, we enable routing functionality throughout the app, allowing us to define routes and navigate between different components based on the URL.