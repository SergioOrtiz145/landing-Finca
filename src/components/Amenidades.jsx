import { motion } from 'framer-motion';
import { Waves, Flame, Wifi, Car, Target, Utensils } from 'lucide-react';

const Amenidades = () => {
  const amenities = [
    {
      icon: Waves,
      name: 'Piscina con Jacuzzi',
      description: 'Relájate en nuestra amplia piscina y jacuzzi',
    },
    {
      icon: Flame,
      name: 'BBQ y Zona de Asado',
      description: 'Parrilla profesional para tus mejores comidas',
    },
    {
      icon: Target,
      name: 'Cancha de Tejo',
      description: 'Diversión tradicional colombiana',
    },
    {
      icon: Utensils,
      name: 'Sala y Comedor',
      description: 'Espacios amplios para compartir en familia',
    },
    {
      icon: Wifi,
      name: 'WiFi de Alta Velocidad',
      description: 'Conexión estable en toda la finca',
    },
    {
      icon: Car,
      name: 'Parqueadero Amplio',
      description: 'Espacio seguro para múltiples vehículos',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-verde-dark via-verde to-verde-light text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-crema font-sans font-semibold tracking-widest uppercase text-sm mb-3">
            Lo que incluye
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 italic">
            Amenidades
          </h2>
          <div className="w-20 h-1 bg-crema mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-crema-light max-w-2xl mx-auto font-light">
            Todo lo que necesitas para una estadía inolvidable
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/25 transition-all duration-300 border border-white/30 hover:-translate-y-1"
            >
              <div className="bg-crema text-verde-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <amenity.icon size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                {amenity.name}
              </h3>
              <p className="text-crema-light leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenidades;
