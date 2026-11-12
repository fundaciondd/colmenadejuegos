# Colmena de Juegos

Seis juegos para chicos de 5 y 6 años, pensados para el pasaje del jardín a primer grado, con la abejita Mielina como guía y el mundo de las abejas como escenario.

**Jugar:** https://fundaciondd.github.io/colmenadejuegos/

## Los seis juegos

1. **Las letras de mi nombre** – atrapar, en orden, las letras del propio nombre.
2. **Palabras de la colmena** – con qué letra empieza y cuántas sílabas tiene (abeja, miel, néctar, zángano, ahumador…), en tres niveles.
3. **Contá las abejas** – contar del uno al diez tocando las abejas.
4. **La mochila del apicultor** – qué se lleva al apiario y qué se queda en casa.
5. **Camino a la flor** – seguir un camino con el dedo: recta, ola, montaña, zigzag, bucle.
6. **Abeja al rescate** – volar inclinando el celular, defender el apiario con polen y volver a la colmena.

Al llenar las seis celdas de miel, la colmena entrega el diploma de abejita de primero.

## Archivos

- `index.html` · la app completa (basta con este archivo para jugar).
- `manifest.webmanifest`, `sw.js`, `icon-*.png` · instalación y uso sin conexión.
- `config.json` · dirección del receptor de resultados (vacío = no se envía nada).
- `planilla/` · script de Google Apps Script que recibe aperturas y rankings en una hoja de cálculo, con instrucciones.

## Características

- Un único archivo `index.html`, sin dependencias ni servidor; una vez cargado sigue funcionando sin conexión.
- Consignas leídas en voz alta (voz del teléfono en español), sonidos y música generados en el propio juego.
- Gráficos en pixel art propios.
- Sin publicidad, sin registro, sin cookies ni rastreadores: no se envía ningún dato a ningún servidor. El nombre del chico queda guardado solo en el teléfono, para recordar su progreso.
- Se juega desde el navegador del celular; conviene abrirlo desde el link (https) para que funcionen los sensores y la voz. Se puede instalar ("Agregar a pantalla de inicio"): abre a pantalla completa y funciona sin conexión.
- Botón ⛶ de pantalla completa en la colmena (Android y computadora). En iPhone, la pantalla completa se logra instalándola.
- **Libreta de la seño** (en la portada): resumen por nombre de lo jugado en ese teléfono (partidas, errores, tiempos, récord), con copia y descarga en planilla CSV. Nada sale del teléfono.

## Versiones

- 0.9 (noviembre 2026) · botón "Pantalla completa" con texto en la portada.

- 0.8 (noviembre 2026) · Mielina y los objetos de la mochila redibujados en 24×24; la voz termina cada frase antes de seguir (un toque adelanta); números en letra clara; pantalla completa también desde una ventana embebida (abre en pestaña propia); columna centrada en computadora; **Panal de honor** (los 20 mejores del teléfono) con subida opcional a la planilla de la Fundación y conteo anónimo de aperturas, ambos configurables en `config.json` (ver `planilla/INSTRUCCIONES.md`).

- 0.7 (noviembre 2026) · pantalla completa, instalable y sin conexión (manifiesto + `sw.js`), Libreta de la seño con estadística por nombre y planilla CSV.
- 0.6 (noviembre 2026) · pixel art, seis juegos, diploma. Abeja al rescate 0.7.

## Créditos y licencia

Un proyecto de la [Fundación Darío Donolo](https://www.fundaciondd.org.ar/), dentro del Programa de Apicultura Educativa y Ambiental. Hermano menor de [Misión Colmena](https://www.fundaciondd.org.ar/apps/apicultura), la serie para secundaria.

Licencia [Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.es): se puede copiar, adaptar y compartir citando la fuente y manteniendo la misma licencia. Ver `LICENSE.md`.
