# RendezVous
Repositorio para la app __RendezVous__ estado actual: 

:mechanic: En desarrollo :mechanic:

Versión 1.0.0

Puede acceder a la descripción del problema que se intenta resolver [aquí](./docs/hito0/descripcion-problema.md). Y también puede ver la [lógica de negocio planeada](./docs/hito0/logica-negocio.md)

Aquí puede ver [Cómo se ha configurado el entorno](./docs/hito0/configuracion-entorno-git.md).

# Milestones e historias de usuario

Se han creado una serie de milestones con el objetivo de que cada uno de ellos sea un producto final entregable y presentable en exposición si fuera necesario. Al actuar con esta filosofía se intenta conseguir la serie de milestones definida desarrolle un producto de forma incremental añadiendo siempre nuevas funcionalidades completamente útiles al producto final. Hasta el momento, los milestones planeados son:

## [Hito 1: Reservas en negocios por parte de los usuarios](https://github.com/ajalba/rendezvous/milestone/1)

    En esta primera versión los dueños de un negocio podrán registrar su negocio en la aplicación y el resto de usuarios podrá acceder a un negocio y realizar una reserva en el mismo. Es la funcionalidad básica de la aplicación. 
A este hito se asocian las siguientes historias de usuario:

[[US1]: Como dueño de un negocio, quiero poder registrar mi negocio en la app para que otros usuarios puedan hacer reservas en él](https://github.com/ajalba/rendezvous/issues/9)

[[US2] Como usuario, debo poder buscar negocios en la aplicación para realizar mi reserva en ellos](https://github.com/ajalba/rendezvous/issues/8)

## [Hito 2: Búsqueda especializada por criterios](https://github.com/ajalba/rendezvous/milestone/2)

    El objetivo es que cuando el usuario lo desee, pueda buscar dentro de la aplicación los mejores negocios que correspondan a un tipo concreto de negocio y a los criterios que el usuario considere más relevantes, como por ejemplo la valoración de otros usuarios.

La historia de usuario [[US3] Como usuario, debo poder buscar el mejor negocio de cierto tipo según mis intereses para reservar en él](https://github.com/ajalba/rendezvous/issues/10) se encuentra relacionada con este hito.

## [Hito 3: Recomendaciones personalizadas al entrar en la aplicación](https://github.com/ajalba/rendezvous/milestone/3)

    Cuando un usuario entre de nuevo a la aplicación, se le ofrecerá una lista de recomendaciones personalizadas con el espíritu de "quizás pueda interesarte" o "otros usuarios reservaron en". Esta funcionalizad busca que el usuario valore el sistema ya que encuentra cosas de su interés y pasé más tiempo dentro de él. 

Este hito esta relacionado con la [[US4] Como administrador, quiero ofrecer al usuario recomendaciones personalizadas cuando ingrese en la aplicación para poder hacer que el usuario pase más tiempo en ella.](https://github.com/ajalba/rendezvous/issues/11)

## [Hito 4: Pago por parte de los negocios para aparecer más veces en la app](https://github.com/ajalba/rendezvous/milestone/4)

    Los dueños de negocios podrán pagar para aparecer dentro de la app en posiciones más altas en las búsquedas de otros usuarios. Este pago esta en un inicio pensado para campañas temporales, es decir, "pagar para aparecer promocionado durante 1 semana", por ejemplo.

La historia de usuario que realizará este hito es la [[US5] Como dueño de un negocio, quiero poder pagar para promocionarlo y que aparezca en más búsquedas.](https://github.com/ajalba/rendezvous/issues/12)

## Clases y entidades

Se tiene planeado que los negocios y los usuarios que accedan a los mismos, esten representados por su modelo en la base de datos. Por otro lado, se tiene la clase diseñada para las recomendaciones. Esta clase albergará la lógica de las recomendaciones asociadas a los hitos [2](https://github.com/ajalba/rendezvous/milestone/2) y [3](https://github.com/ajalba/rendezvous/milestone/3) los cuales encierran el núcleo esencial de lógica de la aplicación.

