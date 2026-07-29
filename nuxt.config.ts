export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2026-01-14',
  ssr: true,
  app: {
    head: {
      title: 'Nuestra Casa Carmen',
      meta: [
        {
          name: 'description',
          content:
            'Nuestra Casa Carmen es una asociación sin ánimo de lucro que acompaña a personas en riesgo de exclusión social.'
        }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap'
        }
      ],
      script: [
        {
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          defer: true,
          'data-cf-beacon': '{"token": "d5592de48cef47faac471d871ead9635"}'
        }
      ]
    }
  }
})
