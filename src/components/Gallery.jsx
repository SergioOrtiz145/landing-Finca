import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // TODO: Reemplazar con las imágenes reales de la finca
  // Dimensiones recomendadas: 1200x800 o superior
  const galleryImages = [
    { src: 'https://picsum.photos/1200/800?random=30' },
    { src: 'https://picsum.photos/1200/800?random=31' },
    { src: 'https://picsum.photos/1200/800?random=32' },
    { src: 'https://picsum.photos/1200/800?random=33' },
    { src: 'https://picsum.photos/1200/800?random=34' },
    { src: 'https://picsum.photos/1200/800?random=35' },
    { src: 'https://picsum.photos/1200/800?random=36' },
    { src: 'https://picsum.photos/1200/800?random=37' },
    { src: 'https://picsum.photos/1200/800?random=38' },
    { src: 'https://picsum.photos/1200/800?random=39' },
    { src: 'https://picsum.photos/1200/800?random=40' },
    { src: 'https://picsum.photos/1200/800?random=41' },
    { src: 'https://picsum.photos/1200/800?random=42' },
    { src: 'https://picsum.photos/1200/800?random=43' },
    { src: 'https://picsum.photos/1200/800?random=44' },
    { src: 'https://picsum.photos/1200/800?random=45' },
    { src: 'https://picsum.photos/1200/800?random=46' },
    { src: 'https://picsum.photos/1200/800?random=47' },
    { src: 'https://picsum.photos/1200/800?random=48' },
    { src: 'https://picsum.photos/1200/800?random=49' },
    { src: 'https://picsum.photos/1200/800?random=50' },
    { src: 'https://picsum.photos/1200/800?random=51' },
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
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
            Galería
          </h2>
          <p className="text-lg md:text-xl text-tierra max-w-2xl mx-auto">
            Conoce cada rincón de nuestra hermosa finca
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver imagen
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={galleryImages}
        index={photoIndex}
      />
    </section>
  );
};

export default Gallery;
