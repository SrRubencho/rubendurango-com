---
title: "Cómo pongo a mis IAs a pelear, y para qué"
tags: [herramientas, flujo-de-trabajo, decisiones]
date: 2026-11-22
---
Hoy casi todas las personas que conozco usan IA desde una app de escritorio: Claude Desktop, la app de Gemini, ChatGPT Desktop. A mí me gustan especialmente esas tres. Pero cuando tengo un tema complejo me gusta "pelear en grupo": que una proponga, que otra la contradiga y que yo decida con las dos posiciones sobre la mesa. Durante un tiempo lo hice copiando y pegando entre ventanas, o pidiendo que crearan archivos internos que leyeran entre ellas, y era muy enredado. Cada una veía una versión distinta del problema, según lo que yo alcanzara a pegar.

El truco que encontré fue usar las versiones de línea de comandos (CLI) de cada una. Desde una conversación con Claude, Claude puede llamar a Gemini o a Codex por su CLI, pasarles el material, leer lo que responden y devolverles la crítica. Yo sigo en una sola conversación y la pelea pasa adentro.

![Ilustración en pixel art estilo Minecraft: en un ring de madera dentro de un taller, dos robots con guantes de boxeo, CLAUDE en terracota y GEMINI en azul, discuten con hojas de bocetos alrededor de un reproductor de música con pantalla verde. A la derecha, un hombre sentado como juez escribe en una tabla que dice VEREDICTO; a la izquierda, una labradora negra con gorra toca la campana](images/ias-a-pelear-ring.webp)

*Ellas pelean, yo pongo el veredicto. Ilustración generada con Codex.*

Esta mañana lo usé para pulir [[no-encontre-el-reproductor-que-queria|Pixel Tape]], el reproductor de música que me hice en septiembre. Esta nota cuenta cómo fue esa pelea, qué atrapó cada una y dónde falla.

## La pelea por la pantalla de Pixel Tape

A Pixel Tape le tengo mucho cariño, sobre todo a la pantalla verde con el casete. Pero había notado que unos botones tenían un estilo y otros otro, y que el medidor de barras se veía raro. Quería pulirlo sin perder la estética. Para eso llamé a Gemini 4 Neon, un modelo nuevo de Google que para mí tiene buen gusto en diseño, y lo puse a discutir con Claude.

La pelea tuvo cuatro rondas:

1. **Claude escribió sus propuestas primero**, antes de leer las de Gemini. Si lee primero a la otra, se contamina y termina opinando sobre lo que ella dijo.
2. **Gemini recibió una carpeta aparte**, con capturas de la app y extractos del código. No le di mi biblioteca de música ni rutas de mi computador. Las capturas son de una biblioteca de prueba.
3. **Cada una atacó las propuestas de la otra**, algo así como un cara a cara. Los criterios eran los mismos para las dos: que no rompa la vibra analógica, que sea una mejora real y no un cambio por cambiar, que se lea bien en el modo Mini, que respete el contraste y no le quite fluidez a la app. Gemini además tenía que defender o conceder cada propuesta suya que Claude atacó.
4. **Antes del veredicto, cada afirmación de hecho se comprobó contra el código.** Si una dijo "este color no llega al contraste mínimo", se midió.

Entre las primeras capturas y el veredicto pasó una media hora.

## Lo que atrapó cada una

Lo que más me gustó fue la tabla de errores. Las dos se equivocaron, y las dos lo pillaron en la otra:

| Quién | Qué dijo | Qué pasó |
|---|---|---|
| Claude | El color del foco no llega a 3:1 dentro de la pantalla | Falso. Da 3,56:1. Donde falla es sobre la barra rosa. |
| Claude | Hacer girar las bobinas más rápido cambiando la duración de la animación | Gemini tenía razón: cambiarla en marcha hace saltar las bobinas. Ganó la propuesta de Gemini. |
| Claude | Subir un poquito la luz de la pantalla al reproducir | Gemini tenía razón: el cambio era de 1,05:1, no se ve. |
| Gemini | No hay regla de "Reducir movimiento" para las bobinas | Falso. Existe y cubre toda la app. |
| Gemini | Las tres primeras barras del medidor son la misma | Cierto, y era un bug que Claude no vio. |
| Gemini | Los botones de presets tienen la física al revés: el activo sobresale en vez de estar hundido | Cierto. |

