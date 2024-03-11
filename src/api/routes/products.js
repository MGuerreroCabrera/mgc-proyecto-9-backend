const { insertManyProducts, getProducts } = require("../controllers/products");

// Importar método Route de la libreía express
const productsRouter = require("express").Router();

// Ruta para insertar los registros en BBDD
productsRouter.post("/", insertManyProducts);

// Ruta para listar registros
productsRouter.get("/", getProducts);

// Exportar enrutador
module.exports = productsRouter;