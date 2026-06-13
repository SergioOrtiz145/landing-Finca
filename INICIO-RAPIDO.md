# 🚀 INICIO RÁPIDO - 5 MINUTOS

## ⚡ Comenzar Ahora

```bash
# 1. Instalar dependencias (si aún no lo has hecho)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## ✅ Lo Mínimo que Debes Cambiar

### 1. **WhatsApp** (⏱️ 30 segundos)
Buscar en el proyecto: `573XXXXXXXXX` y reemplazar con tu número real.

**Archivos:**
- `src/components/Contact.jsx` (línea 7)
- `src/components/WhatsAppButton.jsx` (línea 6)

### 2. **Nombre de la Finca** (⏱️ 1 minuto)
Buscar en el proyecto: `Finca El Paraíso` y reemplazar con tu nombre.

**Archivos:**
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `index.html`

### 3. **Imágenes** (⏱️ 3 minutos)
1. Coloca tus fotos en `public/images/`
2. Actualiza las rutas en:
   - `src/components/Hero.jsx` (22 fotos del slider)
   - `src/components/Rooms.jsx` (3 fotos de habitaciones)
   - `src/components/Gallery.jsx` (22 fotos de galería)

**Ejemplo:**
```javascript
// Cambiar de:
'https://picsum.photos/1920/1080?random=1'
// A:
'/images/hero-1.jpg'
```

## 📦 Comandos Útiles

```bash
# Desarrollo (con hot reload)
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Linter (revisar código)
npm run lint
```

## 🎯 Checklist Mínimo Viable

- [ ] WhatsApp configurado
- [ ] Nombre de la finca actualizado
- [ ] Al menos 5 fotos del hero reemplazadas
- [ ] 3 fotos de habitaciones reemplazadas
- [ ] Probado en navegador (http://localhost:5173)

**Con esto ya tienes una landing funcional!** El resto se puede personalizar después.

## 📚 Documentación Completa

- `README.md` - Guía general del proyecto
- `PERSONALIZACION.md` - Checklist completo de personalización
- `EJEMPLOS.md` - Ejemplos de código para cada personalización

## 🆘 Problemas Comunes

### El servidor no inicia
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install
```

### Las imágenes no se ven
- Verifica que estén en la carpeta `public/`
- Las rutas deben empezar con `/images/...`
- Revisa que los nombres coincidan exactamente

### Error de compilación
```bash
# Limpiar caché y reiniciar
rm -rf node_modules/.vite
npm run dev
```

---

**¡Listo para empezar!** Ejecuta `npm run dev` y abre http://localhost:5173 🎉
