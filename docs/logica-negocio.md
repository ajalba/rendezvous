## Lógica de negocio propuesta para Rendezvous

La aplicación consta principalmente de dos puntos de vista o formas de empleo, el punto de vista del empresario o dueño de un local o negocio, y el punto de vista del usuario que quiere hacer uso de los servicios ofrecidos por ellos.

Desde el punto de vista del dueño del negocio, la aplicación le dará la posibilidad de que sus citas se concreten de forma automática así como la posibilidad de poder visualizar gráficamente la carga de trabajo esperada para ese día.
 
Desde el punto de vista del usuario, se tiene la posibilidad de hacer una reserva en cualquier negocio de la aplicación, el usuario podrá ver de forma orientativa la cantidad de personas que acudirán al negocio a lo largo del dia. Además el usuario recibirá recomendaciones personalizadas de otros lugares.

## Sistema de recomendaciones personalizadas

Se empleará un algoritmo de clustering para formar grupos de usuarios, así, a un usuario dentro de un grupo, se le recomendará lugares nuevos tomando lugares que hayan visitado otros usuarios del grupo. En todo momento se evitará en la medida de lo posible recomendar lugares que el usuario ya haya visitado.

Dado que los usuarios y sus visitas cambiarán de forma dinámica, se pretende que el sistema de recomendación también cambie de forma dinámica, es decir, que se actualicen estos grupos o clusters periódicamente.

El número de clusters cambiará para adecuarse al número de usuarios y de negocios en los que es posible concertar una cita. En un ejemplo sencillo, si imaginamos 10 usuarios y 10 negocios disponibles, un total de 3 clusters sería suficiente para realizar recomendaciones a los usuarios.

