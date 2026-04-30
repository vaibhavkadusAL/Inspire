import './App.css'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === '/services' ? <Services /> : path === '/contact' ? <Contact /> : <LandingPage />}
    </>
  )
}

export default App
