import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import CS from './pages/cs';
import Music from './pages/music';
import Art from './pages/art';

function App(): React.ReactElement {
  return (
    <div className="m-8 rounded-lg p-8 w-[90%] min-w-[1200px] h-[85vh] mx-auto overflow-y-auto flex flex-col bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/music" element={<Music />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </div>
  )
}

export default App
