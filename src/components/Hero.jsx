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
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contenido sobre el slider */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center text-white max-w-4xl">
          <span className="inline-block font-sans font-semibold tracking-widest uppercase text-sm mb-4 text-verde-light drop-shadow-lg">
            Finca San Marcos
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-shadow italic leading-tight">
            Tu Escape Perfecto en la Naturaleza
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-shadow font-light tracking-wide">
            Una experiencia única para hasta 17 personas en el corazón de Colombia
          </p>
          <button
            onClick={scrollToContact}
            className="bg-verde hover:bg-verde-light text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl tracking-wider uppercase"
          >
            Reserva Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
