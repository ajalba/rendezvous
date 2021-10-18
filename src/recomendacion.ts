
interface Recomendacion{

    /*
    Toma un conjunto de negocios y los ordena acorde con los criterios que aporta el usuario
    */
    recomendacionCriterios(negocios:Array<Negocio>, criterios:Array<string>):Array<Negocio>

    // Toma un conjunto de reservas y devuelve usuarios con grupo asignado
    clustering(reservas:Array<Reserva>):Array<Usuario>

    // Toma un usuario y le recomienda un conjunto de negocios

    recomendacionClustering(usuario:Usuario):Array<Negocio>




}