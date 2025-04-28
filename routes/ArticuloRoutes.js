const express= require('express');
const router = express.Router();
const ArticuloControlador= require('../controllers/ArticuloController')


router.get("/ruta-de-prueba", ArticuloControlador.prueba);
///localhost:3900/api/ruta-de-prueba

router.post("/crearArticulo" , ArticuloControlador.crear);
///localhost:3900/api/crearArticulo

/*
{
    "titulo": "articulo de prueba",
    "contenido": "este es un articulo de prueba"
}

*/
module.exports =  router;