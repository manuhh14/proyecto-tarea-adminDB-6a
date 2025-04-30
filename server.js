const conexion  = require("./config/config");
const express= require('express');
const cors = require('cors');

/** Inicializar la app**/
console.log("App arrancada.....");

/**Conectar a la base de datos **/
conexion.conexion();

/**Crear el servidor de NodeJS**/
const app = express();
const puerto= 3900;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    return res.status(200).json([{
        nombre: "Manuel",
        apellido:"Hernandez",
        edad: "32",
        ocupacion: "Docente"
    }])
})
///localhost:3900/
/*Rutas */
const rutas_articulo = require('./routes/ArticuloRoutes');
app.use("/api", rutas_articulo);
///localhost:3900/api/ruta-de-prueba

/**arrancar servidor**/
app.listen( puerto, ()=>{
    console.log("servidor corriendo en el puerto" + puerto);
});