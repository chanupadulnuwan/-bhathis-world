import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Showreel from './pages/Showreel'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '155px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showreel" element={<Showreel />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
