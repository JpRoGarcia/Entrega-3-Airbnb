
const { MongoClient } = require("mongodb");

const uri = process.env.URI_MONGODB;

const client = new MongoClient(uri);

const conectarDB = async () => {
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB)
  return DB;
}


const consultarDocumentos = async (nombreColeccion, filtro) => {
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  filtro = filtro ? filtro : {}
  return coleccion.find(filtro).limit(parseInt(process.env.DEFAULT_LIMIT_PROPERTIES)).toArray()
}

const consultarTypes = async (nombreColeccion) => {
  let db = await conectarDB()
  // se crea una variable para agrupar todas las propiedades
  let consulta = [{$group: {_id: '$property_type'}}]
  // se le agrega la variable anterior a la coleccion
  let coleccion = db.collection(nombreColeccion).aggregate(consulta)
  return coleccion.limit(parseInt(process.env.DEFAULT_LIMIT_PROPERTIES)).toArray()
}

const consultarReviews = async (nombreColeccion) => {
  let db = await conectarDB()
  //se crea una variable donde se ordena los datos de mayor a menor y se solicitan ciertos parametros
  let consulta = [{$project: {name: 1, beds: 1, number_of_reviews : 1, price: 1}},
                  {$sort : {number_of_reviews : -1}}]
  // se le agrega la variable anterior a la coleccion
  let coleccion = db.collection(nombreColeccion).aggregate(consulta)
  return coleccion.limit(parseInt(process.env.DEFAULT_LIMIT_REVIEW)).toArray()
}

const consultarBeds = async (nombreColeccion, filtro) => {
  let db = await conectarDB()
  //se crea una variable donde se ordena los datos de mayor a menor y se solicitan ciertos parametros
  let consulta = [{$project: {name: 1, beds: 1, number_of_reviews : 1, price: 1}},
                  {$sort : {beds : -1}}]
  // se le agrega la variable anterior a la coleccion
  let coleccion = db.collection(nombreColeccion).aggregate(consulta)
  //el filtro se le agsigna por parametro en el link
  return coleccion.limit(parseInt(filtro)).toArray()
}


module.exports = { consultarDocumentos, consultarTypes, consultarReviews, consultarBeds }