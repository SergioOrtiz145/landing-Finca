import { motion } from 'framer-motion';
import { Waves, Flame, Wifi, Car, Target, Utensils } from 'lucide-react';
import SectionHeader from './SectionHeader';

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
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-verde-dark text-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          tone="dark"
          number="03"
          label="Lo que incluye"
          title="Amenidades"
          subtitle="Todo lo que necesitas para una estadía inolvidable."
        />

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
              className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 border border-crema/20"
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
