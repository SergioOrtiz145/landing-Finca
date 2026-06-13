# 💻 EJEMPLOS DE CÓDIGO PARA PERSONALIZACIONES

## 🖼️ Cómo Agregar tus Imágenes

### Paso 1: Organiza tus imágenes
Coloca tus imágenes en la carpeta `public/`:

```
public/
└── images/
    ├── hero-1.jpg
    ├── hero-2.jpg
    ├── room-1.jpg
    ├── gallery-1.jpg
    └── ...
```

### Paso 2: Actualiza el Hero

En `src/components/Hero.jsx`, reemplaza el array de imágenes:

```javascript
// ANTES (placeholder):
const heroImages = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  // ...
];

// DESPUÉS (tus imágenes):
const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
  '/images/hero-6.jpg',
  '/images/hero-7.jpg',
  '/images/hero-8.jpg',
  '/images/hero-9.jpg',
  '/images/hero-10.jpg',
  '/images/hero-11.jpg',
  '/images/hero-12.jpg',
  '/images/hero-13.jpg',
  '/images/hero-14.jpg',
  '/images/hero-15.jpg',
  '/images/hero-16.jpg',
  '/images/hero-17.jpg',
  '/images/hero-18.jpg',
  '/images/hero-19.jpg',
  '/images/hero-20.jpg',
  '/images/hero-21.jpg',
  '/images/hero-22.jpg',
];
```

### Paso 3: Actualiza las Habitaciones

En `src/components/Rooms.jsx`:

```javascript
const rooms = [
  {
    name: 'Habitación Principal',
    beds: '1 cama doble, 1 semidoble, 1 sencilla',
    bathroom: 'Baño privado',
    image: '/images/room-1.jpg', // ← Cambiar aquí
    capacity: '4-5 personas',
  },
  {
    name: 'Habitación 2',
    beds: '3 camas semidobles',
    bathroom: 'Baño compartido',
    image: '/images/room-2.jpg', // ← Cambiar aquí
    capacity: '6 personas',
  },
  {
    name: 'Habitación 3',
    beds: '3 camas semidobles',
    bathroom: 'Baño compartido',
    image: '/images/room-3.jpg', // ← Cambiar aquí
    capacity: '6 personas',
  },
];
```

### Paso 4: Actualiza la Galería

En `src/components/Gallery.jsx`:

```javascript
const galleryImages = [
  { src: '/images/gallery-1.jpg' },
  { src: '/images/gallery-2.jpg' },
  { src: '/images/gallery-3.jpg' },
  { src: '/images/gallery-4.jpg' },
  { src: '/images/gallery-5.jpg' },
  { src: '/images/gallery-6.jpg' },
  { src: '/images/gallery-7.jpg' },
  { src: '/images/gallery-8.jpg' },
  { src: '/images/gallery-9.jpg' },
  { src: '/images/gallery-10.jpg' },
  { src: '/images/gallery-11.jpg' },
  { src: '/images/gallery-12.jpg' },
  { src: '/images/gallery-13.jpg' },
  { src: '/images/gallery-14.jpg' },
  { src: '/images/gallery-15.jpg' },
  { src: '/images/gallery-16.jpg' },
  { src: '/images/gallery-17.jpg' },
  { src: '/images/gallery-18.jpg' },
  { src: '/images/gallery-19.jpg' },
  { src: '/images/gallery-20.jpg' },
  { src: '/images/gallery-21.jpg' },
  { src: '/images/gallery-22.jpg' },
];
```

## 📱 Configurar WhatsApp

### En Contact.jsx y WhatsAppButton.jsx:

```javascript
// ANTES:
const whatsappNumber = '573XXXXXXXXX';

// DESPUÉS (ejemplo con número real):
const whatsappNumber = '573001234567'; // Sin espacios ni guiones
```

### Personalizar el mensaje:

```javascript
// Mensaje por defecto:
const whatsappMessage = encodeURIComponent(
  'Hola, me interesa alquilar la finca, quisiera más información sobre disponibilidad y precios'
);

// O personalizado:
const whatsappMessage = encodeURIComponent(
  'Hola! Vi tu finca en la web y me gustaría saber si está disponible para el próximo fin de semana.'
);
```

## 🏷️ Cambiar Nombre de la Finca

### 1. Navbar.jsx (línea ~30):
```javascript
<h1 className={...}>
  La Casa de Campo  {/* ← Tu nombre aquí */}
</h1>
```

