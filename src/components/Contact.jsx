import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '573204900186';
  const whatsappMessage = encodeURIComponent(
    'Hola, me interesa alquilar la finca, quisiera más información sobre disponibilidad y precios'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 md:py-28 bg-tierra-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 italic">
            ¿Listo para tu Escapada?
          </h2>
          <p className="text-xl md:text-2xl text-crema-light mb-8 leading-relaxed">
            Contáctanos para consultar disponibilidad y conocer nuestras tarifas especiales
          </p>
          <p className="text-lg md:text-xl mb-12 text-crema-light/90">
            Estamos aquí para ayudarte a planificar la experiencia perfecta para ti y tu grupo
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 shadow-2xl"
          >
            <MessageCircle size={32} />
            Consultar por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
