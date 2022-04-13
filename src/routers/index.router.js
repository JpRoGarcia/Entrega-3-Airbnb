const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

//Agregar ruta para todas las propiedades
router.get(vs + "/airbnb/all-properties", airbnbCtr.consultarAirbnb)

//Agregar ruta para los tipos de la propiedades
router.get(vs + "/airbnb/types", airbnbCtr.consultarAirbnbTypes)

//Agregar ruta para las reviews
router.get(vs + "/airbnb/reviews", airbnbCtr.consultarAirbnbReview)

//Agregar ruta para numero de camas
router.get(vs + "/airbnb/beds/:nro_beds", airbnbCtr.consultarAirbnbBeds)

module.exports = router




