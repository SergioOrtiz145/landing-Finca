const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-verde-dark text-crema-light py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-display text-2xl font-bold text-crema mb-2">
          Finca San Marcos
        </h3>
        <p className="text-sm mb-4 text-crema-light/80">
          Tu destino perfecto para escapadas inolvidables en Colombia
        </p>
        <div className="border-t border-crema-light/20 pt-4 text-sm text-crema-light/60">
          <p>&copy; {currentYear} Finca San Marcos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
