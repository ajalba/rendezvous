# RendezVous
Repositorio para la app __RendezVous__ estado actual: 

:mechanic: En desarrollo :mechanic:

Versión 1.0.0

Puede acceder a la descripción del problema que se intenta resolver [aquí](./docs/hito0/descripcion-problema.md). Y también puede ver la [lógica de negocio planeada](./docs/hito0/logica-negocio.md)

Aquí puede ver [Cómo se ha configurado el entorno](./docs/hito0/configuracion-entorno-git.md).

## Concretando y planificando el proyecto

### Milestones

Con el objetivo de dar forma a la lógica de negocio que se planeó previamente y en general a las ideas que conforman la solución del problema, se han creado una serie de Milestones que representan las fases por las que avanzará el proyecto. Cada una de estas fases conformará un producto funcional que ofrece un servicio. A medida que avanzan las fases se tendrá un producto más completo, pues las milestones estan diseñadas para crear un producto de forma incremental, en las que cada milestone representa una parte esencial de la siguiente versión del producto. Para más información se puede consultar el documento que describe [hitos que describen las MVPs del proyecto con HUs alineadas con los mismos](./docs/hito1/milestones.md).

### Historias de usuario

Para describir como cada elemento de trabajo otorgará un valor particular al cliente y el resultado deseado, se ha creado un conjunto de historias de usuario y estas se han asignado a los hitos creados. Además de esto, se han asignado una serie de issues a cada historia de usuario. Si se desea saber más sobre la planificación y contenido de las historias de usuario se tiene en este documento las [historias de usuario creadas y planificadas para trabajar con ellas](./docs/hito1/user-stories.md)

### User Journeys

También se ha querido describir como los usuarios van a interactuar con el producto por medio de la creación de user journeys. Esto supone la [relación de las historias de usuario con escenarios reales](./docs/user-journeys.ms)

## Lenguaje y entorno seleccionados

Se ha decidido realizar la aplicación con node.js y TypeScript ya que son nuevos para mí. Aunque TypeScript supone una curva de aprendizaje más difícil que solamente JavaScript, el hecho de que posea tipado me ahorrará muchos errores en tiempo de compilación.


## Clases y entidades

Se tiene planeado que los negocios y los usuarios que accedan a los mismos, esten representados por su modelo en la base de datos y crear un CRUD para ellos. Por otro lado, se tiene la clase diseñada para las recomendaciones. Esta clase albergará la lógica de las recomendaciones asociadas a los hitos [2](https://github.com/ajalba/rendezvous/milestone/2) y [3](https://github.com/ajalba/rendezvous/milestone/3) los cuales encierran el núcleo esencial de lógica de negocio de la aplicación.

Se han representado en interfaces los usuarios, negocios y reservas y se ha creado también la interfaz de la clase recomendación mencionada anteriormente.

