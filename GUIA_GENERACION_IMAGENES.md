# Guía de Generación de Imágenes para Nuestra Casa Carmen

Este documento contiene las especificaciones y prompts necesarios para generar las imágenes del proyecto **Nuestra Casa Carmen** utilizando herramientas de IA como Nano Banana.

## Estilo Visual General

Para mantener la coherencia con el propósito de la asociación, las imágenes deben seguir estas pautas:

*   **Atmósfera:** Cálida, acogedora, digna y esperanzadora.
*   **Paleta de Colores:** Tonos tierra, verdes suaves (basados en el `#4a7c6f` del proyecto), mucha luz natural y tonos cálidos de madera.
*   **Estilo Fotográfico:** Fotografía realista con profundidad de campo suave (bokeh), luz natural de atardecer o mañana, evitando el aspecto de "foto de stock" genérica.
*   **Localización:** Estilo canario (Las Palmas, La Isleta) cuando sea aplicable (paredes blancas, arquitectura local, luz intensa del Atlántico).

---

## Prompts para Generación

### 1. Hero Image (Imagen Principal)
*   **Uso:** Fondo de la sección de cabecera.
*   **Objetivo:** Transmitir "Hogar" y "Seguridad".
*   **Prompt:**
    > *A warm, inviting interior of a cozy living room in a community house. Soft sunlight streaming through a window, wooden furniture, a plant in the corner, and a bowl of fruit on a table. The atmosphere is peaceful and dignified. High quality photography, 8k, cinematic lighting, earthy tones, Mediterranean/Canarian style architecture.*

### 2. Quiénes Somos (Imagen de Apoyo)
*   **Uso:** Junto al texto de presentación.
*   **Objetivo:** Transmitir "Acompañamiento" y "Respeto".
*   **Prompt:**
    > *Close-up of two people's hands resting on a wooden table, one hand gently offering support to the other. Or a group of diverse people sitting together in a circle in a sunlit patio, blurred background. Focus on connection and human warmth. Realistic photography, natural light, soft colors.*

### 3. Servicios: Mudanzas y Recogida
*   **Uso:** Ilustrar los servicios de desalojo y mudanzas.
*   **Objetivo:** Transmitir "Trabajo" y "Utilidad".
*   **Prompt:**
    > *A professional and clean moving van parked in a bright street of Las Palmas de Gran Canaria (La Isleta style). Cardboard boxes neatly stacked nearby. Bright daylight, clear blue sky. Professional and reliable atmosphere. High resolution photography.*

### 4. Servicios: Donaciones y Recogida
*   **Uso:** Ilustrar la recogida de enseres y donaciones.
*   **Objetivo:** Transmitir "Solidaridad" y "Reutilización".
*   **Prompt:**
    > *A pile of neatly organized donated items: a wooden chair, some books, and a lamp in a bright, clean storage space. A person's hands are visible placing a box on top. Soft, warm lighting. Sustainable and community-focused atmosphere.*

### 5. Servicios: Pintura y Reformas
*   **Uso:** Ilustrar los trabajos de pintura.
*   **Objetivo:** Transmitir "Renovación" y "Cuidado".
*   **Prompt:**
    > *A close-up of a person painting a wall with a soft green color (sage green). The hand is steady, showing care and detail. The room is bright and clean. Fresh start feeling. Realistic texture, natural lighting.*

### 5. Historia: "De dónde nace"
*   **Uso:** Sección histórica de la asociación.
*   **Objetivo:** Transmitir "Superación" y "Legado".
*   **Prompt:**
    > *An artistic and symbolic image representing a new beginning. A silhouette of an elderly man looking towards a bright horizon or a lighthouse in the distance (symbolizing La Isleta). Warm sunset colors, emotional and inspiring atmosphere. Cinematic photography.*

---

## Instrucciones Técnicas

1.  **Formatos:** Se recomienda descargar las imágenes en formato `.webp` para optimizar el rendimiento de la web.
2.  **Dimensiones:**
    *   Hero: 1920x1080px.
    *   Secciones: 800x600px.
3.  **Ubicación en el Proyecto:** Guardar las imágenes en la carpeta `/public/images/` del proyecto (crear la carpeta si no existe).

## Cómo aplicar las imágenes en el código

Una vez generadas, puedes insertarlas en `app/pages/index.vue` usando:

```html
<img src="/images/nombre-de-la-imagen.webp" alt="Descripción de la imagen" class="section-image" />
```
