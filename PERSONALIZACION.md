# 📝 GUÍA DE PERSONALIZACIÓN RÁPIDA

## ✅ Checklist de Personalización

### 1️⃣ Información de Contacto

#### WhatsApp
- [ ] `src/components/Contact.jsx` - línea 7
- [ ] `src/components/WhatsAppButton.jsx` - línea 6
```javascript
const whatsappNumber = '573XXXXXXXXX'; // Cambiar por tu número real
```

#### Teléfono y Email
- [ ] `src/components/Contact.jsx` - líneas 47 y 59
- [ ] `src/components/Footer.jsx` - líneas 58-59

### 2️⃣ Nombre de la Finca

- [ ] `src/components/Navbar.jsx` - línea 30
- [ ] `src/components/Footer.jsx` - líneas 12 y 64
- [ ] `index.html` - líneas 8 y 9

Buscar: **"Finca El Paraíso"** y reemplazar con el nombre real.

### 3️⃣ Imágenes

#### Organización Recomendada:
```
public/
└── images/
    ├── hero/
    │   ├── hero-1.jpg
    │   ├── hero-2.jpg
    │   └── ... (hasta hero-22.jpg)
    ├── rooms/
    │   ├── room-1.jpg
    │   ├── room-2.jpg
    │   └── room-3.jpg
    └── gallery/
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        └── ... (hasta gallery-22.jpg)
```

#### Actualizar en el Código:

**Hero Slider** (`src/components/Hero.jsx` - líneas 8-31):
```javascript
const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  // ... hasta 22 imágenes
];
```

**Habitaciones** (`src/components/Rooms.jsx` - líneas 8, 15, 22):
```javascript
image: '/images/rooms/room-1.jpg',
```

**Galería** (`src/components/Gallery.jsx` - líneas 9-32):
```javascript
const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg' },
  { src: '/images/gallery/gallery-2.jpg' },
  // ... hasta 22 imágenes
];
```

### 4️⃣ Redes Sociales

`src/components/Footer.jsx` - líneas 24-49:
```javascript
// Actualizar los href="#" con URLs reales
<a href="https://instagram.com/tu_usuario" ...>
<a href="https://facebook.com/tu_pagina" ...>
<a href="mailto:tu@email.com" ...>
```

### 5️⃣ Mensaje de WhatsApp (Opcional)

Si quieres cambiar el mensaje predefinido:
- `src/components/Contact.jsx` - línea 10
- `src/components/WhatsAppButton.jsx` - línea 8

```javascript
const whatsappMessage = encodeURIComponent(
  'Tu mensaje personalizado aquí'
);
```

### 6️⃣ Contenido Personalizado (Opcional)

#### Modificar Textos del Hero
`src/components/Hero.jsx` - líneas 63-68:
- Título principal
- Subtítulo
- Texto del botón

#### Ajustar Razones "Por Qué Elegirnos"
`src/components/WhyChooseUs.jsx` - líneas 6-29:
- Puedes cambiar títulos y descripciones
- Cambiar íconos (ver [Lucide Icons](https://lucide.dev))

#### Personalizar Amenidades
`src/components/Amenidades.jsx` - líneas 6-36:
- Modificar o agregar amenidades
- Cambiar descripciones

## 🎨 Personalización de Estilos

### Cambiar Colores
`tailwind.config.js` - líneas 8-21:
```javascript
colors: {
  tierra: {
    dark: '#TU_COLOR',    // Cambiar
    DEFAULT: '#TU_COLOR', // Cambiar
  },
  // ... etc
}
```

### Cambiar Fuentes
`tailwind.config.js` - líneas 22-25 y `src/index.css` - línea 1:
```javascript
fontFamily: {
  display: ['Tu Fuente Display', 'serif'],
  sans: ['Tu Fuente Sans', 'sans-serif'],
}
```

## 🚀 Antes de Publicar

- [ ] Todas las imágenes reemplazadas
- [ ] Número de WhatsApp actualizado
- [ ] Nombre de la finca actualizado en todos los lugares
- [ ] Información de contacto completa
- [ ] Redes sociales vinculadas
- [ ] Probado en móvil, tablet y desktop
- [ ] Imágenes optimizadas (usar TinyPNG o similar)
- [ ] SEO: Actualizar meta tags en `index.html`

## 📱 Pruebas Recomendadas

1. **Desktop**: Chrome, Firefox, Safari
2. **Móvil**: Android (Chrome), iOS (Safari)
3. **Funcionalidades**:
   - Scroll suave al hacer clic en "Reservar"
   - Slider del hero automático
   - Lightbox de galería
   - Botón flotante de WhatsApp
   - Animaciones al hacer scroll

## ⚡ Optimización de Imágenes

Recomendaciones de tamaño:
- **Hero**: 1920x1080px, calidad 85%, formato WebP
- **Habitaciones**: 800x600px, calidad 80%, formato WebP
- **Galería**: 1200x800px, calidad 80%, formato WebP

Herramientas:
- [TinyPNG](https://tinypng.com/) - Compresión
- [Squoosh](https://squoosh.app/) - Conversión a WebP
- [Cloudinary](https://cloudinary.com/) - CDN de imágenes

---

**¿Necesitas ayuda?** Revisa los comentarios `TODO:` en cada archivo. 🎯
