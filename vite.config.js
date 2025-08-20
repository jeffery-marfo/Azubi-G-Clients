
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://tmp-se-projectapi.azurewebsites.net',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
    },
  },
});


// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://tmp-se-projectapi.azurewebsites.net',
//         changeOrigin: true,
//         secure: true,
//         rewrite: (path) => path,
//         configure: (proxy, options) => {
//           proxy.on('error', (err, req, res) => {
//             console.log('Proxy error:', err);
//           });
//           proxy.on('proxyReq', (proxyReq, req, res) => {
//             console.log('Proxying request to:', proxyReq.getHeader('host') + proxyReq.path);
//           });
//         },
//       },
//     },
//   },
// });