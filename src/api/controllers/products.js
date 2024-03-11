// Importar librería mongoose - BBDD
const mongoose = require("mongoose");
const Product = require("../models/products");

// Importar archivo de artículos
const products = require("../../../products.json");


// Listado de registros
const getProducts = async (req, res, next) => {
    try {
        // Declarar variable que contiene los registros
        const products = await Product.find();
        // Devoler estado OK y registros
        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Insertar registros en BBDD
const insertManyProducts = async (req, res, next) => {
    try {
        // Lanzar petición para inserta los registros en BBDD
        await Product.insertMany(products);
        // Devolver resultado OK y registros
        return res.status(201).json("Registros insertados en BBDD");
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { getProducts, insertManyProducts }