
import 'flatpickr/dist/flatpickr.min.css';
import 'jsvectormap/dist/jsvectormap.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/satoshi.css';
import './css/style.css';
// import './index.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router  basename="/landbank">
      <App />
    </Router>
  </StrictMode>,
)
