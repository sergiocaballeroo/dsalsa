import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="about" ref={ref} className="bg-white min-h-screen flex items-center" style={{ padding: '120px 0' }}>
      <div className="noah-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="noah-image shadow-2xl" style={{ aspectRatio: '4/5' }}>
              <img
                src="/me/corazon.jpeg"
                alt="Daniela Hinojosa fotografiando al atardecer"
                className="w-full h-full object-cover"
                style={{ 
                  filter: 'brightness(0.96) contrast(1.04) saturate(0.92)',
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="noah-subtitle mb-6">
              About My Work
            </div>
            <h2 className="noah-title mb-10">
              The Art of Concert Photography
            </h2>
            
            <div className="space-y-8 noah-text text-lg leading-relaxed">
              <p>
                A través de mi lente, busco inmortalizar la energía del escenario, la conexión 
                entre artistas y público, y la esencia única de cada show. Mi pasión por la 
                fotografía de conciertos nació del deseo de preservar esos momentos irrepetibles 
                que solo existen en el mundo de la música en vivo.
              </p>
              
              <p>
                Cada fotografía es un testimonio visual de la intensidad y magia que solo se 
                vive en vivo. Mi trabajo trasciende la documentación simple; busco capturar 
                la emoción pura, esos instantes donde la música crea conexiones auténticas 
                y transforma tanto a artistas como a su audiencia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12">
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="noah-title text-5xl mb-3"
                >
                  500+
                </motion.div>
                <div className="noah-subtitle text-xs">
                  Concerts Documented
                </div>
              </div>
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="noah-title text-5xl mb-3"
                >
                  150+
                </motion.div>
                <div className="noah-subtitle text-xs">
                  Artists Worked With
                </div>
              </div>
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="noah-title text-5xl mb-3"
                >
                  5+
                </motion.div>
                <div className="noah-subtitle text-xs">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="mt-16 pt-12 border-t border-gray-200"
            >
              <blockquote className="noah-text text-xl italic leading-relaxed text-gray-600">
                "Cada proyecto es una oportunidad de preservar la magia efímera 
                de la música en vivo para las generaciones futuras."
              </blockquote>
              <div className="noah-subtitle mt-6">
                — Daniela Hinojosa
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About