import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/* ... etc. */}
      </Route>
    )
  );

export default router

