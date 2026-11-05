# Atinai — Sitio estático (Vercel + GitHub)

Sitio estático de Atinai publicado en **Vercel** y conectado al dominio **www.atinai.com**.

## Estructura


/
├─ index.html
└─ (opcional) assets: /css /js /img ...

> **Importante:** el archivo de entrada debe llamarse **`index.html`** y estar en la **raíz** del repo.

## Deploy automático (Vercel)
El proyecto está conectado a Vercel. Cada push a `main` genera un **Production Deployment** automático.

**Configuración en Vercel → Build & Deployment**
- Framework: **Other**
- Build Command: _(vacío)_
- Output Directory: **`.`**
- Root Directory: _(vacío)_

**Dominios**
- `www.atinai.com` → **Primary**  
- `atinai.com` → redirige a `www`

## Alcance de AI Discoverability
- DNS-AID queda fuera de alcance por ahora.
- No se implementan cambios de DNS ni registros SVCB/HTTPS.
- No se crean registros `_agents`, `_index._agents`, `_a2a._agents` ni variantes similares.
- Esto solo debería reconsiderarse cuando exista un agente público real y documentado.

## CSS de Tailwind

Tailwind se sirve como CSS estático y no utiliza el CDN en producción. Después de agregar o cambiar clases en las páginas HTML, recompilá el archivo minificado:

```bash
npx --yes tailwindcss@3.4.17 -c tailwind.config.js -i assets/css/tailwind.input.css -o assets/css/tailwind.min.css --minify
```

El archivo generado debe quedar incluido en el commit porque Vercel publica el sitio sin ejecutar un build.

## Cómo actualizar el sitio
### Opción A: editar desde GitHub Web
1. Abrí `index.html`, clic en **✏️ Edit**.
2. Guardá con **Commit changes** a `main`.
3. Vercel publica automáticamente.

### Opción B: desde tu compu
```bash
git clone https://github.com/<usuario>/atinai-site.git
cd atinai-site
# editar index.html
git add index.html
git commit -m "Actualiza contenido"
git push origin main ´´´´