### 2. Footer.jsx (línea ~12):
```javascript
<h3 className="font-display text-2xl font-bold text-crema mb-3">
  La Casa de Campo  {/* ← Tu nombre aquí */}
</h3>
```

### 3. Footer.jsx (línea ~64):
```javascript
<p>&copy; {currentYear} La Casa de Campo. Todos los derechos reservados.</p>
                        {/* ↑ Tu nombre aquí */}
```

### 4. index.html (línea ~8):
```html
<title>La Casa de Campo - Alquiler Vacacional en Colombia</title>
       <!-- ↑ Tu nombre aquí -->
```

## 🎨 Personalizar Colores

### En tailwind.config.js:

```javascript
extend: {
  colors: {
    // Ejemplo: Cambiar a tonos azules y blancos
    tierra: {
      dark: '#1a365d',    // Azul oscuro
      DEFAULT: '#2c5282', // Azul medio
    },
    verde: {
      dark: '#2d3748',    // Gris oscuro
      DEFAULT: '#4a5568', // Gris medio
    },
    crema: {
      light: '#f7fafc',   // Blanco casi puro
      DEFAULT: '#4299e1', // Azul claro
    },
  },
}
```

## 🔧 Agregar una Nueva Amenidad

### En Amenidades.jsx:

```javascript
import { 
  Waves, Flame, Wifi, Car, Target, Utensils,
  TreePine // ← Importar nuevo ícono
} from 'lucide-react';

const amenities = [
  // ... amenidades existentes
  {
    icon: TreePine, // ← Nuevo ícono
    name: 'Zona de Camping',
    description: 'Espacio para acampar bajo las estrellas',
  },
];
```

Ver más íconos en: https://lucide.dev

## 📝 Modificar Sección "Por Qué Elegirnos"

### En WhyChooseUs.jsx:

```javascript
import { Heart, Users, MapPin, Shield, Star } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Atención Personalizada', // ← Cambiar título
    description: 'Te ayudamos a planear cada detalle de tu estadía', // ← Cambiar descripción
  },
  {
    icon: Users,
    title: 'Grupos Grandes',
    description: 'Espacio ideal para hasta 17 personas, perfecto para reuniones familiares',
  },
  {
    icon: MapPin,
    title: 'Cerca de Todo',
    description: 'A solo 2 horas de Bogotá, con fácil acceso por carretera',
  },
  {
    icon: Shield,
    title: 'Seguridad 24/7',
    description: 'Vigilancia y seguridad todo el día para tu tranquilidad',
  },
  {
    icon: Star, // ← Nueva razón
    title: 'Experiencia Única',
    description: 'Vive momentos inolvidables rodeado de naturaleza',
  },
];
```

## 🌐 Actualizar Redes Sociales

### En Footer.jsx:

```javascript
// Instagram
<a
  href="https://instagram.com/tu_usuario" // ← Cambiar aquí
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-crema transition-colors duration-300"
  aria-label="Instagram"
>
  <Instagram size={24} />
</a>

// Facebook
<a
  href="https://facebook.com/tu_pagina" // ← Cambiar aquí
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-crema transition-colors duration-300"
  aria-label="Facebook"
>
  <Facebook size={24} />
</a>

// Email
<a
  href="mailto:info@tufinca.com" // ← Cambiar aquí
  className="hover:text-crema transition-colors duration-300"
  aria-label="Email"
>
  <Mail size={24} />
</a>
```

## 🔄 Cambiar Velocidad del Slider

### En Hero.jsx:

```javascript
<Swiper
  modules={[Autoplay, EffectFade, Pagination]}
  effect="fade"
  autoplay={{
    delay: 4000, // ← Cambiar a 3000 (3 seg) o 5000 (5 seg)
    disableOnInteraction: false,
  }}
  // ...
>
```

## 📧 Actualizar Información de Contacto

### En Contact.jsx:

```javascript
// Línea ~47 (Teléfono)
<p className="font-semibold">+57 310 123 4567</p> {/* ← Tu número */}

// Línea ~59 (Email)
<p className="font-semibold">contacto@tufinca.com</p> {/* ← Tu email */}
```

### En Footer.jsx:

```javascript
// Línea ~58-59
<p className="text-sm mb-2">+57 310 123 4567</p> {/* ← Tu número */}
<p className="text-sm">contacto@tufinca.com</p>   {/* ← Tu email */}
```

---

**¡Con estos ejemplos puedes personalizar completamente tu landing page!** 🎨✨
