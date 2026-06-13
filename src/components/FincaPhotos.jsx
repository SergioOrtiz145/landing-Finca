import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// ─────────────────────────────────────────────────────────────────
//  AGREGA AQUÍ LOS NOMBRES DE TUS FOTOS (sin la ruta, solo el nombre)
//  Coloca los archivos en:  public/fotos/
//  Formatos soportados: .jpg  .jpeg  .png  .webp
// ─────────────────────────────────────────────────────────────────
const fotoNombres = [
  'DSC03623.webp',
  'DSC03601.webp',
  'DSC03608.webp',
  'DSC03615.webp',
  'DSC03651.webp',
  'DSC03667.webp',
  'DSC03670.webp',
  'DSC03673.webp',
  'DSC03680.webp',
  'DSC03683.webp',
  'DSC03686.webp',
  'DSC03692.webp',
  'DSC03695.webp',
  'DSC03700.webp',
  'DSC03704.webp',
  'DSC03707.webp',
  'DSC03714.webp',
  'DSC03737.webp',
  'IMG_3425.JPG.webp',
];

const fincaImages = fotoNombres.map((nombre) => ({
  src: `/fotos-web/${nombre}`,
}));

const FincaPhotos = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-verde font-sans font-semibold tracking-widest uppercase text-sm mb-3">
            Nuestra Finca
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-tierra-dark mb-4 italic">
            Un Paraíso Natural
          </h2>
          <div className="w-20 h-1 bg-verde mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-tierra max-w-2xl mx-auto font-light">
            Cada rincón fue diseñado para que desconectes, descanses y disfrutes en familia
          </p>
        </motion.div>

        {/* Grid responsive — primera foto grande, resto en cuadrícula */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]"
        >
          {/* Primera foto ocupa 2 columnas y 2 filas */}
          {fincaImages.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <img
                src={fincaImages[0].src}
                alt="Finca"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
            </motion.div>
          )}

          {/* Resto de fotos en celdas normales */}
          {fincaImages.slice(1).map((img, index) => (
            <motion.div
              key={index + 1}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={img.src}
                alt={`Finca ${index + 2}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={fincaImages}
        index={lightboxIndex}
      />
    </section>
  );
};

export default FincaPhotos;

