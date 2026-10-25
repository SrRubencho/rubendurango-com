---
title: "Cómo estoy aprendiendo"
tags: [aprendizaje, memoria, herramientas, flujo-de-trabajo]
date: 2026-10-11
---
Encontrar formas de aprender es retador, sobre todo ahora que la IA parece estar volviendo innecesario retener información en la memoria: cualquier dato o habilidad está a un prompt de distancia. Entonces la pregunta se vuelve otra: ¿cómo aprender, de forma que la IA sea una ventaja y parte del proceso? Esta nota es mi bitácora de cómo lo estoy intentando.

En julio dejé de leer como venía leyendo (un experimento agresivo). Mi método de siempre era leer el libro en físico y después reescribirlo capítulo por capítulo en [Obsidian](https://obsidian.md/), mi app para tomar notas, que les recomiendo muchísimo. Me ayudaba a retener por el ejercicio mismo de transcribir, pero me tomaba meses por libro. Archivé 250 notas de siete libros y cambié de sistema. Básicamente es así: leo el capítulo, escribo mi resumen, lo discuto con varias IA (NotebookLM y Claude) y guardo esa conversación destilada en una nota.

Le puse una regla para no engañarme: si la nota no tiene preguntas mías, no es una nota, es una transcripción 2.0. La IA puede resumir mejor que yo; lo que no puede hacer es preguntarse lo que yo me pregunto. Hace unos meses escuché una frase de Andrej Karpathy, en su conversación en [AI Ascent 2026 de Sequoia](https://sequoiacap.com/article/ai-ascent-2026), que todavía me resuena: se puede tercerizar el pensamiento, pero no la comprensión (*"you can outsource your thinking, but you can't outsource your understanding"*). Eso es lo que este sistema trata de mantener mío, la comprensión.

![Ilustración voxel de una persona que prueba una pieza en un puente de bloques a partir de un libro, mientras un robot propone otra opción y un labrador negro duerme junto a la mesa](images/aprendizaje-del-libro-al-caso-voxel.webp)

*Leer, discutir y probar qué cambia en lo que hago. Ilustración original generada con IA.*

Van ocho capítulos de *A Philosophy of Software Design*, de John Ousterhout, con ese método. Esta semana me senté a revisar las ocho notas, y lo que encontré no me gustó del todo.

## Lo que dicen mis propias notas

Cada nota tiene una sección para mis preguntas y otra para el resumen que escribe el agente a partir de la conversación. Las medí:

- En los capítulos 1 y 2, la sección de preguntas tiene tres preguntas mías cada una, con sus respuestas.
- Desde el capítulo 3, no tiene ninguna. Tiene un párrafo corto que dice cómo trabajé el capítulo.
- Mientras tanto, el resumen del agente pasó de unas 470 palabras en el capítulo 1 a unas 1.500 en los capítulos 4 a 7.

Leído así, estaba incumpliendo mi propia regla. Mi parte se encogía y la de la IA crecía. Me di cuenta de lo increíblemente fácil que es perder el rumbo: que mis IA empiecen a resumir capítulos sin que yo entienda o participe activamente, y aun así ver la nota escrita y pensar que aprendí algo. Recapitular fue la cachetada que necesitaba para volver a hacer bien el ejercicio que yo mismo me puse.

## Las preguntas no desaparecieron, cambiaron

Cuando volví a leer con más cuidado, vi otra cosa. En los primeros capítulos mis preguntas eran de comprensión: ¿entendí bien la diferencia entre eliminar y encapsular la complejidad? ¿Por qué el diseño incremental le gana al de cascada? Eran preguntas para confirmar que había leído bien, y una IA las contesta sin esfuerzo.

En los últimos capítulos ya no le pregunto al libro. Le llevo un caso mío. En el capítulo 7 le pregunté a Claude si él mismo aplica esas prácticas cuando programa para mí, y si una herramienta de auditoría que uso las revisa. En el 8 le llevé una decisión que tenía abierta esa semana en una herramienta de trabajo (bendito [[el-contexto-es-mio|contexto compartido]]). Esas preguntas no quedaron en la sección de preguntas porque no parecían preguntas: quedaron en secciones nuevas que fui inventando sobre la marcha, de casos propios y de prompts.

El método también cambió sin que yo lo decidiera: los dos primeros capítulos los conversé con NotebookLM, el 3 y el 4 los trabajé con un quiz, y del 6 en adelante la conversación principal fue con Claude, a partir de mi resumen. Lo que documenté en julio ya no es lo que hago, y eso está bien: si la IA cambia tanto en unos pocos meses, ¿por qué mis propias formas de trabajar deberían quedarse quietas?

## Un capítulo de punta a punta

El capítulo 6 es el que mejor muestra la diferencia. Trata sobre por qué los módulos de propósito general terminan siendo más simples que los especializados.

Mi resumen y mi conclusión fueron estos: programando con agentes no siento que controle qué tan específico es el código que generan, así que de ahora en adelante quiero mantener el sistema general.

Le pedí a Claude que opinara sobre esa conclusión, y me corrigió en una palabra. Ousterhout no dice "general", dice *somewhat general-purpose*, algo general: la funcionalidad responde a lo que necesito hoy y la interfaz no queda amarrada a ese caso. "Mantener el sistema general", así sin más, está a un paso de la sobreingeniería que el mismo capítulo advierte.

La corrección sola no es lo que me quedó. Lo que me quedó fue lo que vino después: me di cuenta de que sí controlo qué tan específico es el código, solo que no en el momento en que yo creía. No lo controlo mientras el agente escribe, lo controlo antes, en cómo formulo el pedido, y después, revisando lo que entregó. Si le pido "agrega soporte para la tecla borrar", el agente escribe código para la tecla borrar. Si le pido una operación que borre un rango de texto sin mencionar teclas, escribe algo que sirve para más cosas. La forma del pedido se vuelve la forma del código.

De esa conversación salió una lista de prompts que guardé en la nota: unos para antes de pedir código y otros para revisar el diff.

![Infografía voxel con cuatro pasos de aprendizaje: leo, escribo mi resumen, lo discuto con un caso mío y reviso cómo trabajo; un libro, un cuaderno y un puente de bloques conectan las etapas](images/aprendizaje-proceso-voxel.webp)

*El método hoy, en cuatro pasos. Infografía original generada con IA.*

## La deuda que me preocupa

En el capítulo 3 anoté algo que hoy me parece el centro de todo esto. Programo casi todo con IA, y le temo a una deuda distinta de la técnica: la de conocimiento. Código que usé pero que todavía no entiendo, entonces lo debo.

Leer con IA tiene el mismo riesgo. Una nota de 1.500 palabras, bien escrita y bien organizada, se siente como aprendizaje. Pero si el que escribió esas 1.500 palabras fue el agente, lo que yo tengo es una nota, no el conocimiento.

Lo que sí noto, y es lo que me hace seguir con el método, es que estas notas se sienten distintas a las de antes. No son un resumen 1:1 del libro, y tampoco son solo mi interpretación, que siempre va a ser sesgada. Mezclan lo que dice el libro con lo que ya sé: en el capítulo 3 terminé pensando en cómo planeo con mis agentes y en una skill de Matt Pocock que quería probar, y en el 7 auditando otra skill suya contra lo que acababa de leer. Mis notas viejas se creaban en aislamiento: eran el libro y nada más. Ahora cada capítulo se engancha con algo que ya conozco, y siento que así es como crece el aprendizaje, desde lo conocido hacia lo que todavía no sé.

Lo que creo hoy, con ocho de veintidós capítulos, es que lo que aprendo no está en el resumen. Está en el caso que le llevo. Las preguntas de comprensión las puede contestar cualquiera; la pregunta de qué cambia en cómo trabajo solo la puedo hacer yo.

## La otra memoria

En [[el-contexto-es-mio|El modelo cambia, el contexto es mío]] conté cómo llevo la memoria de mis proyectos afuera de las herramientas. Esta nota es sobre la otra memoria, la mía. Con los proyectos, que la IA escriba el contexto está bien, porque lo importante es que el contexto exista. Con lo que estudio no alcanza con que exista la nota: el que tiene que cambiar soy yo.
