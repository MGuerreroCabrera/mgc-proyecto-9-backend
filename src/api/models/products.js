// Importar librería mongoose - BBDD
const mongoose = require("mongoose");

// Crear el Schema
const productSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        productName: { type: String, required: true },
        price: { type: Number, required: true }
    }, 
    {
        timestamps: true,
        collection: "products"
    });

// Crear el modelo
const Product = mongoose.model("products", productSchema, "products");

// Exportar modelo
module.exports = Product;