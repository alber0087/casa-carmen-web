<template>
  <div class="gracias-page">
    <main class="gracias-main">
      <div class="gracias-card">
        <div class="gracias-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="32" cy="32" r="28" />
            <path d="M20 33l8 8 16-18" />
          </svg>
        </div>

        <span class="gracias-eyebrow">Donativo recibido</span>
        <h1 class="gracias-title">Gracias por tu<br>aportación</h1>
        <div class="gracias-rule" aria-hidden="true"></div>

        <p class="gracias-lead">
          Tu donativo ayuda a construir, paso a paso, el hogar que muchas personas
          necesitan. Recibirás un correo de Stripe con el recibo de tu aportación.
        </p>

        <div class="gracias-next">
          <h2>¿Qué pasa ahora?</h2>
          <ul>
            <li>
              <span class="gracias-num">01</span>
              <div>
                <strong>Recibo por email</strong>
                <p>Stripe te envía el justificante de tu donativo.</p>
              </div>
            </li>
            <li>
              <span class="gracias-num">02</span>
              <div>
                <strong>Tu aportación se pone a trabajar</strong>
                <p>Cada euro va directo al proyecto de la casa hogar.</p>
              </div>
            </li>
            <li>
              <span class="gracias-num">03</span>
              <div>
                <strong>¿Quieres acompañarnos más de cerca?</strong>
                <p>Puedes hacerte socio por 5 € al mes cuando quieras.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="gracias-actions">
          <NuxtLink to="/" class="gracias-cta">
            Volver a la web
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
          <a
            href="https://www.instagram.com/nuestracasacarmen/"
            target="_blank"
            rel="noopener noreferrer"
            class="gracias-cta gracias-cta--ghost"
          >
            Síguenos en Instagram
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Gracias por tu donativo · Nuestra Casa Carmen',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<style scoped>
.gracias-page {
  min-height: 100vh;
  background: var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
}

.gracias-main {
  width: 100%;
  max-width: 720px;
}

.gracias-card {
  background: #fff;
  border: 1px solid var(--cream-dark);
  border-radius: 4px;
  padding: 4rem 3rem;
  text-align: center;
  box-shadow: 0 30px 60px -30px rgba(28, 26, 23, 0.15);
}

.gracias-icon {
  color: var(--sage);
  width: 72px;
  height: 72px;
  margin: 0 auto 2rem;
}

.gracias-icon svg {
  width: 100%;
  height: 100%;
}

.gracias-eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sage);
  display: block;
  margin-bottom: 1.5rem;
}

.gracias-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.05;
  color: var(--ink);
  margin: 0 0 1.75rem;
}

.gracias-rule {
  width: 60px;
  height: 1px;
  background: var(--terracotta);
  margin: 0 auto 1.75rem;
}

.gracias-lead {
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ink-mid);
  max-width: 520px;
  margin: 0 auto 3rem;
}

.gracias-next {
  text-align: left;
  border-top: 1px solid var(--cream-dark);
  padding-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.gracias-next h2 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--ink);
  margin: 0 0 1.5rem;
  text-align: center;
}

.gracias-next ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.gracias-next li {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.gracias-num {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  color: var(--terracotta);
  line-height: 1;
  min-width: 2.5rem;
}

.gracias-next strong {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--ink);
  display: block;
  margin-bottom: 0.25rem;
}

.gracias-next p {
  margin: 0;
  color: var(--ink-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

.gracias-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.gracias-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--sage);
  color: var(--cream);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  padding: 0.95rem 1.6rem;
  border-radius: 2px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.gracias-cta svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.gracias-cta:hover {
  background: var(--sage-light);
  transform: translateY(-1px);
}

.gracias-cta:hover svg {
  transform: translateX(3px);
}

.gracias-cta--ghost {
  background: transparent;
  color: var(--sage);
  border: 1px solid var(--sage);
}

.gracias-cta--ghost:hover {
  background: var(--sage-pale);
}

@media (max-width: 600px) {
  .gracias-card {
    padding: 2.5rem 1.5rem;
  }

  .gracias-next li {
    gap: 1rem;
  }

  .gracias-num {
    font-size: 1.25rem;
    min-width: 2rem;
  }
}
</style>
