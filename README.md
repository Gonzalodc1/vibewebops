# Vibe Web Ops Website

Sitio web profesional desarrollado con Next.js 14+, TailwindCSS y Anime.js.

## 🚀 Quick Start

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar Entorno:**
   - Copia `.env.example` a `.env.local`
   - Rellena las variables:
     - `NEXT_PUBLIC_GA4_ID`: Tu ID de medición de Google Analytics 4 (G-XXXXX).
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Número de teléfono con prefijo (sin +), ej: 34600000000.
     - `NEXT_PUBLIC_APPS_SCRIPT_URL`: URL de tu Web App de Google Apps Script (ver sección abajo).

3. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000)

## 📊 Configuración de Lead Capture (Google Sheets)

Para recibir los formularios en un Excel (Google Sheet) y por email gratis:

1. Crea una Google Sheet nueva en tu Drive.
2. Nombra la Hoja 1 como "Leads" (opcional).
3. Añade cabeceras en la fila 1: `Timestamp`, `Nombre`, `Empresa`, `Contacto`, `Servicio`, `Mensaje`.
4. Ve a **Extensiones > Apps Script**.
5. Borra el código por defecto y pega el contenido del archivo `apps-script.js` de este proyecto.
6. Cambia la variable `EMAIL_RECIPIENT` en el script por tu email real.
7. Guarda (Ctrl+S).
8. Dale al botón **Implementar (Deploy) > Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Descripción: "Lead Form".
   - Ejecutar como: **Yo** (tu cuenta).
   - Quién tiene acceso: **Cualquier persona** (Importante para que funcione sin login).
9. Copia la URL de la aplicación web generada (termina en `/exec`).
10. Pégala en `NEXT_PUBLIC_APPS_SCRIPT_URL` en tu `.env.local`.

## 📈 Google Analytics 4 (GA4)

1. Crea una propiedad en Google Analytics.
2. Obtén el **ID de medición** (empieza por `G-`).
3. Ponlo en `.env.local`.
4. La web enviará eventos automáticos: `whatsapp_click`, `form_submit`, etc.
5. Usa la extensión "Google Analytics Debugger" en Chrome para ver los eventos en tiempo real en la vista "DebugView" de GA4.

## 🛠️ Despliegue en Vercel

1. Sube este código a GitHub.
2. Importa el repositorio en Vercel.
3. En la configuración del proyecto en Vercel, añade las **Environment Variables** (las mismas que en `.env.local`).
4. ¡Deploy!

## ✅ Checklist de QA

- [ ] Verificar que el formulario envía datos a la Sheet.
- [ ] Verificar que llega el email de aviso.
- [ ] Probar botones de WhatsApp en móvil.
- [ ] Aceptar cookies y verificar que GA4 carga.
- [ ] Rechazar cookies y verificar que GA4 NO carga.
