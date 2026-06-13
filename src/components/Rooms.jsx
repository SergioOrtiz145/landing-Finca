import { motion } from 'framer-motion';
import { Bed, Bath } from 'lucide-react';

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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-crema-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-verde font-sans font-semibold tracking-widest uppercase text-sm mb-3">
            Descansa con nosotros
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-tierra-dark mb-4 italic">
            Nuestras Habitaciones
          </h2>
          <div className="w-20 h-1 bg-verde mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-tierra max-w-2xl mx-auto font-light">
            Espacios cómodos y acogedores para tu descanso perfecto
          </p>
        </motion.div>

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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-verde/10"
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
