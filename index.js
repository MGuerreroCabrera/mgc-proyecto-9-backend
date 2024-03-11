// Importar librería express - SERVIDOR
const express = require("express");
// Importar librería cors - PERMITE PETICIONES AL SERVIDOR
const cors = require("cors");
// Configurar librería para variables de entorno
require("dotenv").config();
const productsRouter = require("./src/api/routes/products");
const { connectDB } = require("./src/config/db");

// Declarar servidor
const app = express();

// Conexión con la BBDD
connectDB();

// Permitir realizar peticiones al servidor
app.use(cors());

// Declarar puerto
const port = 3000;

// Declarar rutas
app.use("/api/v1/products", productsRouter);

// Declarar rutas no configuradas
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})

// Levantar servidor
app.listen(port, () => {
    console.log("Servidor levantado en http://localhost:" + port);
})