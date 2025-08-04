import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import MainLayout from './MainLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* <Home /> */}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
