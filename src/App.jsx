import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import CS from './pages/cs';
import Music from './pages/music';
import Art from './pages/art';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cs" element={<CS />} />
      <Route path="/music" element={<Music />} />
      <Route path="/art" element={<Art />} />
    </Routes>
  )
}

export default App
