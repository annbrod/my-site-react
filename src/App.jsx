import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import Hobby from './pages/Hobby/Hobby'
import Socials from './pages/Socials/Socials'
import Wall from './pages/Wall/Wall'
import Header from './components/Header/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/hobby" element={<Hobby />} />
                <Route path="/socials" element={<Socials />} />
                <Route path="/wall" element={<Wall />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
