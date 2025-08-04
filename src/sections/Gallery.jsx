import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Albums = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const albums = [
    {
      id: 1,
      cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
      title: "Rock en Español Revival",
      subtitle: "Foro Sol • 2024",
      description: "Una noche épica celebrando los clásicos del rock en español con Caifanes, Café Tacvba y Molotov.",
      imageCount: 45
    },
    {
      id: 2,
      cover: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
      title: "Indie Spotlight",
      subtitle: "Lunario • 2024",
      description: "Sesión íntima con artistas emergentes del indie mexicano en el icónico Lunario del Auditorio.",
      imageCount: 32
    },
    {
      id: 3,
      cover: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
      title: "Vive Latino 2024",
      subtitle: "Foro Sol • Marzo 2024",
      description: "Cobertura completa del festival más importante de música alternativa en América Latina.",
      imageCount: 120
    },
    {
      id: 4,
      cover: "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
      title: "Jazz & Blues Sessions",
      subtitle: "Zinco Jazz Club • 2024",
      description: "Atmósfera íntima y sofisticada en el corazón del Centro Histórico de la Ciudad de México.",
      imageCount: 28
    },
    {
      id: 5,
      cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
      title: "Behind the Stage",
      subtitle: "Backstage Chronicles • 2024",
      description: "Momentos únicos detrás de cámaras que revelan la humanidad de los artistas antes de salir al escenario.",
      imageCount: 67
    },
    {
      id: 6,
      cover: "https://images.pexels.com/photos/1694853/pexels-photo-1694853.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
      title: "Electronic Nights",
      subtitle: "Warehouse District • 2024",
      description: "La energía pulsante de la escena electrónica underground en espacios industriales únicos.",
      imageCount: 89
    }
  ]

  return (
    <section id="albums" ref={ref} className="bg-white noah-section">
      <div className="noah-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-24"
        >
          <div className="noah-subtitle mb-6">
            Featured Work
          </div>
          <h2 className="noah-title mb-8">
            Portfolio Albums
          </h2>
          <p className="noah-text text-lg max-w-3xl mx-auto leading-relaxed">
            Una selección curada de mis trabajos más representativos, organizados por eventos 
            y temáticas que capturan la esencia única de cada presentación musical.
          </p>
        </motion.div>

        {/* Albums Grid */}
        <div className="noah-grid">
          {albums.map((album, index) => (
            <motion.article
              key={album.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="noah-card group cursor-pointer"
            >
              {/* Album Cover */}
              <div className="noah-image mb-8 group-hover:shadow-2xl transition-all duration-500" style={{ aspectRatio: '4/5' }}>
                <img
                  src={album.cover}
                  alt={album.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ 
                    filter: 'brightness(0.92) contrast(1.08) saturate(0.98)',
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="mb-8 opacity-0 group-hover:opacity-100"
                  >
                    <button className="noah-btn text-white border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black">
                      View {album.imageCount} Photos
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Album Info */}
              <div className="text-left">
                <h3 className="noah-title text-2xl mb-3">
                  {album.title}
                </h3>
                <p className="noah-subtitle mb-6">
                  {album.subtitle}
                </p>
                <p className="noah-text mb-8 leading-relaxed">
                  {album.description}
                </p>
                
                {/* View Album Link */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <a 
                    href="#" 
                    className="noah-text text-sm uppercase tracking-wider hover:text-black transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Explore Album</span>
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="noah-divider" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="noah-subtitle mb-6">
            Let's Work Together
          </div>
          <h3 className="noah-title text-4xl mb-8">
            Ready to Capture Your Event?
          </h3>
          <p className="noah-text text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Si buscas un fotógrafo que capture la esencia auténtica de tu evento musical 
            con una perspectiva artística única, me encantaría conocer más sobre tu proyecto.
          </p>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#contact" className="noah-btn">
              Get In Touch
            </a>
            <a 
              href="mailto:daniela@hinojosafoto.com" 
              className="noah-text text-sm uppercase tracking-wider hover:text-black transition-colors duration-300"
            >
              daniela@hinojosafoto.com →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Albums