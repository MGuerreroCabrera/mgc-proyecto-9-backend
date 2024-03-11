// Importar librería mongoose
const mongoose = require("mongoose");

// Crear función de conexión a la BBDD
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado a la BBDD");
    } catch (error) {
        console.log("Error en la conexión a la BBDD");
    }
};

// Exportar la función de conexión
module.exports = { connectDB }
