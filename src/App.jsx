import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home'

import Conductor from './pages/Conductor'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Links from './pages/Links'
import Location from './pages/Location'
import Programme from './pages/Programme'
import Repertoire from './pages/Repertoire'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/conductor" element={<Conductor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/links" element={<Links />} />
        <Route path="/location" element={<Location />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/repertoire" element={<Repertoire />} />
      
      </Routes>
    </Router>
  )
}

export default App

