---
title: "Hace años no escribo import pandas"
tags: [valor, industria, ensayo]
date: 2026-10-25
---
Hace años no escribo `import pandas as pd`. Tampoco `import matplotlib.pyplot as plt`. Y no los extraño: eran un medio para un fin. Esta nota es sobre ese fin, y sobre una sospecha que tengo hace rato: que con todo el ruido de la IA generativa nos estamos olvidando de la parte de la disciplina que más valor genera, y que apenas empezamos a explotar.

## 2018: el valor estaba en el resultado

Entré a este mundo en 2018 por la estadística, la ciencia de datos y el machine learning clásico. Soy ingeniero químico, así que mis primeros problemas fueron de química.

El proyecto que me catapultó fue un modelo de mezcla: un random forest que, a partir de una formulación, predecía las propiedades de una mezcla de polímeros. Elegí random forest por razones muy de ese tipo de problema. Los datos eran tabulares y no demasiados. Las propiedades de una mezcla no son la suma de las de sus componentes: hay interacciones que no son lineales, y los árboles las capturan sin que uno tenga que adivinarlas de antemano. Y la importancia de las variables me dejaba explicarle al equipo de formulación por qué el modelo decía lo que decía, en su propio idioma. Usamos el modelo para disminuir la cantidad de ensayos necesarios para validar una mezcla a gran escala (lotes de más de 40 toneladas), y luego empezamos a usarlo para simular mezclas que no habíamos intentado pero que eran interesantes.

Después vinieron otros: modelos de clustering para optimizar un portafolio de productos, modelos de mezcla reactiva con deep learning. Lo que tenían en común no era la técnica. Era que cada uno terminaba en un número que se veía en el estado de resultados de la empresa.

![Ilustración voxel de un ingeniero que selecciona una muestra de polímeros junto a una pantalla con un árbol de decisión, con un mezclador industrial al fondo](images/modelo-mezclas-fabrica-voxel.webp)

*De una formulación en el laboratorio a una decisión en producción. Ilustración original generada con IA.*

## Después llegó ChatGPT

En algún momento el deep learning empezó a tomar la forma de la IA que conocemos hoy. Apareció ChatGPT, y una disciplina fascinante, basada en predecir el siguiente token, se volvió famosa de un día para otro.

Los proyectos que me pedían cambiaron con ella. Chatbots que resumen o arman informes a partir de unos insumos. Sistemas RAG que toman una cantidad enorme de documentos y permiten hacer análisis transversales que antes nadie tenía tiempo de hacer. Proyectos interesantes, y que la gente usa.

Pero empecé a notar algo. Los beneficios ya no los veía en el estado de resultados; los veía en el tiempo que les ahorraba a mis usuarios. Eso también me hacía feliz, porque siempre he sido alguien muy volcado al servicio. Pero cada vez tenía menos proyectos de ciencia de datos y ML tradicional, y menos beneficios que pudiera señalar con el dedo.

## Por qué no lo veía en el P&G

Esa observación tiene dos lecturas, y la honesta es que las dos son ciertas a la vez.

La primera es que esos proyectos generan menos valor. La segunda es que el tiempo ahorrado no llega solo al P&G. Llega únicamente si alguien lo convierte en otra cosa (más ventas, menos errores, una decisión que antes no se tomaba) y si alguien lo mide. Casi nunca pasan las dos. En [[la-pregunta-no-es-donde-poner-ia]] conté cómo calculé el ahorro de horas de un trabajo que nadie estaba haciendo: el valor de esos sistemas es real, pero se esconde muy fácil detrás de una métrica que no lo captura.

Aun así, hay una diferencia de fondo. Un modelo que decide una formulación o un precio toca la plata directamente. Un resumen toca el tiempo de una persona, y ese tiempo solo se vuelve plata si la persona decide algo distinto (y medirlo es muy enredado).

## Lo que dicen los números, y lo que no

