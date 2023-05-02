import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT ?? 5173;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const html = template.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const [stream, preloadedState] = await render(url, {
        onShellReady() {
          res.write(html[0]);
          stream.pipe(res);
        },

        onAllReady() {
          res.write(
            html[1].replace(
              '<!--ssr-state-->',
              `<script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                  /</g,
                  '\\u003c'
                )}
              </script>`
            )
          );
          res.end();
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);
        next(error);
      }
    }
  });

  app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
}

createServer();
