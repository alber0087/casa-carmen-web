<template>
  <div>
    <!-- NAV -->
    <nav class="site-nav" ref="navEl">
      <div class="nav-inner">
        <span class="nav-logo">Casa Carmen</span>
        <a href="#ayudar" class="nav-cta">Colaborar</a>
      </div>
    </nav>

    <main>
      <!-- HERO -->
      <!-- TODO: Reemplazar la imagen por una foto real del barrio de La Isleta o de Las Palmas -->
      <section class="hero">
        <div class="hero-bg hero-bg--historia" aria-hidden="true"></div>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="hero-grain" aria-hidden="true"></div>
        <div class="hero-inner">
          <span class="hero-eyebrow">La Isleta · Las Palmas de Gran Canaria</span>
          <h1 class="hero-title">Nuestra<br>Casa<br>Carmen</h1>
          <div class="hero-rule" aria-hidden="true"></div>
          <p class="hero-tagline">Un proyecto que crece desde el corazón</p>
          <blockquote class="hero-quote">
            "Estamos construyendo, paso a paso, el hogar que muchas personas necesitan."
          </blockquote>
        </div>
        <div class="hero-scroll" aria-hidden="true">
          <div class="hero-scroll-line"></div>
          <span class="hero-scroll-label">Scroll</span>
        </div>
      </section>

      <!-- QUIÉNES SOMOS -->
      <section class="section section-quienes reveal">
        <div class="container">
          <div class="split">
            <div class="split-media">
              <img
                src="/Gemini_Generated_Image_85iftx85iftx85if (1).png"
                alt="Acompañamiento y apoyo"
                loading="lazy"
              />
            </div>
            <div class="split-body">
              <span class="label">Quiénes somos</span>
              <h2>Un proyecto que empieza hoy</h2>
              <p>
                Nuestra Casa Carmen es una asociación sin ánimo de lucro que nace con un
                objetivo claro: crear una casa hogar para personas en riesgo de exclusión
                social en Las Palmas de Gran Canaria.
              </p>
              <p>
                Todavía estamos en el camino. Hoy trabajamos para generar los recursos que
                nos permitan, poco a poco, hacer realidad ese sueño. Cada servicio que
                prestamos, cada donación que gestionamos, cada mueble que recogemos nos
                acerca un paso más.
              </p>
              <p class="quienes-badge">
                <span class="badge badge--activo">Proyecto activo · en construcción</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ROADMAP -->
      <section class="section section-camino reveal">
        <div class="container">
          <div class="section-header">
            <span class="label">Nuestro camino</span>
            <h2>Hacia dónde vamos</h2>
          </div>
          <div class="camino-steps stagger">

            <div class="camino-step camino-step--active">
              <div class="camino-step-header">
                <span class="camino-num">01</span>
                <span class="camino-badge">Ahora mismo</span>
              </div>
              <h3>Recogidas, mudanzas y donaciones</h3>
              <p>
                Hoy generamos ingresos a través de recogidas de enseres, trabajos de
                transporte y mudanza, y la gestión de donaciones. Estos servicios son el
                motor que financia todo lo que viene.
              </p>
            </div>

            <div class="camino-step">
              <div class="camino-step-header">
                <span class="camino-num">02</span>
                <span class="camino-badge">Próximo objetivo</span>
              </div>
              <h3>Primera tienda de segunda mano</h3>
              <p>
                Con lo recaudado, queremos abrir nuestra primera tienda de segunda mano.
                Un espacio donde los enseres donados encuentren nuevos dueños y generen
                recursos para la asociación.
              </p>
            </div>

            <div class="camino-step">
              <div class="camino-step-header">
                <span class="camino-num">03</span>
                <span class="camino-badge">El gran sueño</span>
              </div>
              <h3>La casa hogar</h3>
              <p>
                El destino final: una casa hogar donde ofrecer cobijo, estabilidad y una
                nueva oportunidad a personas con precariedad económica o necesidad urgente
                de un hogar digno.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- MISIÓN -->
      <section class="section section-mision reveal">
        <div class="container--narrow">
          <div class="mision-inner">
            <span class="label">Nuestra misión</span>
            <span class="mision-mark" aria-hidden="true">&ldquo;</span>
            <p class="mision-text">
              Actualmente trabajamos para un futuro. Cada paso que damos hoy
              es un ladrillo más en la casa que queremos construir para quienes
              más lo necesitan.
            </p>
          </div>
        </div>
      </section>

      <!-- VALORES -->
      <section class="section section-valores reveal">
        <div class="container">
          <div class="section-header">
            <span class="label">Lo que nos guía</span>
            <h2>Nuestros valores</h2>
          </div>
          <div class="valores-grid stagger">
            <div class="valor-item">
              <span class="valor-num" aria-hidden="true">01</span>
              <h3>Compromiso</h3>
              <p>
                Crear una casa hogar donde cada persona sea atendida con respeto,
                cercanía y atención a sus necesidades.
              </p>
            </div>
            <div class="valor-item">
              <span class="valor-num" aria-hidden="true">02</span>
              <h3>Integración</h3>
              <p>
                Acompañar a cada persona en su proceso de integración social y personal,
                ayudándola a construir un futuro mejor.
              </p>
            </div>
            <div class="valor-item">
              <span class="valor-num" aria-hidden="true">03</span>
              <h3>Felicidad</h3>
              <p>
                Ver cómo, día a día, contribuimos a mejorar la vida de las personas
                que forman parte de Nuestra Casa Carmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICIOS -->
      <section class="section section-servicios reveal">
        <div class="container">
          <div class="section-header">
            <span class="label">Cómo generamos recursos hoy</span>
            <h2>Nuestros servicios</h2>
          </div>
          <div class="servicios-grid stagger">
            <div class="servicio-card">
              <img
                src="/Gemini_Generated_Image_85iftx85iftx85if (2).png"
                alt="Mudanzas y desalojos"
                class="servicio-card-img"
                loading="lazy"
              />
              <div class="servicio-card-body">
                <h3>Mudanzas y Transporte</h3>
                <p>Realizamos desalojos de pisos y locales, desescombros y traslados de muebles y enseres.</p>
              </div>
            </div>
            <div class="servicio-card">
              <img
                src="/Gemini_Generated_Image_85iftx85iftx85if (4).png"
                alt="Pintura y mantenimiento"
                class="servicio-card-img"
                loading="lazy"
              />
              <div class="servicio-card-body">
                <h3>Mantenimiento y Pintura</h3>
                <p>Trabajos de pintura y pequeñas reformas para renovar espacios.</p>
              </div>
            </div>
            <div class="servicio-card">
              <img
                src="/Gemini_Generated_Image_85iftx85iftx85if (3).png"
                alt="Recogida de enseres y donaciones"
                class="servicio-card-img"
                loading="lazy"
              />
              <div class="servicio-card-body">
                <h3>Recogida de Enseres y Donaciones</h3>
                <p>Gestionamos donaciones y recogida de enseres. Cada objeto recogido financia el proyecto.</p>
              </div>
            </div>
          </div>
          <p class="servicios-note">Los beneficios de estos servicios se destinan íntegramente al proyecto Casa Carmen.</p>
        </div>
      </section>

      <!-- HISTORIA -->
      <section class="section section-historia reveal">
        <div class="container">
          <div class="split split--reverse">
            <div class="split-media">
              <img
                src="/Gemini_Generated_Image_85iftx85iftx85if (5).png"
                alt="Nuestra historia"
                loading="lazy"
              />
            </div>
            <div class="split-body">
              <span class="label">Nuestro origen</span>
              <h2>De dónde nace Casa Carmen</h2>
              <p class="historia-dropcap">
                Este proyecto nace de una historia real. Tras muchos años de trabajo y
                sacrificio dedicados a la familia, mi padre atravesó una etapa muy dura
                que lo llevó a perderlo todo.
              </p>
              <p>
                Después de una larga rehabilitación y una lucha constante por salir
                adelante, tomó una decisión difícil pero digna: no convertirse en una
                carga para su familia. Debido a sus bajos recursos económicos, decidió
                vivir en una casa hogar.
              </p>
              <p>
                Esa experiencia fue el origen de Nuestra Casa Carmen y de la voluntad de
                ofrecer a otras personas un hogar, apoyo y una nueva oportunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CÓMO AYUDAR -->
      <section class="section section-ayudar" id="ayudar">
        <div class="container">
          <div class="ayudar-inner reveal">
            <span class="label">Únete</span>
            <h2>Cómo puedes ayudar</h2>
            <p>
              Cada gesto cuenta. Puedes colaborar con donaciones de enseres, con
              voluntariado, contratando nuestros servicios o simplemente compartiendo
              el proyecto. Juntos llegaremos antes.
            </p>
            <a href="tel:647915468" class="ayudar-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              647 915 468
            </a>
            <div class="ayudar-pills">
              <span class="ayudar-pill">Donar enseres</span>
              <span class="ayudar-pill">Voluntariado</span>
              <span class="ayudar-pill">Contratar servicios</span>
              <span class="ayudar-pill">Difundir el proyecto</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACTO -->
      <section class="section section-contacto reveal">
        <div class="container">
          <div class="contacto-grid">
            <div>
              <span class="label">Dónde estamos</span>
              <address class="contacto-address">
                C/ Pérez Muñoz, 96 — Bajo<br>
                35009 La Isleta<br>
                Las Palmas de Gran Canaria
              </address>
            </div>
            <div>
              <span class="label">Llámanos</span>
              <a href="tel:667847517" class="contacto-phone">667 847 517</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-inner">
          <div>
            <div class="footer-logo">Nuestra Casa Carmen</div>
            <div class="footer-tagline">Un proyecto que crece desde el corazón</div>
          </div>
          <div class="footer-sep" aria-hidden="true"></div>
          <div class="footer-meta">
            La Isleta · Las Palmas de Gran Canaria<br>
            Asociación sin ánimo de lucro
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const navEl = ref(null)

onMounted(() => {
  window.addEventListener('scroll', () => {
    navEl.value?.classList.toggle('nav-scrolled', window.scrollY > 60)
  }, { passive: true })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 }
  )

  document.querySelectorAll('.reveal, .stagger').forEach((el) => observer.observe(el))
})
</script>
