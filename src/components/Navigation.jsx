import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 20)
      
      // Hide navbar when scrolling down past threshold
      if (currentScrollY > 100) {
        // Past threshold - hide navbar permanently
        setIsVisible(false)
      } else {
        // At top - show navbar
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: 10 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left - Logo */}
            <div className="flex items-center">
              <motion.button
                onClick={() => setCurrentPage('home')}
                className="text-2xl tracking-wide text-white bg-transparent border-none cursor-pointer"
                style={{ 
                  fontFamily: 'Crimson Text, serif',
                  fontWeight: '400',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Daniela Hinojosa
              </motion.button>
            </div>

            {/* Center - Empty */}
            <div className="hidden lg:flex items-center">
            </div>

            {/* Right - Hamburger Menu */}
            <div className="flex items-center">
              <motion.button
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
              >
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="block w-6 h-0.5 bg-white shadow-sm"
                />
                <motion.span
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-0.5 bg-white shadow-sm"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="block w-6 h-0.5 bg-white shadow-sm"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            {/* Close Button */}
            <motion.button
              onClick={toggleMenu}
              className="absolute top-8 right-8 w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: 45, y: 6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="block w-6 h-0.5 bg-gray-700"
              />
              <motion.span
                animate={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-gray-700"
              />
              <motion.span
                animate={{ rotate: -45, y: -6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="block w-6 h-0.5 bg-gray-700"
              />
            </motion.button>

            {/* Menu Items - Centered */}
            <div className="text-center">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Me', page: 'about' },
                { label: 'Contact', page: 'contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + i * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="mb-8 last:mb-0"
                >
                  <motion.button
                    onClick={() => {
                      setCurrentPage(item.page)
                      toggleMenu()
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`block text-6xl md:text-8xl transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                      currentPage === item.page ? 'text-black' : 'text-gray-900 hover:text-black'
                    }`}
                    style={{ 
                      fontFamily: 'Crimson Text, serif',
                      fontWeight: '400',
                      lineHeight: '0.9',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {item.label}
                  </motion.button>
                </motion.div>
              ))}

              {/* Contact Info - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="mt-16 pt-8"
              >
                <div className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get in touch
                </div>
                <a 
                  href="mailto:daniela@hinojosafoto.com"
                  className="block text-lg text-gray-700 hover:text-black transition-colors duration-200 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  daniela@hinojosafoto.com
                </a>
                <a 
                  href="https://instagram.com/danielahinojosa_foto"
                  className="block text-lg text-gray-700 hover:text-black transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  @danielahinojosa_foto
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation