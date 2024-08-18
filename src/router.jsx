import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Contact from './Contact';
import Dashboard from './Dashboard';
import NotFound from './NotFound';


const Router = () => {
    return    (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="contact" element={<Contact />} />
                {/* ... etc. */}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
</BrowserRouter >
   )
}

export default Router

