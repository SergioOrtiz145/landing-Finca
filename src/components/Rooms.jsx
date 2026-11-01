import { motion } from 'framer-motion';
import { Bed, Bath } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Rooms = () => {
  const rooms = [
    {
      name: 'Habitación Principal',
      beds: '1 cama doble, 1 semidoble, 1 sencilla',
      bathroom: 'Baño privado',
      image: '/habitaciones/habitacion1.webp',
      capacity: '4-5 personas',
    },
    {
      name: 'Habitación 2',
      beds: '3 camas semidobles',
      bathroom: 'Baño compartido',
      image: '/habitaciones/habitacion2.webp',
      capacity: '6 personas',
    },
    {
      name: 'Habitación 3',
      beds: '3 camas semidobles',
      bathroom: 'Baño compartido',
      image: '/habitaciones/habitacion3.webp',
      capacity: '6 personas',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-crema-light">
      <div className="container mx-auto px-4">
        <SectionHeader
          number="02"
          label="Descansa con nosotros"
          title="Nuestras habitaciones"
          subtitle="Espacios cómodos y acogedores para tu descanso perfecto."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-tierra/10"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-tierra-dark mb-4">
                  {room.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Bed className="text-verde mt-1 flex-shrink-0" size={20} />
                    <p className="text-tierra">{room.beds}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bath className="text-verde mt-1 flex-shrink-0" size={20} />
                    <p className="text-tierra">{room.bathroom}</p>
                  </div>
                  <div className="pt-3 border-t border-tierra/20">
                    <p className="font-semibold text-verde">
                      Capacidad: {room.capacity}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
