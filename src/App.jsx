import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Shop from './sections/Shop'
import About from './sections/About'
import Contact from './sections/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero />
            <Portfolio />
            <Shop />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
