import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  // ─────────────────────────────────────────────────────────────
  //  Coloca tus fotos de naturaleza en:  public/hero/
  //  Luego agrega el nombre de cada archivo aquí abajo
  // ─────────────────────────────────────────────────────────────
  const heroImages = [
    '/hero/dunns-s-river-falls-jamaica-dunn-s-river-falls-park.webp',
    '/hero/empty-boardwalk-natural-lush-rainforest.webp',
    '/hero/forest-surrounded-by-high-cliffs.webp',
    '/hero/lot-green-dwarf-palmetto-plantations-beautiful-cloudy-sky.webp',
    '/hero/panoramic-shot-beautiful-nature-kauai-island-hawaii.webp',
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-crema',
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contenido sobre el slider */}
      <div className="absolute inset-0 flex flex-col justify-end z-10 px-6 pb-16 md:pb-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto text-white"
        >
          <span className="inline-block font-sans font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-5 text-crema">
            Finca San Marcos · La Mesa, Cundinamarca
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.08] tracking-tight max-w-4xl">
            Tu escape perfecto <span className="font-medium text-crema">en la naturaleza</span>
          </h1>
          <p className="text-lg md:text-xl mb-9 font-light max-w-xl text-white/90">
            Una finca para hasta 17 personas en el corazón de Colombia.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <button
              onClick={scrollToContact}
              className="pointer-events-auto bg-terracota hover:bg-terracota-dark text-white font-semibold text-sm md:text-base px-9 py-4 rounded-full transition-[background-color,transform] duration-200 active:scale-[0.96] tracking-[0.15em] uppercase"
            >
              Reservar ahora
            </button>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85 font-light tracking-wide">
              <li>17 personas</li>
              <li>3 habitaciones</li>
              <li>Piscina con jacuzzi</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
