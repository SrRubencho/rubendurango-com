---
title: "Cómo me enamoré de la electrónica"
tags: [aprendizaje, herramientas, industria]
date: 2026-11-15
---
En 2018 empecé con la ciencia de datos por un libro: *Automate the Boring Stuff with Python*, de Al Sweigart. El año pasado tomé una decisión de carrera grande y me cambié a una industria con un foco técnico muy distinto al de toda mi vida: los electrodomésticos de línea blanca. Eso me abrió el mundo del software embebido, el IoT y la electrónica de consumo. Eran temas que siempre me habían atraído, pero nunca había tenido la necesidad de aprenderlos. Mi autismo hizo lo suyo y desarrollé un hiperfoco por ese mundo. Y otra vez empecé por un libro, en este caso *Open Circuits*, de Eric Schlaepfer y Windell Oskay, que muestra cómo se ven los componentes electrónicos por dentro, cortados por la mitad, y cuenta su historia y cómo funcionan. Es un libro hermoso. Con él empecé a ver la electrónica como magia: tomamos rocas, las purificamos y les escribimos runas tan pequeñas que las rocas empiezan a tener lógica. Y hoy las IA corren sobre esas rocas.
Ahora tenía una misión nueva: aprender lo suficiente para participar de verdad en mi nuevo rol. Y por suerte, desarrollar software tiene muchos puntos en común con este mundo, que me sirvieron para entrar.

![Una Arduino UNO R4 conectada por USB-C, con su matriz de LEDs rojos dibujando una carita feliz](images/electronica-arduino-carita.webp)

*Una Arduino UNO R4, la placa que más uso para prototipar.*

## Empecé encendiendo LEDs
Lo primero fue lo de siempre: comprar microcontroladores, encender LEDs y hacer girar un motor.

![Video corto sin sonido: un motor con una hélice amarilla gira conectado a una protoboard. Al lado, un ESP32 en una placa con borneras, un sensor de temperatura y una pantalla que muestra «Temp: 27.5°C» y «PWM: 119»](images/electronica-motor.mp4)

*Uno de mis primeros prototipos: un ventilador que cambia de velocidad según la temperatura. La pantalla muestra la lectura del sensor y el PWM que le llega al motor.*

Después vinieron los sensores, mandar datos de un ESP32 a la nube y mi propio checklist para arrancar un circuito en protoboard antes de conectar nada. Leía, armaba, hacía conatos de incendio y volvía a leer.
## Mis maestros
En ese proceso NotebookLM, ChatGPT y Claude se volvieron compañeros indispensables, cada uno en un papel distinto:

| Maestro                                                                                                | Para qué                                                                                                         | Dónde se queda corto                                     |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Libros: *Open Circuits*, *Make: Electronics* (Charles Platt), *Making Embedded Systems* (Elecia White) | La base: por qué funciona un circuito, no solo cómo armarlo                                                      | Son lentos para una duda puntual con la placa en la mano |
| NotebookLM                                                                                             | Leer los libros de forma más efectiva: le cargo el libro y le pregunto, o le pido un quiz para saber si entendí  | Solo sabe lo que le cargo                                |
| Claude y ChatGPT                                                                                       | Ejecutar los prototipos. Me guían paso a paso, por voz mientras tengo las manos ocupadas o con fotos del montaje | Ven la foto, no la placa                                 |
| Un colega experto en electrónica y control                                                             | Me ha enseñado y asistido en todo el proceso. Lo cual es un poco trampa, no todo mundo tiene esa fortuna         | En nada, César es el mejor :D                            |

Lo del colega lo digo en serio. La mitad de lo que sé de control lo aprendí preguntándole a alguien que sí sabe, y ningún chat reemplaza que alguien mire tu montaje y te diga «te quedó muy mal, te toca desoldar y empezar otra vez».
## Cerrar el ciclo de los datos

Durante años analicé datos que capturaba alguien más. Hoy tengo proyectos IoT desplegados en campo que me dan datos de primera mano, que puedo usar de inmediato para hacer analítica. Siento que eso cierra mi ciclo: ya no solo analizo los datos, también los capturo.

