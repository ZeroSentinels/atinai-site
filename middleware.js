const MARKDOWN_ROUTES = new Map([
  ['/', '/index.md'],
  ['/index', '/index.md'],
  ['/index.html', '/index.md'],
  ['/servicios', '/servicios.md'],
  ['/servicios.html', '/servicios.md'],
  ['/servicios/index.html', '/servicios.md'],
  ['/agentes', '/agentes.md'],
  ['/agentes.html', '/agentes.md'],
  ['/agentes/index.html', '/agentes.md']
]);

function acceptsMarkdown(request) {
  const accept = request.headers.get('accept') || '';
  return accept.toLowerCase().includes('text/markdown');
}

export const config = {
  matcher: [
    '/',
    '/index',
    '/index.html',
    '/servicios',
    '/servicios.html',
    '/servicios/index.html',
    '/agentes',
    '/agentes.html',
    '/agentes/index.html'
  ]
};

export default function middleware(request) {
  if (!acceptsMarkdown(request)) return;
  if (request.method !== 'GET' && request.method !== 'HEAD') return;

  const pathname = new URL(request.url).pathname;
  const targetPath = MARKDOWN_ROUTES.get(pathname);
  if (!targetPath) return;

  const targetUrl = new URL(targetPath, request.url);
  const rewrittenRequest = new Request(targetUrl, request);

  return fetch(rewrittenRequest);
}
