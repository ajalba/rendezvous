# Lógica de negocio propuesta para Rendezvous

La funcionalidad pensada para que los usuarios puedan realizar reservas en establecimientos servirá como medio para recaudar datos para un sistema de recomendaciones personalizadas a cada usuario dentro del sistema. Así, cada vez que un usuario se conecte de nuevo a la aplicación, se le mostrará una vista de negocios recomendados basados en lugares en los que él, o gente como él, hayan estado recientemente.

 Para ello se empleará un algoritmo de clustering para formar grupos de usuarios en función de los negocios que estos visiten. Así, a un usuario dentro de un grupo, se le recomendará lugares nuevos tomando lugares que hayan visitado otros usuarios del grupo y él no. Se tendrán en cuenta factores como el tipo de negocio visitado y la frecuencia y afluencia de los usuarios en un negocio concreto. En todo momento se evitará en la medida de lo posible recomendar lugares que el usuario ya haya visitado.

Dado que los usuarios y sus visitas cambiarán de forma dinámica, se pretende que el sistema de recomendación también cambie de forma dinámica, es decir, que se actualicen estos grupos o clusters periódicamente.

El número de clusters cambiará para adecuarse al número de usuarios y de negocios en los que es posible concertar una cita. En un ejemplo sencillo, si imaginamos 10 usuarios y 10 negocios disponibles, un total de 3 clusters sería suficiente para realizar recomendaciones a los usuarios.

Además, si un usuario busca un tipo de negocio concreto, podrá acceder a un servicio que le muestre los negocios de este tipo de forma ordenada en función de factores como los lugares de este tipo visitados anteriormente por el usuario, la valoración de otros usuarios de los propios negocios y los lugares de este tipo que hayan visitado anteriormente otros usuarios.

Así si el usuario quiere "ir a una barbería" pero no sabe cuál, se le realizará una lista de las mejores barberias disponibles y se le recomendarán en orden de mejor a peor según los criterios mencionados anteriormente.

