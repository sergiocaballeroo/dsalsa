import { motion } from 'framer-motion'

const Portfolio = () => {
  // Portfolio sections in Spanish
  const portfolioSections = [
    '1/ Exterior',
    '2/ Retrato', 
    '3/ Evento',
    '4/ Comercial'
  ]

  // 4 images following exact reference structure
  const portfolioImages = [
    {
      src: '/retrato/1.jpg',
      alt: 'Retrato conceptual con velo'
    },
    {
      src: '/fest/2.jpeg',
      alt: 'Festival concierto en vivo'
    },
    {
      src: '/fest/1.jpeg',
      alt: 'Artista en concierto con luces'
    },
    {
      src: '/comercial/1.jpeg',
      alt: 'Fotografía comercial de productos'
    }
  ]

  return (
    <section id="portfolio" className="bg-white min-h-screen overflow-hidden" style={{ padding: '80px 20px 100px' }}>
      {/* Container with generous side margins */}
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Two Column Layout - Left wider than right */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 lg:gap-16">
          
          {/* LEFT COLUMN - Takes 5/8 of width (wider) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12 lg:space-y-20"
          >
            {/* Portfolio Title + Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-16"
            >
              <h2 
                className="text-gray-900 mb-4"
                style={{ 
                  fontFamily: 'Crimson Text, serif',
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '400',
                  lineHeight: '1.1',
                  letterSpacing: '-0.01em'
                }}
              >
                Portfolio
              </h2>
              <p 
                className="text-gray-600 max-w-md"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.5'
                }}
              >
                Cada imagen, ya sea un vibrante festival local o un retrato íntimo, 
                añade profundidad a mi comprensión del mundo.
              </p>
            </motion.div>

            {/* Large Vertical Image - Dominates the space */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden bg-gray-50 h-[400px] md:h-[500px] lg:h-[700px]">
                <img
                  src={portfolioImages[0].src}
                  alt={portfolioImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ 
                    filter: 'brightness(0.94) contrast(1.06) saturate(0.96)'
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Small Horizontal Image - Below the large one, slightly offset */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="relative group ml-8 lg:ml-12"
            >
              <div className="relative overflow-hidden bg-gray-50 h-[200px] md:h-[250px] lg:h-[320px] max-w-[500px]">
                <img
                  src={portfolioImages[1].src}
                  alt={portfolioImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ 
                    filter: 'brightness(0.94) contrast(1.06) saturate(0.96)'
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-all duration-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Takes 3/8 of width (narrower) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8 lg:space-y-12"
          >
            {/* Top Horizontal Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden bg-gray-50 h-[160px] md:h-[200px] lg:h-[260px] w-full">
                <img
                  src={portfolioImages[3].src}
                  alt={portfolioImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ 
                    filter: 'brightness(0.94) contrast(1.06) saturate(0.96)'
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Text List - Elegant spacing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="space-y-4 lg:space-y-6"
            >
              {portfolioSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                >
                  <h3 
                    className="text-gray-900"
                    style={{ 
                      fontFamily: 'Crimson Text, serif',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: '400',
                      lineHeight: '1.4',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {section}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            {/* Button - Simple and elegant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="pt-4 lg:pt-6"
            >
              <button 
                className="border border-gray-800 rounded-full px-8 py-3 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-400"
                style={{ 
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '15px',
                  fontWeight: '400',
                  letterSpacing: '0.02em'
                }}
              >
                Ver Portafolio
              </button>
            </motion.div>

            {/* Bottom Vertical Image - With space from button */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="relative group pt-8 lg:pt-12"
            >
              <div className="relative overflow-hidden bg-gray-50 h-[300px] md:h-[400px] lg:h-[500px] w-full">
                <img
                  src={portfolioImages[2].src}
                  alt={portfolioImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ 
                    filter: 'brightness(0.94) contrast(1.06) saturate(0.96)'
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-all duration-500" />
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Portfolio