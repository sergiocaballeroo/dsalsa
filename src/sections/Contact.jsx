import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" ref={ref} className="bg-white min-h-screen flex items-center" style={{ padding: '120px 0' }}>
      <div className="noah-container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20"
          >
            <div className="noah-subtitle mb-6">
              Get In Touch
            </div>
            <h2 className="noah-title mb-8">
              Let's Create Something Beautiful
            </h2>
            <p className="noah-text text-lg max-w-3xl mx-auto leading-relaxed">
              ¿Tienes un proyecto musical que necesita ser documentado con una perspectiva 
              artística única? Me encantaría conocer más sobre tu visión y cómo podemos colaborar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-2"
            >
              <h3 className="noah-title text-3xl mb-10">
                Contact Information
              </h3>
              
              <div className="space-y-10">
                <div>
                  <div className="noah-subtitle mb-3">Email</div>
                  <a 
                    href="mailto:daniela@hinojosafoto.com" 
                    className="noah-text text-lg hover:text-black transition-colors duration-300"
                  >
                    daniela@hinojosafoto.com
                  </a>
                </div>
                
                <div>
                  <div className="noah-subtitle mb-3">Phone</div>
                  <a 
                    href="tel:+525512345678" 
                    className="noah-text text-lg hover:text-black transition-colors duration-300"
                  >
                    +52 55 1234 5678
                  </a>
                </div>
                
                <div>
                  <div className="noah-subtitle mb-3">Location</div>
                  <div className="noah-text text-lg">
                    Ciudad de México, México
                  </div>
                </div>
                
                <div>
                  <div className="noah-subtitle mb-3">Instagram</div>
                  <a 
                    href="https://instagram.com/danielahinojosa_foto" 
                    className="noah-text text-lg hover:text-black transition-colors duration-300"
                  >
                    @danielahinojosa_foto
                  </a>
                </div>
              </div>

              {/* Why Work With Me */}
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h4 className="noah-title text-2xl mb-8">
                  Why Choose Me?
                </h4>
                <ul className="space-y-4 noah-text leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-black mr-3">•</span>
                    Más de 5 años especializados en fotografía de música en vivo
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3">•</span>
                    Equipos profesionales de última generación
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3">•</span>
                    Entrega rápida y confiable (48-72 horas)
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3">•</span>
                    Comprensión profunda de la cultura musical mexicana
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-3">•</span>
                    Pasión genuina por capturar la esencia de cada performance
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label className="block noah-subtitle mb-4">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="noah-input"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block noah-subtitle mb-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="noah-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block noah-subtitle mb-4">
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="noah-input resize-none"
                    placeholder="Cuéntame sobre tu proyecto: tipo de evento, fechas, ubicación, estilo musical, presupuesto aproximado, y cualquier detalle que consideres importante. Entre más información compartas, mejor podré entender tu visión."
                  />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="pt-4"
                >
                  <button type="submit" className="noah-btn w-full sm:w-auto">
                    Send Message
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="noah-divider" />
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          <div className="noah-text text-sm mb-4">
            © 2024 Daniela Hinojosa Photography. All rights reserved.
          </div>
          <div className="noah-text text-xs text-gray-500">
            Capturing unique moments, creating unforgettable memories.
          </div>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact