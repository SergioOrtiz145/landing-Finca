# 🏡 Landing Page - Finca Vacacional

Landing page completa para el alquiler de una finca vacacional en Colombia. Diseño premium, cálido y natural que evoca descanso y naturaleza.

## 🚀 Tecnologías Utilizadas

- **React 18** + **Vite** - Framework y build tool
- **Tailwind CSS** - Estilos y diseño responsive
- **Swiper.js** - Slider del hero y carruseles
- **Framer Motion** - Animaciones suaves al hacer scroll
- **Lucide React** - Íconos modernos
- **Yet Another React Lightbox** - Galería de imágenes con lightbox

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador: `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx           # Navegación fija
│   ├── Hero.jsx             # Hero fullscreen con slider
│   ├── WhyChooseUs.jsx      # Por qué elegirnos
│   ├── Rooms.jsx            # Habitaciones
│   ├── Amenidades.jsx       # Amenidades de la finca
│   ├── Gallery.jsx          # Galería con lightbox
│   ├── Contact.jsx          # Sección de contacto
│   ├── Footer.jsx           # Footer
│   └── WhatsAppButton.jsx   # Botón flotante de WhatsApp
├── App.jsx                  # Componente principal
├── main.jsx                 # Punto de entrada
└── index.css                # Estilos globales con Tailwind
```

## ⚙️ Personalización

### 🔧 Información a Reemplazar

Busca los comentarios `TODO:` en el código para identificar qué personalizar:

#### 1. **Número de WhatsApp**
- Archivos: `Contact.jsx`, `WhatsAppButton.jsx`
- Línea: `const whatsappNumber = '573XXXXXXXXX';`
- Reemplazar con: Tu número de WhatsApp (incluir código de país)

#### 2. **Nombre de la Finca**
- Archivos: `Navbar.jsx`, `Footer.jsx`, `index.html`
- Buscar: `Finca El Paraíso`
- Reemplazar con: El nombre real de tu finca

#### 3. **Imágenes**
Reemplazar las imágenes placeholder de Picsum Photos:

**Hero Slider (22 imágenes):**
- Archivo: `Hero.jsx`
- Dimensiones recomendadas: 1920x1080 o superior
- Formato: JPG optimizado para web

**Habitaciones (3 imágenes):**
- Archivo: `Rooms.jsx`
- Dimensiones recomendadas: 800x600
- Una imagen por cada habitación

**Galería (22 imágenes):**
- Archivo: `Gallery.jsx`
- Dimensiones recomendadas: 1200x800 o superior
- Mostrar diferentes áreas de la finca

**Cómo reemplazar:**
1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en los componentes:
```jsx
// De:
'https://picsum.photos/1920/1080?random=1'
// A:
'/images/hero-1.jpg'
```

#### 4. **Información de Contacto**
- Archivos: `Contact.jsx`, `Footer.jsx`
- Actualizar: Teléfono, email, ubicación

#### 5. **Redes Sociales**
- Archivo: `Footer.jsx`
- Actualizar los enlaces `href="#"` con las URLs reales

## 🎨 Paleta de Colores

La paleta de colores está definida en `tailwind.config.js`:

- **Tonos Tierra:**
  - `tierra-dark`: #3D2B1F
  - `tierra`: #6B4C3B

- **Verdes Oscuros:**
  - `verde-dark`: #2D4A3E
  - `verde`: #4A7C59

- **Acentos Crema/Dorado:**
  - `crema-light`: #F5E6C8
  - `crema`: #C9A84C

## 🎭 Tipografía

- **Playfair Display** - Títulos (font-display)
- **Inter** - Cuerpo de texto (font-sans)

Fuentes cargadas automáticamente desde Google Fonts.

## 📱 Características

✅ **100% Responsive** - Optimizado para móvil, tablet y desktop  
✅ **Scroll Suave** - Navegación fluida entre secciones  
✅ **Animaciones** - Efectos sutiles al hacer scroll (Framer Motion)  
✅ **Slider Automático** - Hero con transiciones suaves  
✅ **Lightbox Funcional** - Galería de imágenes expandible  
✅ **Botón WhatsApp Flotante** - Siempre visible con efecto de pulso  
✅ **SEO Friendly** - Meta tags y estructura semántica  
✅ **Optimizado para Performance** - Carga rápida

## 🚀 Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Deploy

Puedes deployar en:
- **Vercel**: `vercel deploy`
- **Netlify**: Arrastra la carpeta `dist/`
- **GitHub Pages**: Configura GitHub Actions
- **Cualquier hosting estático**

## 📄 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Preview de la build de producción
- `npm run lint` - Ejecuta ESLint

## 💡 Consejos

1. **Optimiza las imágenes** antes de reemplazarlas (usa TinyPNG o similar)
2. **Usa WebP** para mejor rendimiento
3. **Mantén los nombres descriptivos** en las imágenes
4. **Prueba en diferentes dispositivos** antes de publicar
5. **Actualiza el mensaje de WhatsApp** según tu preferencia

## 📞 Soporte

Si tienes alguna duda sobre la implementación, revisa:
- Los comentarios `TODO:` en el código
- La documentación de cada librería utilizada
- Los componentes están bien comentados

---

**¡Disfruta de tu nueva landing page!** 🎉
