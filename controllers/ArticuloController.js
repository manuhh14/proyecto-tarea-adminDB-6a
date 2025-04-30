const Articulo = require('../models/Articulo');

const prueba = (req, res)=>{
    return res.status(200).json({
        mensaje: "Soy una ruta de prueba"
    })
}

/*metodo para crear un articulo */
const crear = async (req, res )=>{
    
    let parametros = req.body;

    

    ///validar que los parametros existen
    /*if (!parametros.titulo || !parametros.contenido){
        return res.status(400).json({
            status:"Error",
            mensaje: "Faltan datos necesarios: titulo y contenido"
        });
    }*/

    ////Crear objeto
    try {
       let articulo = new Articulo(parametros);

        //guardar articulo
       const articuloGuardado = await articulo.save();

       //devolver resultado
       return res.status(200).json({
        status: "Ok",
        mensaje: "Articulo guardado exitosamente",
        articulo: articuloGuardado
       })

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            mensaje:"No se ha podido guardar el articulo",
            error: error.message
        });
    }
}

module.exports={
    prueba,
    crear
}