---
title: "El modelo cambia, el contexto es mío"
tags: [ia, contexto, herramientas]
date: 2026-10-04
---

Hace unos meses me pasaba algo que me desesperaba un poco. Estaba trabajando con una herramienta de IA, se me acababa el límite de la suscripción y tenía que esperar unas horas a que volviera. Para no perder la tarde, me pasaba a otra herramienta y le explicaba todo desde el principio: qué estaba haciendo, qué ya había resuelto, qué había decidido y por qué. Para cuando terminaba de ponerla al día, la primera ya había recuperado el límite (me gusta dar muchas explicaciones; es un don y una maldición).

El problema no era que la segunda herramienta no me conociera. Todas tienen memoria. El problema era que cada una tenía la suya, y no coincidían.

![Ilustración voxel de una persona en su taller con una carpeta mostaza abierta: un robot se retira mientras otro consulta las mismas notas; un labrador negro duerme en la alfombra, con montañas al fondo](images/contexto-taller-voxel.webp)

*Las herramientas cambian; el contexto permanece conmigo. Ilustración original generada con IA.*

## Qué uso y para qué

Hoy trabajo con tres herramientas. ChatGPT y Claude los uso al mismo tiempo y de forma intercambiable: pago las dos suscripciones y las alterno para que me rindan. [Hermes](https://hermes-agent.nousresearch.com/), un agente de código abierto, lo conecto a modelos chinos y lo uso para lo pesado, como leer cantidades enormes de documentos, por ejemplo mis bóvedas de notas de Obsidian. Además está conectado a Telegram, así que desde el celular le delego cosas simples: anotarme un pendiente, actualizar una bitácora, avisarme si un proceso terminó o si algo cambió.

Sé que lo de los modelos chinos es la primera pregunta. Los uso a través de OpenCode Go, que según su [política de privacidad](https://opencode.ai/docs/go/#privacy) no usa lo que le mando para entrenar y no lo guarda. Lo digo con ese "según", porque es lo que ellos publican y no algo que yo pueda verificar.

## La fuente de verdad no vive en ninguna app

Lo que cambió fue dejar de depender de la memoria de cada herramienta y llevar la mía. Las de ellas siguen ahí, no las apago; pero la que manda es la mía.

Es una carpeta con unos pocos archivos de texto que pongo en todos mis proyectos, sean de desarrollo de software o de producto: las reglas del proyecto (cómo quiero que trabajen y qué no pueden hacer), en qué estoy ahora y cuál es el siguiente paso, el plan, los riesgos abiertos y un registro de las decisiones importantes con su porqué. Cualquier herramienta que trabaje en ese proyecto empieza por leer esa carpeta, y cuando termina, la actualiza.

Con eso, saltar de una herramienta a otra dejó de costar. Si se me acaba el límite en una, abro la otra, le pido que lea el contexto y sigue donde quedamos. Incluso pueden trabajar al tiempo en partes distintas, porque las dos van escribiendo en el mismo lugar.

En la raíz de cualquiera de mis proyectos se ve más o menos así:

```text
mi-proyecto/
├── AGENTS.md              índice: qué leer y en qué orden
├── CLAUDE.md              adaptador para Claude; apunta a AGENTS.md
└── .ai/
    ├── RULES.md           reglas que no se negocian
    ├── ACTIVE_CONTEXT.md  en qué estoy y cuál es el siguiente paso
    ├── PLAN.md            fases y pendientes
    ├── RISKS.md           riesgos y supuestos frágiles
    ├── CHANGELOG.md       qué cambió y cuándo
    └── decisions/         una nota por cada decisión importante
        ├── 0001-adoptar-el-sistema.md
        └── 0002-stack-del-sitio.md
```

Sin ese sistema, el problema no es solo perder tiempo. Si trabajo una tarde entera con Claude y después abro ChatGPT, su memoria le dice que estamos en otro punto. En el mejor caso, gasta tiempo validando algo que ya resolvimos. En el peor, "arregla" algo que ya estaba arreglado y deshace trabajo. Una memoria desactualizada que se cree vigente es más peligrosa que no tener memoria.

## El modelo es lo más fácil de reemplazar

Esto me llevó a una conclusión que hoy guía cómo trabajo: el modelo es la pieza que más fácil reemplazo. Cada pocos meses sale uno mejor, cambian los precios, cambian los límites. Si mi forma de trabajar dependiera de una herramienta, cada cambio me obligaría a empezar de cero. Como el contexto es mío, cambiar de modelo me cuesta casi nada.

Lo que no puedo reemplazar es lo que está en esos archivos: qué estoy haciendo, qué ya decidí y por qué.

## Dónde entra el humano

Los agentes escriben buena parte de ese contexto. Hermes actualiza mis bitácoras y Claude cierra cada sesión resumiendo qué cambió. Es la misma idea de la nota de entrega de turno que los modelos se escriben a sí mismos, la que conté en [[optimismo-en-tiempos-de-ia|Optimismo en tiempos de la IA]], solo que aquí queda en un archivo que yo puedo leer y corregir. Entonces, ¿para qué estoy yo?

Mi pensamiento suele ser muy desestructurado. Las ideas me llegan en desorden, mezcladas, a medias. Lo que hacen los agentes es tomar lo que les digo y darle una forma que se pueda guardar y volver a leer. Pero lo que queda escrito sigue siendo mío: qué es verdad, qué sigue vigente, qué ya se decidió y no se vuelve a discutir. Un agente puede registrar una decisión. No puede saber si esa decisión sigue en pie.

Por eso creo que el humano en el loop sigue siendo tan relevante. No porque los modelos sean malos, sino porque el contexto es la parte del proceso que condiciona todo lo demás, y lo que hay en mi cabeza solo lo sé yo. Gestionarlo bien no es un detalle de organización: es la mitad del trabajo.

![Ilustración voxel de unas manos que corrigen un borrador y seleccionan una hoja para una carpeta mostaza, mientras un robot presenta otra propuesta](images/contexto-criterio-humano-voxel.webp)

*Los agentes proponen; yo decido qué queda. Ilustración original generada con IA.*

## Una versión mínima para empezar

Mi sistema completo es más grande de lo que necesita alguien que empieza, y está pensado para agentes que leen carpetas. Para quien usa ChatGPT o Claude de forma básica, armé una versión mínima: un solo archivo de texto, con las mismas ideas.

**[Plantilla de contexto](https://raw.githubusercontent.com/SrRubencho/plantilla-contexto/main/contexto.md)**

Así la usaría si empezara hoy:

1. Llenarla en quince minutos. No tiene que quedar perfecta.
2. En ChatGPT o en Claude, crear un Proyecto y subirla como archivo del proyecto.
3. Guardar el original afuera, en sus notas o en su nube. La fuente de verdad es ese original, no la copia que subieron.
4. Al final de una conversación en la que avanzaron, pedirle a la herramienta que proponga cambios al archivo. Ustedes deciden qué entra, actualizan el original y lo vuelven a subir.

El paso cuatro es el que hace que funcione. Sin mantenimiento, el archivo se convierte en otra memoria desactualizada.

Lo ideal es usarlo en local, con una herramienta que lea los archivos directamente desde su computador, porque ahí es donde más brilla el sistema. Pero son libres de elegir cómo implementarlo.

## Dónde falla

- Depende de la disciplina. Si no lo actualizo, el archivo miente, y miente con autoridad.
- La memoria propia de cada app sigue ahí y a veces compite: recuerda algo viejo que contradice el archivo. Cuando pasa, gana el archivo, pero hay que darse cuenta.
- En las apps de chat, volver a subir el archivo a mano es fricción. Los agentes que leen carpetas directamente se la ahorran.
- No es una idea nueva. Existe [AGENTS.md](https://agents.md), un formato abierto para darles contexto a los agentes de programación, y prácticas como el [Memory Bank de Cline](https://docs.cline.bot/prompting/cline-memory-bank). Lo mío es una variante, con una diferencia: para mí, archivos como AGENTS.md o CLAUDE.md deberían ser un índice de dónde está cada cosa, no una bitácora. Lo que cuento es por qué la uso y cómo me funciona.

Como nota final, creo que en el fondo lo que busca este sistema es mantenerme en control y agnóstico frente a las herramientas. Si hoy cerrara mi cuenta de Claude o de ChatGPT, el contexto de mis proyectos seguiría conmigo, y así debería seguir siendo. Las herramientas van a cambiar: algunas van a desaparecer y otras que hoy no existen van a ser mejores. Lo que no quiero es que con cada cambio se vaya también lo que sé de mi propio trabajo. Las herramientas las alquilo; el contexto es mío.

En la [[nota-cero|nota cero]] conté que tomo todas mis notas en Obsidian y que el jardín es la forma de publicar que menos me obliga a cambiar de herramienta. Esto viene de la misma costumbre: si algo importa, lo escribo afuera de mi cabeza, en un lugar que sea mío.
