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
      ]
    }
  }
})
