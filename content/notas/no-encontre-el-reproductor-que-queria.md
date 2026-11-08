---
title: "No encontré el reproductor que quería, así que lo hice"
tags: [herramientas, decisiones, futuro]
date: 2026-11-08
---
Hace muchos años tenía una Nintendo DS y la usaba sobre todo para escuchar música, porque me dejaba bajarle el tono a las canciones sin cambiarles la velocidad. Siempre escuchaba así, más grave. No sé bien por qué me gusta tanto; creo que tiene que ver con mi autismo. La DS ya no la tengo, pero hace unos meses encontré las viejas memorias SD con la música, justo cuando me estaba cansando de las suscripciones.

Busqué en AliExpress y Amazon un reproductor que tuviera control de tono y no encontré ninguno que me gustara. Así que un sábado de septiembre le pregunté a Codex qué comprar. Esa noche tenía instalado un reproductor hecho para mí.

![Las dos ventanas de Pixel Tape en un Mac: a la izquierda el modo Colección, con la biblioteca de 649 canciones y el reproductor con un casete pixelado; a la derecha el modo Mini, solo el reproductor. Las dos tienen el tono en −3 semitonos](images/pixel-tape-modos.webp)

*Pixel Tape en sus dos tamaños: Colección, con la biblioteca, y Mini, solo el reproductor. El control que importa es el tono.*

## La pregunta empezó siendo de compras

Lo primero que pedí no fue una app. Fue una recomendación: ¿compro un reproductor o espero una consola retro con Linux, como la Anbernic RG DS, y le hacemos uno? Codex comparó opciones con enlaces y envío a Colombia, pero ninguna me convenció del todo.

En medio de esa conversación escribí: "mientras, quiero que hagas un reproductor de música". Le di la carpeta de mi música, le pedí que se viera retro, en pixel art, con aleatorio y "por supuesto el pitch control". La pregunta pasó de "qué compro" a "lo hago" en un mensaje.

## Un sábado, versión por versión

La app empezó a tomar forma y me olvidé por completo de buscar un reproductor. Codex y yo empezamos una especie de partido de tenis: yo pedía algo, él lo devolvía construido y yo se lo devolvía con ajustes, hasta darle la forma y el estilo que quería. Este es el resumen del partido, con las pruebas automáticas que pasaban en cada entrega:

| Lo que pedí | Lo que quedó | Pruebas |
|---|---|---|
| Un reproductor retro con control de tono | Versión de navegador con mis 649 canciones, tono y velocidad independientes | 15 |
| "Volverla una app más nativa" | App de Mac con modo Mini y Colección, ventana que cambia de tamaño | 20 |
| Revisar rendimiento y un ícono oscuro | Menos redibujos, motor de audio que se suspende en pausa | 23 |
| Pulir transiciones y poder cambiar la carpeta de música | Transición suave, biblioteca configurable | 26 |
| Cambiarle el tono a Spotify | Un modo "Audio de apps", probado aparte antes de integrarlo | 30 |
| Íconos que no desentonen con macOS | Íconos claro y oscuro con acabado de vidrio | 31 |

![Los dos íconos de Pixel Tape, un casete pixelado con acabado de vidrio: uno lila sobre fondo claro y otro lila brillante sobre fondo casi negro](images/pixel-tape-iconos.webp)

*Los dos íconos, para el modo claro y el oscuro de macOS.*

Al final pedí un instalador para pasarla a mis otros equipos. Al otro día la instalé en mi MacBook sin problema y solo apareció un error pequeño con el ícono, que se corrigió en una conversación más. Hoy son unas 6.000 líneas de aplicación y otras 2.000 de pruebas y scripts. También fue mi forma de probar un modelo nuevo en Codex.

## Lo que hice yo

No escribí código y no lo leí a fondo. Lo que hice fue decir qué quería, decir "me encanta" o "esto se ve feo", y una vez algo distinto: "quiero hablar de algo, pero no inicies a hacer nada, dame tu opinión primero". Mi aporte real fue el criterio: me imaginaba usando la app y sabía cómo quería que se viera. Hablo un poco más de eso en [[como-dejo-trabajar-solos-a-mis-agentes]].

