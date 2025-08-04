import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', href: '#', handle: '@danielahinojosa_foto' },
    { name: 'Behance', href: '#', handle: 'danielahinojosa' },
    { name: 'Email', href: 'mailto:daniela@hinojosafoto.com', handle: 'daniela@hinojosafoto.com' }
  ]

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="hero-subtitle !text-gray-800 !text-lg mb-4">
              Daniela Hinojosa
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Fotógrafa especializada en conciertos y eventos musicales. 
              Capturando la energía y emoción de cada momento único.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-light text-gray-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Contacto
            </h4>
            <div className="space-y-3">
              <p className="text-gray-600 font-light">
                Ciudad de México, México
              </p>
              <p className="text-gray-600 font-light">
                +52 55 1234 5678
              </p>
              <p className="text-gray-600 font-light">
                daniela@hinojosafoto.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-light text-gray-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Sígueme
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-gray-800 font-light transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.handle}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
              © {currentYear} Daniela Hinojosa Photography. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm font-light">
              Capturando momentos únicos, creando recuerdos inolvidables.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer