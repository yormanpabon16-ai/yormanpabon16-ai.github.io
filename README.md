# OVA · Cibernética y Teoría de la Organización

## Descripción
Objeto Virtual de Aprendizaje (OVA) interactivo que recorre dos temas: **Cibernética** y **Teoría de la Organización**. Cada tema combina páginas de información (con retratos de autores, esquemas y videos), cuatro juegos o ejercicios prácticos con retroalimentación y un quiz final. El menú lateral muestra el avance del estudiante.

## Autor
Yorman Alejandro Pabón Arciniegas · Ingeniería en Sistemas · Universidad Simón Bolívar.
Desarrollo web con asistencia de IA (Claude).

## Objetivos
**General:** apoyar la comprensión de los conceptos básicos de la cibernética y de la teoría de la organización mediante actividades interactivas.

**Específicos:**
- Identificar los componentes del lazo de control (sensor, comparador, controlador, efector), la retroalimentación positiva y negativa, la homeostasis y la ley de la variedad requerida.
- Reconocer a los principales autores y escuelas de la teoría de la organización (clásica, relaciones humanas, comportamiento, sistemas y contingencia) y los tipos de estructura organizacional.
- Aplicar los conceptos a casos prácticos con retroalimentación inmediata.
- Evaluar el aprendizaje mediante quizzes de verdadero/falso, respuesta escrita y relacionar.

## Funcionamiento de la navegación
- En las páginas teóricas, «Siguiente» funciona siempre.
- En juegos, casos prácticos y quizzes, «Siguiente» queda **desactivado** hasta completar correctamente la actividad. El botón «¿No pudiste?: Continuemos» está siempre activo y permite avanzar sin marcar la página como completada.
- Criterios de finalización: clasificar todas las tarjetas, mantener el simulador 25 s en rango, encontrar todas las palabras de la sopa, acertar todas las palabras del ahorcado, ordenar bien la línea de tiempo, resolver todas las situaciones de los casos prácticos y obtener al menos 60 % en el quiz.
- En el menú lateral cada página inicia con un círculo vacío; al completarla y pulsar «Siguiente» se reemplaza por un ✓ verde. El avance se guarda en el navegador (`localStorage`).

## Tecnologías
HTML5 · CSS3 · JavaScript (sin frameworks ni dependencias) · Canvas (fondo animado en `bg.js`) · SVG · `localStorage` · API de Wikipedia/Wikidata para retratos faltantes · YouTube (videos incrustados).

## Estructura
```
ova-cibernetica-yorman-pabon/
├── index.html      Estructura base de la página
├── styles.css      Estilos, colores y menú de progreso
├── script.js       Contenido, motores de juego, quizzes y navegación
├── bg.js           Fondo animado 3D
├── images/         5 retratos de autores y logo institucional
├── README.md       Este documento
└── Ficha_tecnica_OVA_Yorman_Pabon.pdf
```

## Instrucciones de ejecución
1. Descomprimir el ZIP.
2. Abrir `index.html` en un navegador moderno (Chrome, Edge, Firefox o Safari). No requiere instalación ni servidor.
3. Se necesita conexión a internet para ver los videos de YouTube y los retratos que no están en `images/` (se buscan automáticamente en Wikipedia/Wikidata); el resto funciona sin conexión.

Opcional, servidor local: `python3 -m http.server 8000` y abrir `http://localhost:8000`.

## Referencias
Ver la página «Créditos» del OVA y la ficha técnica en PDF (Wiener, 1948; Ashby, 1956; Shannon, 1948; Bertalanffy, 1968; Taylor, 1911; Fayol, 1916; Weber, 1922; Simon, 1947; Maslow, 1943; Herzberg et al., 1959; McGregor, 1960; Vroom, 1964; Woodward, 1965, entre otras).
