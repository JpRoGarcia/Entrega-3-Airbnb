const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

router.get(vs + "/airbnb/all-properties", airbnbCtr.consultarAirbnb)

//router.get(vs + "/airbnb/types")

router.get(vs + "/airbnb/reviews", airbnbCtr.consultarAirbnbReview)

//router.get(vs + "/airbnb/beds/:nro_beds")

module.exports = router




