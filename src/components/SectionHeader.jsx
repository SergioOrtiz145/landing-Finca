import { motion } from 'framer-motion';

// Encabezado editorial compartido: número + etiqueta, título serif y bajada.
const SectionHeader = ({ number, label, title, subtitle, tone = 'light' }) => {
  const dark = tone === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 md:mb-20 max-w-3xl"
    >
      <div
        className={`flex items-center gap-4 mb-6 font-sans text-xs md:text-sm font-semibold tracking-[0.25em] uppercase ${
          dark ? 'text-crema' : 'text-terracota'
        }`}
      >
        <span>{number}</span>
        <span className={`h-px w-12 md:w-20 ${dark ? 'bg-crema/50' : 'bg-terracota/50'}`} />
        <span>{label}</span>
      </div>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-5 ${
          dark ? 'text-crema-light' : 'text-tierra-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl font-light leading-relaxed ${
            dark ? 'text-crema-light/80' : 'text-tierra'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
