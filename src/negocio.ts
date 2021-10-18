interface Negocio{

    // Una caracteristica importante de negocio será un campo para
    // indicar si está promocionado o no, se empleará en el hito 4

    //CRUD convencional
    getNegocios();
    getNegocio();
    crearNegocio();
    actualizarNegocio();
    borrarNegocio();

    //devuelve los negocios de un tipo
    //Si valoracio => ordena de forma descendente por su valoracion
    getNegociosPorTipo(tipo:string,valoracion:boolean);

    

        
}