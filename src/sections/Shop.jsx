import { motion } from 'framer-motion'

const Shop = () => {
  return (
    <>
      {/* Illustration & Design Section */}
      <section className="bg-white min-h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-full">
          
          {/* Two Column Layout - Equal width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            
            {/* Left Column - Large Poster Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="relative bg-gray-100"
            >
              <div className="w-full h-full min-h-[400px] lg:min-h-screen">
                <img
                  src="/me/cartel.png"
                  alt="Ilustración y diseño - Cartel Rock artístico"
                  className="w-full h-full object-cover"
                  style={{ 
                    filter: 'brightness(0.95) contrast(1.03) saturate(1.02)'
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column - Dark Background with Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="bg-stone-800 flex items-center justify-center px-6 lg:px-12 py-16 lg:py-0"
            >
              <div className="max-w-md space-y-8 lg:space-y-12">
                
                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                >
                  <h2 
                    className="text-white text-left"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: '300',
                      lineHeight: '1.2',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Ilustración y Diseño
                  </h2>
                </motion.div>

                {/* Small Book Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                  className="w-full max-w-sm"
                >
                  <div className="relative h-32 lg:h-40 bg-stone-700 overflow-hidden">
                    <img
                      src="/me/book.png"
                      alt="Book design sample"
                      className="w-full h-full object-cover"
                      style={{ 
                        filter: 'brightness(0.9) contrast(1.1)'
                      }}
                    />
                  </div>
                </motion.div>

                {/* Descriptive Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                >
                  <p 
                    className="text-stone-300 text-left leading-relaxed"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}
                  >
                    Cada diseño cuenta una historia única. Desde carteles conceptuales hasta 
                    libros de arte, mi trabajo en ilustración y diseño gráfico busca capturar 
                    la esencia visual de cada proyecto con un enfoque minimalista y contemporáneo.
                  </p>
                </motion.div>

                {/* Shop Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <button 
                    className="bg-stone-600 hover:bg-stone-500 text-white px-8 py-4 rounded-lg transition-all duration-300"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '400',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Shop Prints
                  </button>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white py-8 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Instagram Icon - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <a 
              href="https://instagram.com/dannselse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-600 transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </motion.div>

          {/* Copyright and Back to Top */}
          <div className="flex justify-between items-center">
            
            {/* Copyright - Center */}
            <div className="flex-1 text-center">
              <p 
                className="text-stone-400"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: '300'
                }}
              >
                © 2025 Daniela Hinojosa
              </p>
            </div>

            {/* Back to Top - Right */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-stone-400 hover:text-stone-600 transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18,15 12,9 6,15"></polyline>
              </svg>
            </motion.button>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Shop