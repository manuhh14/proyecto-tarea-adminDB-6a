const mongoose = require('mongoose');


// Connect to MongoDB
const conexion = async()=>{

    try {
        await mongoose.connect("mongodb://localhost:27017/mi_blog");
        console.log("Conexion exitosa a la base de datos");
    } catch (error) {
        console.error(error);
        throw new Error("No se ha podido establecer la conexion con la base de datos");
    }
};

module.exports= {
    conexion
};