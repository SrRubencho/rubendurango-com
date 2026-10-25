---
title: "La pregunta no es dónde poner IA"
tags: [decisiones, valor, industria]
date: 2026-10-18
---
Hoy la IA nos da un poder que hace dos años no teníamos. Casi cualquier cosa que se me ocurra se puede construir en unas semanas, a veces en una tarde. Y justo por eso la pregunta difícil cambió: ya no es si se puede, **es si vale la pena**. En el trabajo esa pregunta casi siempre llega disfrazada de otra: "¿dónde podemos poner IA?". Creo que esa es la pregunta equivocada, y esta nota es sobre la que intento hacerme en su lugar.

## El martes de dentro de seis meses

Antes de arrancar un proyecto hago un ejercicio: me imagino la solución seis meses después de terminada, y a la gente usándola y acostumbrada a ella. Por ahí derecho me imagino el front, cómo se ve la pantalla, dónde hacen clic, de qué se quejarían, etc.

Con el tiempo me di cuenta de que la pantalla es la parte menos importante del ejercicio, y que puede ser una trampa. Si lo primero que veo es una interfaz, ya elegí la solución antes de saber si cambia algo. Hoy lo hago con tres preguntas, en este orden:

1. ¿Quién lo está usando un martes cualquiera? Un martes, no el día del lanzamiento ni el de la presentación.
2. ¿Qué decide distinto que antes no decidía, o decidía peor?
3. ¿Qué número se movió por eso?

La pantalla viene después, como prueba de que las respuestas son concretas. Si no puedo contestar la segunda, el proyecto no le ayuda a nadie a decidir nada, por muy bonito que se vea el front.

Cuando la decisión está clara, la técnica casi se elige sola: busco la solución más simple que cambie esa decisión. A veces es un modelo de lenguaje. Muchas veces es una regla, un tablero, un modelo de ML simple o hasta un promedio móvil, que corren miles de veces al mes sin costar casi nada. Arrancar por "dónde ponemos IA" invierte el orden: primero se elige el "cómo" y después se le busca un "para qué".

## El proyecto que no pasa la tercera pregunta

En la [[nota-cero]] dije que muchas notas iban a ser sobre cosas que no funcionaron. Esta es una de esas, a medias: el caso que más me incomoda de los míos, porque es de los más "de IA" que tengo en producción.

Es un sistema que lee lo que los clientes dicen de una marca y de su competencia, en encuestas y en redes sociales, y lo convierte en un reporte: de qué se quejan, qué tan urgente es, qué se repite, qué casos pueden escalar a una queja formal. Procesa miles de comentarios al mes, y el consumo de IA cuesta menos de un dólar mensual.

![Interfaz voxel titulada Captura de Insights: reúne encuestas y redes, compara marca y competencia y organiza temas, urgencia y casos por revisar](images/captura-insights-interfaz-voxel.webp)

*Del comentario al reporte. Interfaz conceptual con datos ilustrativos, generada con IA.*

Ahora, las tres preguntas:

- **¿Quién lo usa un martes?** Esta sí tiene respuesta: las áreas que atienden al cliente leen el reporte y actúan a partir de él. Calidad, por ejemplo, ve ahí las principales fallas por las que la gente se queja en redes.
- **¿Qué deciden distinto?** Sé de hallazgos que terminaron en acciones, pero no sé cuántos, ni cuáles, ni cuándo.
- **¿Qué número se movió?** No lo sé. Y es la pregunta que importa.

Y el proyecto no empezó por ahí. Si miro mis notas del arranque (así es, escribo todo), lo primero que construí fue la tubería: cómo capturar los comentarios, cómo limpiarlos, cómo enriquecerlos. La decisión que iba a mejorar vino después.

## Medir en horas no era medir valor

La primera vez que intenté mostrar el valor del sistema lo medí en horas: cuánto le tomaría a una persona hacer a mano lo que hace la máquina. Me dio entre 18 y 24 horas a la semana, con su equivalente en salarios, más una estimación de crisis evitadas.

Seis meses después reescribí ese análisis porque no lo podía defender. El problema era simple: nadie estaba haciendo esas horas. No había una persona leyendo encuestas a mano que el sistema liberara; *estaba calculando el ahorro de un trabajo que no existía*. Las horas miden lo que la tecnología reemplaza, y este sistema no reemplazaba a nadie. Si sirve para algo, es para que alguien decida mejor, y eso no se ve en horas.

En esa reescritura separé lo que sí podía medir (qué hace el sistema que antes no se hacía, cuánto cuesta, cuánto trabajo equivalente produce, con descuentos por calidad y cobertura) de lo que no podía: cuántas decisiones salen de él. Esa última quedó como un espacio en blanco, con una frase que escribí en mayo y que hoy releo con pena: es la métrica que el proyecto debería poder defender en seis meses, y hoy no puede.

Los seis meses se cumplen en noviembre.

![Un robot entrega un hallazgo y una persona toma una decisión, pero la conexión con el resultado queda incompleta y termina en un signo de interrogación](images/hallazgo-decision-resultado-voxel.webp)

*El hallazgo llega, la decisión ocurre, el resultado todavía queda por medir. Ilustración original generada con IA.*

## Lo que intenté y no funcionó

El plan era sencillo: un registro con una fila por hallazgo accionado. Qué se encontró, qué acción salió de ahí, quién la ejecutó, qué pasó después.

Lo intenté y no prosperó. Para las personas que usan el reporte era más molesto llevar el control de sus decisiones que recopilar la información por su cuenta. Si para medir el valor de una herramienta le cobro a sus usuarios más esfuerzo del que la herramienta les ahorra, el registro mata justo lo que quiere medir.

Así que hoy el sistema no calcula cuánto valor generan las acciones que la gente toma a partir de su análisis. Es, probablemente, su mayor debilidad. Y la sigo asumiendo, porque creo que la información que entrega es valiosa. Pero "creo" es justo la palabra que esta nota me obliga a mirar.

## Imaginar también el fracaso

Mi ejercicio de los seis meses tiene un punto ciego: imagina el éxito. Me pongo a ver a la gente usando la herramienta y nunca me pregunto qué pasa si no la usan.

Gary Klein propuso la versión inversa, el [*premortem*](https://hbr.org/2007/09/performing-a-project-premortem): antes de empezar, el equipo asume que el proyecto ya fracasó y cada uno explica por qué. Si lo hubiera hecho con este sistema, la respuesta habría salido rápido: no va a fracasar por la tecnología, va a fracasar porque nadie va a poder demostrar que cambió algo. De hecho lo escribí en mayo, casi con esas palabras: si en seis meses no hay tracción, el problema es de adopción, no de capacidad técnica.

Ahora hago las dos versiones. El martes de dentro de seis meses en que todo funcionó, y el martes en que nadie abrió el reporte. La segunda me dice qué tengo que medir desde el primer día.

## Por qué sigue siendo un trabajo en curso

No tengo el final de esta historia. Tengo un sistema que funciona, que la gente usa, y cuyo valor todavía no sé contar. Lo que sí tengo claro es que lo pendiente no es técnico: no me falta un mejor modelo, me falta una forma cómoda de saber qué decisiones salen del reporte. Una que no le cueste nada a quien decide, o que se cuele en algo que ya hace.

Cuando la encuentre, la cuento acá. Mientras tanto, cada vez que alguien me pregunta dónde podemos poner IA, intento devolverle otra pregunta: ¿qué decisión quieren tomar mejor, y cómo vamos a saber que la tomaron?
