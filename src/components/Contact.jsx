import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '573204900186';
  const whatsappMessage = encodeURIComponent(
    'Hola, me interesa alquilar la finca, quisiera más información sobre disponibilidad y precios'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const mapsOpenUrl = 'https://www.google.com/maps?q=4.608421,-74.473259';
  const mapEmbedUrl = 'https://maps.google.com/maps?q=4.608421,-74.473259&z=17&output=embed';

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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
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
            className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-full transition-colors duration-300 shadow-2xl"
          >
            <MessageCircle size={32} />
            Consultar por WhatsApp
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-14"
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold mb-5 text-crema-light">
              Como llegar
            </h3>
            <p className="text-lg md:text-xl text-crema-light/90 mb-5">
              La finca se encuentra a 7 minutos de La Mesa via Anapoima.
            </p>
            <a
              href={mapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-5 bg-crema-light text-tierra-dark font-semibold px-6 py-3 rounded-full hover:bg-crema transition-colors duration-300"
            >
              Abrir en Google Maps
              <ExternalLink size={18} />
            </a>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-crema-light/20 shadow-2xl bg-white/5 backdrop-blur-sm">
              <iframe
                title="Ubicacion de la finca"
                src={mapEmbedUrl}
                width="100%"
                className="w-full aspect-square"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
