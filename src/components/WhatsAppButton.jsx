import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = '573204900186';
  const whatsappMessage = encodeURIComponent(
    'Hola, me interesa alquilar la finca, quisiera más información sobre disponibilidad y precios'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Efecto de pulso */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
      
      {/* Ícono */}
      <MessageCircle size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-tierra-dark text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
