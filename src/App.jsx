import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useFadeInObserver from '@/hooks/useObserver'

import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import Write from './pages/Write/Write'
import Read from './pages/Read/Read'
import Socials from './pages/Socials/Socials'
import Wall from './pages/Wall/Wall'
import Header from './components/Header/Header'

function App() {
    useFadeInObserver()
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/read" element={<Read />} />
                    <Route path="/socials" element={<Socials />} />
                    <Route path="/wall" element={<Wall />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
