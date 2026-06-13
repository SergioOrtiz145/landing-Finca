import { motion } from 'framer-motion';
import { Heart, Users, MapPin, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: 'Confort Premium',
      description: 'Instalaciones de primera calidad para tu máximo disfrute y comodidad',
    },
    {
      icon: Users,
      title: 'Grupos Grandes',
      description: 'Espacio ideal para hasta 17 personas, perfecto para reuniones familiares',
    },
    {
      icon: MapPin,
      title: 'Ubicación Privilegiada',
      description: 'Rodeada de naturaleza con fácil acceso desde las principales ciudades',
    },
    {
      icon: Shield,
      title: 'Privacidad Total',
      description: 'Espacio privado y exclusivo para tu grupo, sin interrupciones',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-tierra-dark mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg md:text-xl text-tierra max-w-2xl mx-auto">
            Descubre por qué somos la opción perfecta para tu próxima escapada
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-verde text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <reason.icon size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-tierra-dark mb-3 text-center">
                {reason.title}
              </h3>
              <p className="text-tierra text-center leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