Hace unos años leí el reporte de McKinsey sobre [el potencial económico de la IA generativa](https://www.mckinsey.com/featured-insights/sustainable-inclusive-growth/the-economic-potential-of-generative-ai-the-next-productivity-frontier) (junio de 2023). Lo que más recuerdo no es la cifra de la IA generativa, entre 2,6 y 4,4 billones de dólares al año en 63 casos de uso, sino la comparación: la IA y la analítica no generativas podrían aportar entre 11 y 17,7 billones. El mismo reporte dice que esas otras aplicaciones siguen siendo la mayor parte del valor potencial de la IA.

Hay que leerlo con cuidado: es valor *potencial*, estimado en 2023, cuando casi nadie tenía IA generativa en producción. No prueba nada por sí solo.

Más reciente, en marzo de este año, Michele Tucci publicó en TechRadar una columna con un título que me gustó mucho: [*AI agents are flashy, but machine learning still pays the bills*](https://www.techradar.com/pro/ai-agents-are-flashy-but-machine-learning-still-pays-the-bills). Es opinión, no trae datos, pero el argumento es bueno: un random forest decide si una transacción es fraude en milisegundos y por fracciones de centavo, y un agente no puede "ponerse a pensar" cada una. Y los agentes, dice, funcionan tan bien como la capa de ML que tienen debajo.

Ninguna de las dos fuentes demuestra mi sospecha. Coinciden con lo que he visto, nada más.

## Cómo uso las dos hoy

No quiero descalificar una tecnología con la otra. Hoy uso la IA generativa todos los días, de dos formas: como compañero para pensar (con [[el-contexto-es-mio|mi propio contexto]]) y como asistente para programar. No me apena decir que es una tecnología que amo y con la que interactúo todo el día, y también es la razón por la que no he vuelto a escribir pandas a mano.

Y con ese tiempo liberado estoy construyendo soluciones que usan modelos de ML para tomar decisiones y justificarlas, dejando claro su nivel de error. Dos ejemplos:

- **Una herramienta de rentabilidad** que usa un modelo hedónico de precios. La idea viene de la economía: el precio de un producto se descompone en el valor implícito de cada uno de sus atributos, con una regresión del precio contra esos atributos. Encima, un clustering agrupa los productos comparables, para que cada uno se mida contra sus pares y no contra todo el catálogo. Lo que me importa es que cada recomendación sale con su margen de error a la vista: quien decide sabe cuánto confiar en ella.
- **Un pronóstico de demanda** donde, todavía, no logro superar al método que ya existe, aunque sigo trabajando en eso.

## ¿Es un problema difícil, o me estoy oxidando?

El segundo ejemplo es el que me tiene pensando. En el fondo no sé si es un problema de pronóstico muy difícil o si me estoy oxidando.

Hay una parte técnica de la respuesta. Un pronóstico que ya existe en una empresa suele llevar información que un modelo no ve: promociones, criterio comercial, lo que alguien sabe porque habló con un cliente. Y los métodos simples son mucho más difíciles de vencer de lo que parece. En 2018, Spyros Makridakis y sus colegas [compararon métodos populares de ML contra ocho métodos estadísticos tradicionales](https://doi.org/10.1371/journal.pone.0194889) en 1.045 series mensuales de la competencia M3: los estadísticos ganaron en todos los horizontes de pronóstico, y con mucho menos cómputo. La historia no se quedó ahí (en la competencia M5, de 2020, ya ganaron modelos de ML), pero la lección sigue: ganarle a un método establecido es difícil por definición.

Eso no me absuelve. Y hay una incomodidad que prefiero nombrar: digo que no extraño pandas y, en la misma nota, me pregunto si me estoy oxidando. ¿Tienen que ver? No lo sé. Escribir a mano la limpieza de los datos me obligaba a mirarlos fila por fila. Delegarla me deja más tiempo para pensar el modelo, pero quizás también me deja mirar menos.

![Ilustración voxel de una persona que revisa datos y compara dos pronósticos mientras un robot programa a su lado y un labrador negro duerme cerca](images/delegar-codigo-revisar-datos-voxel.webp)

*Delegar el código y seguir mirando los datos. Ilustración original generada con IA.*

## No es una contra la otra

Lo que quiero no es volver a 2018. Es no dejarnos distraer por la tecnología nueva hasta olvidar otras de las que apenas rascamos la superficie. En la industria todavía hay muchísimas decisiones que se toman sin ningún modelo: cuánto producir, a qué precio, con qué fórmula. Para esas, un modelo clásico bien hecho sigue generando tanto valor como en 2018, y hoy cuesta una fracción de lo que costaba, justamente porque la IA generativa me ayuda a construirlo.

En 2018 la pregunta que me hacía era qué número mueve este modelo. Sigo pensando que es la pregunta correcta, use la técnica que use para contestarla.
