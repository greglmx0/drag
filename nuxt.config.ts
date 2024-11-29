// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }],
      script: [],
      link: [],
      style: [],
      noscript: [],
    },
  },
  srcDir: 'src-nuxt', // Directory of your source files
  ssr: false, // Mettre a false pour : desktop (tauri)
  devtools: { enabled: true },
  telemetry: false,
  components: true,
  modules: [
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  vite: {
    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    // prevent vite from obscuring rust errors
    clearScreen: false,

    // Enable environment variables
    // Additional environment variables can be found at
    // https://tauri.app/2/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_', 'NUXT_'],

    // tauri expects a fixed port, fail if that port is not available
    server: {
      port: 1460,
      // Tauri requires a consistent port
      strictPort: true,
      // Enables the development server to be discoverable by other devices for mobile development
      host: '0.0.0.0',
      hmr: {
        // Use websocket for mobile hot reloading
        protocol: 'ws',
        // Make sure it's available on the network
        host: '0.0.0.0',
        // Use a specific port for hmr
        port: 5200,
      },
      watch: {
        // tell vite to ignore watching `src-tauri`
        ignored: ['**/src-tauri/**'],
      },
    } as any,
  },
  /*nitro: {
    preset: 'node-cluster',

    // Configurations optionnelles spécifiques au mode cluster
    config: {
      // Nombre de workers dans le cluster (par défaut, utilise tous les cœurs disponibles)
      workers: process.env.NITRO_CLUSTER_WORKERS || require('os').cpus().length,
    },
  },*/
  pinia: {
    storesDirs: ['./src-nuxt/stores/**'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  image: {
    // Options
  }
})