Ese mensaje llegó cuando me volví más ambicioso. El reproductor local funcionaba tan bien que pensé: "capturemos también el audio de otras apps, así puedo poner más graves los videos de YouTube y las canciones de Spotify". Codex me explicó que cambiar el tono funciona bien con audio en vivo, pero cambiar la velocidad no, porque Spotify sigue entregando la música a su ritmo y el audio se acumula o falta. Así que ese modo quedó solo con tono, que era lo único que me importaba. Y propuso no integrarlo de una: primero un programa aparte, una prueba de una hora con música real, y solo si pasaba, meterlo en la app. Me gusta que Codex sea así de cauto. La prueba pasó, y hoy ese modo es parte de Pixel Tape.

![Pixel Tape en el modo Audio de apps: Spotify seleccionado como fuente, un botón para activar el efecto y el control de tono en −3 semitonos](images/pixel-tape-audio-apps.webp)

*Audio de apps: Spotify sigue eligiendo las canciones y Pixel Tape solo les baja el tono.*

Eso es lo que me llevo como práctica, y no depende de que sea un reproductor:

```text
1. Antes de una función riesgosa: "no hagas nada todavía, dame tu opinión".
2. Construirla aparte, fuera de lo que ya funciona.
3. Escribir qué tiene que pasar para integrarla (duración, cortes, CPU, memoria).
4. Integrarla solo si pasa. Si no, la app sigue como estaba.
```

## Lo que se abarató y lo que no

Robin Sloan escribió en 2020 que [una app puede ser una comida casera](https://www.robinsloan.com/notes/home-cooked-app/): hizo una app de mensajes para su familia, cuatro personas, y nunca la publicó. Pixel Tape es eso, pero para una sola persona: yo. Lo que se abarató fue hacerla: pasó de algo que nunca iba a intentar a un sábado.

Lo que no se abarató:

- **Distribuirla.** Tiene firma local, no certificada por Apple, así que en otro Mac la primera vez hay que abrirla desde Privacidad y seguridad. Certificarla cuesta 99 dólares al año, y para la App Store nadie sabe todavía si la captura de audio de otras apps pasa la revisión. Cuando pregunté si valía la pena pagar, la respuesta fue "pruébala unos días en tu MacBook primero". Buen consejo.
- **Mantenerla.** Si una actualización de macOS cambia cómo se captura el audio de otras apps, arreglarla me toca a mí, con un agente y 8.000 líneas que no he leído a fondo. No me intimida, porque arreglar también se volvió más fácil, pero el trabajo sigue siendo mío.

## Dónde falla

- **Pesa 350 MB.** Es una app de Electron, un navegador completo empacado para reproducir MP3. Para mí no importa; para un producto sería un problema.
- **No tiene historial.** El proyecto no está en git. Si algo se daña, lo que tengo son las copias de versiones anteriores que el agente dejó al instalar.
- **Funciona porque sé decir qué quiero.** Las pruebas, la sesión de una hora y los criterios para integrar los propuso el agente, pero yo sabía reconocer cuándo una respuesta era buena. Eso no se abarató.

## La pregunta que me quedó

Crear esta app también me hizo cuestionarme algo: ¿y si esta es la dirección del mercado? Si la IA se vuelve tan poderosa y omnipresente que ya no hace falta un sábado completo para tener una app a la medida, sino unos segundos, y si conoce tan bien el contexto de su usuario que acierta en pocas iteraciones, un usuario no técnico no tendría por qué saber todo lo que eso implica. La IA tomaría esas decisiones por él.

A lo que quiero llegar: hoy, cuando algún amigo aparece con una idea de negocio para crear una app, pienso para mis adentros cuánto le quedará a esta época en la que pagamos por apps. ¿Tendrá sentido siquiera dentro de un año? Supongo que solo el tiempo lo dirá.

Sé que esto choca con lo que escribí más arriba: lo que no se abarató es justo lo que hoy se paga en una app. No es un argumento, es una inquietud. Tampoco es miedo a que me reemplacen; se parece más a la sensación de que el mapa cambia mientras lo estoy leyendo.

Lo que sí sé es que el software personal no es un producto. Es una herramienta para uno, y para eso alcanza con definirla bien y probarla en serio. Este ejercicio me enseñó que puedo crear mi propio software cuando lo necesite, y que no tiene que ser algo para vender: puede ser solo algo que relaja mi cabeza autista. Ya no tengo la DS, pero hoy uso Pixel Tape todos los días y volví a escuchar mi música más grave.
