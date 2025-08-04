import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      {/* Hero Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="noah-image relative"
        style={{ height: '100vh', minHeight: '500px' }}
      >
        <img
          src="/fest/main.jpeg"
          alt="Festival Photography by Daniela Hinojosa"
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.85) contrast(1.1) saturate(1.05)',
          }}
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        
        {/* Hero Content - Asymmetric Layout */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
            <div className="grid lg:grid-cols-3 items-center h-full gap-8 lg:gap-16">
              
              {/* Left Column - Main Title (2/3 width) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-2"
              >
                <h1
                  className="text-white"
                  style={{ 
                    fontFamily: 'Crimson Text, serif',
                    fontSize: 'clamp(32px, 6vw, 84px)',
                    fontWeight: '400',
                    lineHeight: '1.1',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Inmortalizar la magia que solo se vive en vivo.
                </h1>
              </motion.div>

              {/* Right Column - Description & Button (1/3 width) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-1 flex flex-col justify-center"
              >
                <div className="noah-subtitle text-white/90 mb-6">
                  Concert Photography
                </div>
                
                <p
                  className="noah-text text-white/90 text-base mb-10 leading-relaxed"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
                >
                  A través de mi lente, busco capturar la energía del escenario, 
                  la conexión entre artistas y público, y la esencia única de cada show.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <a 
                    href="#portfolio" 
                    className="noah-btn text-white border-white hover:bg-white hover:text-black"
                  >
                    Explore Portfolio
                  </a>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Exterior Photography Section */}
      <div className="bg-white noah-space-xl">
        <div className="noah-container">
          {/* Poetic Text - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-6xl mx-auto mb-24"
          >
            <h2 
              className="text-gray-900 text-5xl md:text-7xl leading-tight mb-12"
              style={{ 
                fontFamily: 'Crimson Text, serif', 
                fontWeight: '400',
                lineHeight: '1.1'
              }}
            >
              Capturar donde cada logro se convierte en historia y cada graduación 
              es el inicio de nuevos sueños por cumplir.
            </h2>
          </motion.div>

          {/* Collage Grid - Dynamic Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-7xl mx-auto mb-20"
          >
            {/* Desktop Layout - Hidden on mobile */}
            <div className="hidden md:block relative" style={{ height: '600px' }}>
            {/* Celebration jump - top left */}
            <div 
              className="absolute noah-image"
              style={{ 
                left: '8%', 
                top: '10%', 
                width: '180px', 
                height: '140px',
                zIndex: 2
              }}
            >
              <img
                src="/exterior/4.jpeg"
                alt="Celebración saltando en graduación"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
              />
            </div>

            {/* Group photo - bottom left */}
            <div 
              className="absolute noah-image"
              style={{ 
                left: '12%', 
                top: '42%', 
                width: '240px', 
                height: '160px',
                zIndex: 1
              }}
            >
              <img
                src="/exterior/3.jpeg"
                alt="Grupo de amigas en graduación"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
              />
            </div>

            {/* PROTAGONISTA - center (buena.jpeg) */}
            <div 
              className="absolute noah-image"
              style={{ 
                left: '38%', 
                top: '8%', 
                width: '260px', 
                height: '380px',
                zIndex: 5
              }}
            >
              <img
                src="/exterior/buena.jpeg"
                alt="Momento emotivo madre e hija en graduación"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
              />
            </div>

            {/* Intimate moment - top right */}
            <div 
              className="absolute noah-image"
              style={{ 
                left: '66%', 
                top: '15%', 
                width: '190px', 
                height: '150px',
                zIndex: 3
              }}
            >
              <img
                src="/exterior/2.jpeg"
                alt="Momento tierno entre graduadas"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
              />
            </div>

            {/* Graduate with flowers - bottom right */}
            <div 
              className="absolute noah-image"
              style={{ 
                left: '70%', 
                top: '40%', 
                width: '200px', 
                height: '160px',
                zIndex: 4
              }}
            >
              <img
                src="/exterior/1.jpeg"
                alt="Graduada sonriente con flores"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
              />
            </div>

            </div>

            {/* Mobile Layout - Clean grid without overlap */}
            <div className="md:hidden grid grid-cols-2 gap-3 px-4">
              <div className="noah-image h-48">
                <img
                  src="/exterior/buena.jpeg"
                  alt="Momento emotivo madre e hija en graduación"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
                />
              </div>
              <div className="noah-image h-32 mt-8">
                <img
                  src="/exterior/1.jpeg"
                  alt="Graduada sonriente con flores"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
                />
              </div>
              <div className="noah-image h-32 -mt-4">
                <img
                  src="/exterior/4.jpeg"
                  alt="Celebración saltando en graduación"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
                />
              </div>
              <div className="noah-image h-40">
                <img
                  src="/exterior/3.jpeg"
                  alt="Grupo de amigas en graduación"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.98) contrast(1.05) saturate(1.02)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              Cada graduación es un momento único e irrepetible que merece ser preservado para siempre. 
              A través de mi lente, busco capturar no solo el logro académico, sino las emociones puras, 
              los abrazos llenos de orgullo, las lágrimas de alegría y esa conexión especial entre familias 
              que celebran juntas este hito tan importante. Cada fotografía cuenta la historia de años de 
              esfuerzo, dedicación y sueños cumplidos.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a 
                href="https://danielahinojosa23.myportfolio.com/exterior" 
                target="_blank"
                rel="noopener noreferrer"
                className="noah-btn text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white"
              >
                View Graduation Gallery
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero