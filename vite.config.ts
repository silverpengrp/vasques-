import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function saveHeroImagePlugin(): Plugin {
  const handler = (req: any, res: any) => {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk: any) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (!data.image) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'No image data provided' }));
            return;
          }

          const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          
          const publicDir = path.resolve(__dirname, 'public');
          if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
          }

          // Permanently save to src/assets/images and public directory
          const srcAssetsDir = path.resolve(__dirname, 'src/assets/images');
          if (!fs.existsSync(srcAssetsDir)) {
            fs.mkdirSync(srcAssetsDir, { recursive: true });
          }
          fs.writeFileSync(path.join(srcAssetsDir, 'vasquez_hero_main.png'), buffer);
          fs.writeFileSync(path.join(publicDir, 'vasquez_hero_main.png'), buffer);
          fs.writeFileSync(path.join(publicDir, 'vasquez_white_jumper_hero.png'), buffer);
          fs.writeFileSync(path.join(publicDir, 'saved_hero.png'), buffer);
          fs.writeFileSync(path.join(publicDir, '22222-Photoroom.png'), buffer);
          
          const timestamp = Date.now();
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify({ 
            success: true, 
            message: 'Image saved permanently to server storage',
            url: `/vasquez_white_jumper_hero.png?t=${timestamp}`
          }));
        } catch (err: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
    } else {
      res.statusCode = 405;
      res.end('Method Not Allowed');
    }
  };

  return {
    name: 'save-hero-image-api',
    configureServer(server) {
      server.middlewares.use('/api/save-hero-image', handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/save-hero-image', handler);
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), saveHeroImagePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
