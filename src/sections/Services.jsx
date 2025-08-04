import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const services = [
    {
      title: "Fotografía de Conciertos",
      description: "Captura la energía y emoción de presentaciones en vivo, desde conciertos íntimos hasta grandes espectáculos.",
      features: ["Cobertura completa del evento", "Fotos de alta resolución", "Entrega en 48-72 horas", "Derechos de uso incluidos"]
    },
    {
      title: "Festivales Musicales",
      description: "Documentación profesional de festivales, capturando tanto a los artistas como la experiencia del público.",
      features: ["Múltiples escenarios", "Backstage access", "Fotos del ambiente", "Paquetes personalizados"]
    },
    {
      title: "Eventos Corporativos",
      description: "Fotografía profesional para eventos empresariales, conferencias y presentaciones especiales.",
      features: ["Cobertura discreta", "Fotos corporativas", "Material promocional", "Reportaje completo"]
    },
    {
      title: "Sesiones Artísticas",
      description: "Retratos y sesiones creativas para músicos y artistas que buscan material promocional único.",
      features: ["Concepto personalizado", "Múltiples looks", "Retoque profesional", "Uso comercial"]
    }
  ]

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title mb-8">
            Mis Servicios
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Ofrezco servicios fotográficos especializados para capturar la esencia de cada momento musical
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-gray-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <button className="btn-minimal">
                    Consultar Precio
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24 py-16 border-t border-gray-200"
        >
          <h3 className="text-3xl font-light text-gray-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            ¿Tienes un proyecto especial en mente?
          </h3>
          <p className="text-gray-600 text-lg font-light mb-8 max-w-2xl mx-auto">
            Contacta conmigo para crear un paquete personalizado que se adapte perfectamente a tus necesidades
          </p>
          <button className="btn-minimal">
            Conversemos
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services