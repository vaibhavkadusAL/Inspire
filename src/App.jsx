import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
    const getHash = () => window.location.hash.replace('#', '') || '/';

    const [route, setRoute] = useState(getHash);

    useEffect(() => {
        const handleHashChange = () => setRoute(getHash());
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    if (route === '/services') return <Services />;
    if (route === '/contact') return <Contact />;
    return <LandingPage />;
}

export default App
