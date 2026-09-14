/* PocketProp service worker — keep VERSION in sync with APP_VERSION in index.html */
const VERSION = '2026.09.14-b';
const CACHE_NAME = 'pocketprop-shell-' + VERSION;

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  'https://unpkg.com/vue@3/dist/vue.global.prod.js',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css',
  'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css',
  'https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js'
];

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith('pocketprop-') && key !== CACHE_NAME)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

function isNavigationRequest(request) {
  return request.mode === 'navigate' ||
    (request.method === 'GET' && request.headers.get('accept') && request.headers.get('accept').includes('text/html'));
}

function isMapTile(url) {
  return /tile\.openstreetmap\.org/.test(url) || /[abc]\.tile\./.test(url);
}

function isCdnAsset(url) {
  return /unpkg\.com|cdnjs\.cloudflare\.com|cdn\.tailwindcss\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url);
}

function patchSteelTheme(html) {
  if (!html || html.indexOf("setTheme('steel')") !== -1) return html;
  html = html.replace(
    '[data-theme="fir"], [data-theme="pine"] {\n            --brand-400: #8fbc98;\n            --brand-500: #3f6b54;\n            --brand-600: #2d4a3c;\n            --page-bg: #0f172a;\n            --app-bg: #0f172a;\n        }',
    '[data-theme="fir"], [data-theme="pine"] {\n            --brand-400: #8fbc98;\n            --brand-500: #3f6b54;\n            --brand-600: #2d4a3c;\n            --page-bg: #0f172a;\n            --app-bg: #0f172a;\n        }\n        [data-theme="steel"] {\n            --brand-400: #9bb4c9;\n            --brand-500: #4d6d85;\n            --brand-600: #334e63;\n            --page-bg: #0f172a;\n            --app-bg: #0f172a;\n        }'
  );
  html = html.replace(
    "@click=\"setTheme('fir')\" class=\"w-8 h-8 rounded-full border-2\" style=\"background:#3f6b54\" :class=\"colorTheme === 'fir' ? 'border-white scale-110' : 'border-slate-600'\" :title=\"t('themeFir')\"></button>",
    "@click=\"setTheme('fir')\" class=\"w-8 h-8 rounded-full border-2\" style=\"background:#3f6b54\" :class=\"colorTheme === 'fir' ? 'border-white scale-110' : 'border-slate-600'\" :title=\"t('themeFir')\"></button>\n                                        <button type=\"button\" @click=\"setTheme('steel')\" class=\"w-8 h-8 rounded-full border-2\" style=\"background:#4d6d85\" :class=\"colorTheme === 'steel' ? 'border-white scale-110' : 'border-slate-600'\" :title=\"t('themeSteel')\"></button>"
  );
  html = html.replace(
    'Fir for land and cottages.',
    'Fir for land and cottages. Steel for walk-ups and multiplexes.'
  );
  html = html.replace(
    "themeFir: 'Fir', themeSky:",
    "themeFir: 'Fir', themeSteel: 'Steel', themeSky:"
  );
  html = html.replace(
    '冷杉适合土地和度假屋。',
    '冷杉适合土地和度假屋。钢青适合步行上楼公寓和多套出租。'
  );
  html = html.replace(
    "themeFir: '冷杉', themeSky:",
    "themeFir: '冷杉', themeSteel: '钢青', themeSky:"
  );
  html = html.replace(
    "fir: 'fir' }",
    "fir: 'fir', steel: 'steel' }"
  );
  html = html.replace("APP_VERSION = '2026.09.11-a'", "APP_VERSION = '2026.09.14-b'");
  html = html.replace("APP_VERSION = '2026.09.14-a'", "APP_VERSION = '2026.09.14-b'");
  return html;
}

async function patchedHtmlResponse(request, response) {
  const html = await response.text();
  const next = patchSteelTheme(html);
  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = request.url;

  // App shell: network-first so GitHub Pages deploys show up after a cold relaunch
  if (isNavigationRequest(request) || url.endsWith('/index.html') || url.endsWith('/')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        const patched = await patchedHtmlResponse(request, fresh);
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, patched.clone());
        return patched;
      } catch (err) {
        const cached = await caches.match(request) || await caches.match('./index.html') || await caches.match('./');
        if (cached) return patchedHtmlResponse(request, cached);
        return new Response('PocketProp offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      }
    })());
    return;
  }

  // Map tiles: network-first, cache a copy for flaky mobile data
  if (isMapTile(url)) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, fresh.clone());
        return fresh;
      } catch (err) {
        const cached = await caches.match(request);
        if (cached) return cached;
        throw err;
      }
    })());
    return;
  }

  // Vendor scripts/fonts: cache-first
  if (isCdnAsset(url)) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const fresh = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, fresh.clone());
      return fresh;
    })());
    return;
  }

  // Same-origin static (icons, manifest): cache-first
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const fresh = await fetch(request);
      if (fresh && fresh.ok && new URL(url).origin === self.location.origin) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, fresh.clone());
      }
      return fresh;
    } catch (err) {
      if (cached) return cached;
      throw err;
    }
  })());
});