El ejemplo más cercano es la nevera de mi casa. Un microcontrolador lee lo que reporta la tarjeta de la nevera y un medidor de energía, y un servidor local sirve un dashboard para ver su comportamiento en tiempo real.

![El dashboard de la nevera de mi casa en 24 horas. Arriba, la temperatura ambiente estable alrededor de 25 °C y la del aire y el evaporador en ciclos regulares entre unos −15 y −2 °C, con un pico del evaporador cerca de las 7:30. Abajo a la izquierda, la potencia y el consumo del día; a la derecha, cuándo se encienden el compresor, el ventilador y el heater, y cuándo se abren las puertas](images/electronica-nevera-dashboard.webp)

*Un día de mi nevera. Cada diente de sierra es un ciclo del compresor; el pico de las 7:30 es el deshielo, cuando se enciende el heater.*

## Lo que aprendí que no está en ningún chat

**El cuello de botella no era el microcontrolador.** Pasé semanas pensando en qué chip usar y llegué a considerar cambiarlo. Pero las fallas estaban en el acondicionamiento de señal: los divisores de los sensores, las borneras, la continuidad. Cambiar de chip no arreglaba nada de eso y además invalidaba la placa que ya tenía diseñada.

**Diseñar para mi habilidad, no para la ideal.** La primera placa dependía de que yo soldara bien, y no sueldo bien (me faltan años de práctica, memoria muscular y más quemaduras). En vez de practicar hasta lograrlo, la rediseñé para que casi todo lo soldara la fábrica. Me quedaron siete componentes de agujero pasante, los que sí puedo soldar.

**Revisar antes de pagar.** Un error en código se corrige con un commit; uno en una placa se paga y se espera semanas. Antes de pedir la segunda tanda comparé los gerbers capa por capa contra el pedido anterior: solo cambiaron los dos archivos de serigrafía.

**Las herramientas mejoran más rápido que yo.** El artículo que me animó a intentarlo fue [Haciendo de Claude un mejor ingeniero eléctrico](https://claude.com/es/resources/articles/making-claude-a-better-electrical-engineer), de Anthropic y Diode Computers (diciembre de 2025): en una comparación a ciegas, los ingenieros eléctricos de Diode prefirieron los diseños de referencia de Sonnet 4.5 en 8 de cada 10 casos. Mi primer prototipo diseñado con Claude tuvo algunos errores eléctricos; el segundo salió perfecto. Y con los modelos nuevos, como Claude Fable y GPT-6 Astra de OpenAI, cada vez necesito menos iteraciones. Este mes Anthropic publicó [cómo Claude diseñó tres prototipos de principio a fin](https://www.anthropic.com/research/claude-electronics-design), y se fabricaron sin correcciones al circuito. Lo recomiendo, incluida la parte de las limitaciones: no tuvieron validación eléctrica ni certificación, y los armaron y probaron ingenieros.
## Dónde falla

- **Tengo deudas técnicas.** Aprender enfocado en lo práctico me dejó huecos en la teoría. Los he ido cubriendo preguntando a los expertos de mi trabajo y con mucho estudio juicioso.
- **La IA no ve la placa.** Puede razonar perfecto sobre un esquemático y no saber que hay un puente de soldadura. El multímetro sigue siendo mi mejor herramienta.
## Lo que sigo sin resolver

A veces siento un poco de síndrome del impostor, porque no soy ingeniero electrónico. He buscado educación formal, como maestrías, para reclamar de alguna forma el «derecho» a hacer lo que hago. Pero me ha costado encontrar programas que usen la IA de forma efectiva o que cambien tan rápido como cambia este mundo. Cada vez que reviso un pénsum con Claude llegamos a lo mismo: invertiría mucho tiempo y plata en cosas que ya aprendí a las malas o que me enseñaron en el trabajo.

Y al mismo tiempo están las deudas técnicas de arriba. La pregunta que me queda no es si necesito un título, sino qué me daría un programa que no me den la práctica y los colegas que saben. Todavía no tengo la respuesta.

Me falta mucho. Pero me sorprende cuánto he avanzado en poco más de un año, y me emociona pensar qué voy a saber en uno o dos más.
