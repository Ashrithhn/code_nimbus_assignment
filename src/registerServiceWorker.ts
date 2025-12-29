// Register the service worker for PWA functionality
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    } catch (err) {
      console.error('ServiceWorker registration failed:', err);
    }
  }
};

// Create a basic service worker file
export const createServiceWorker = () => {
  const swContent = `
    const CACHE_NAME = 'fleur-v1';
    const urlsToCache = [
      '/',
      '/index.html',
      '/static/css/main.css',
      '/static/js/main.js',
      '/manifest.json',
      '/logo192.png',
      '/logo512.png',
      '/favicon.ico'
    ];

    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            // Return the cached response or fetch from network
            return response || fetch(event.request);
          }
        )
      );
    });
  `;

  // Write the service worker content to a file
  const blob = new Blob([swContent], { type: 'application/javascript' });
  const swUrl = URL.createObjectURL(blob);
  
  // For Vite projects, we'll create the sw.js file in the public directory
  // This is handled via the build process, so we'll just return the content
  return swContent;
};