import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CssBaseline />
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
      </Router>
  </StrictMode>,
)