De trece ideas para la pantalla sobrevivieron cinco. Gemini concedió cuatro de las suyas cuando Claude se las atacó, entre ellas tres modos de visualizador que se veían lindos, pero escondían una interacción y obligaban a tocar el código del audio. Las que quedaron fueron el medidor nítido con su caída y su pico, las bobinas que giran según la velocidad, la pantalla que baja la luz en pausa y un "ST" en vez de "SEMITONOS". Y para los botones, un solo sistema de familias con la misma física.

![Antes y después de la pantalla de Pixel Tape reproduciendo una canción de prueba. El casete y el título no cambian; abajo a la izquierda, el medidor de barras pasa de verse borroso e irregular a tener columnas nítidas, con indicadores de pico](images/ias-a-pelear-pantalla.webp)

*La pantalla antes y después. Casi todo quedó igual a propósito. El cambio está en el medidor de abajo a la izquierda.*

Claude lo implementó en cuatro commits, y la luz en pausa quedó en uno aparte para poder revertirla sola, porque era la más subjetiva.

## Por qué por CLI y no en dos pestañas

Es lo primero que preguntó Gemini cuando le pasamos la idea de esta nota: ¿por qué no abrir dos pestañas y ya? Para una pregunta rápida, dos pestañas sirven. Para una pelea como esta, el CLI me da tres cosas:

- **El mismo material para las dos.** Una arma la carpeta con capturas y código, y la otra lee exactamente eso. Nadie depende de lo que yo alcance a pegar.
- **Las rondas no las hago yo.** Pasarle a una las propuestas y los ataques de la otra es justo el copiar y pegar que me cansaba.
- **Todo queda escrito.** Cada ronda quedó en un archivo dentro del proyecto, con el prompt y la respuesta. Si mañana quiero saber por qué la luz baja en pausa, está ahí.

## Si quieren intentarlo

No hace falta instalar nada a mano. Pueden pedirle a su IA de confianza que instale los CLI por ustedes. Estos son los oficiales:

- Claude Code: [claude.com/claude-code](https://claude.com/claude-code)
- Antigravity CLI (Gemini): [antigravity.google/docs/cli/install](https://antigravity.google/docs/cli/install)
- Codex CLI: [developers.openai.com/codex/cli](https://developers.openai.com/codex/cli/)

Y después, algo así:

```text
Quiero una segunda opinión de <otra IA> sobre <tema>. Hagámoslo así:
1. Escribe tus propuestas primero, antes de leer las de la otra.
2. Arma una carpeta aparte con solo lo que necesita ver. Nada de datos personales.
3. Llámala por su CLI en modo no interactivo y de solo lectura. Dile que no ejecute comandos.
4. Ataca sus propuestas, pásale las tuyas y pídele que ataque las tuyas y defienda o conceda las suyas.
   Los criterios son los mismos para las dos: <lo que me importa>.
5. Antes del veredicto, comprueba cada afirmación de hecho de las dos.
6. Dame una tabla: propuesta, de quién es, qué ataques recibió y si sobrevive, sobrevive con cambios o se descarta.
```

## Dónde falla

- **El modo sin interfaz bloquea comandos.** La primera vez que llamé a Gemini, quiso ejecutar un comando, el CLI lo negó porque no había nadie para aprobarlo y no devolvió nada. Nos pasó en las dos sesiones de hoy. Se arregla diciéndole que no use la terminal y dándole el material ya armado.
- **La otra IA no sabe lo que no le dan, y rellena.** Y la que orquesta también se equivoca. Hoy, mientras pensábamos esta nota, Claude me dijo que Gemini se había inventado algo, y en la segunda ronda Gemini le mostró que estaba escrito en una de mis notas. Alguien tiene que comprobar, y al final ese alguien soy yo.
- **Si no les piden pelear, se dan la razón.** El prompt tiene que pedir desacuerdo con todas las letras. Las IAs tienden a ser complacientes, incluso entre ellas.
- **El juez también es parte.** Claude escribió el veredicto y también tenía propuestas en la mesa. Que las afirmaciones se comprueben contra el código ayuda, pero la decisión final sigue siendo mía.
- **Cuesta más.** Más tiempo, más tokens y más texto para leer. Para algo que no me importa tanto, no vale la pena.

Y un comentario sincero para cerrar: cada vez mi ecosistema se siente menos como una caja de herramientas y más como un equipo de trabajo. Es una época hermosa para vivir.
