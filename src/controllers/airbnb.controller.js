
// Importar los servicio
const { consultarDocumentos, consultarTypes, consultarReviews, consultarBeds } = require('../services/mongodb.service');


const consultarAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

//Se crea la conexion con la base de datos 
const consultarAirbnbTypes = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarTypes(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

//Se crea la conexion con la base de datos
const consultarAirbnbReview = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarReviews(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

//Se crea la conexion con la base de datos y se le asigna un parametro para filtrar
const consultarAirbnbBeds = async (req, res) => {
    let respuesta = {}
    try {
        let nro_beds = req.params.nro_beds
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarBeds(process.env.COLLECTION_AIRBNB, nro_beds)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

// se exporta las consultas realizadas
module.exports = {
    consultarAirbnb,
    consultarAirbnbTypes,
    consultarAirbnbReview,
    consultarAirbnbBeds
}