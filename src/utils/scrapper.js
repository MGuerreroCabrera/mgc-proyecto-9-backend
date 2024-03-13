// Importar la librería puppeteer
const puppeteer = require("puppeteer");
// Importar librería para escribir en un archivo
const fs = require("fs");

const scrapper = async (url) => {

    // Abrir instancia del navegador
    const browser = await puppeteer.launch({ headless: false });

    // Abrir nueva página en el buscador
    const page = await browser.newPage();

    // Indicar página a abrir
    await page.goto(url);

    // Declarar variable donde almacenar los artículos
    const arrayProducts = [];

    // Seleccionar todos los artículos
    const arrayArticles = await page.$$(".product-grid-item");
    const arrayTitles = await page.$$(".product-grid-item-title");

    // Recorrer el array de los artículos
    for (let i = 0; i < arrayArticles.length; i++) {
        
        // Recoger la imagen
        let img = await arrayArticles[i].$eval("img", (el) => el.src);
        
        // Recoger los nombres de los productos
        let productName = await arrayTitles[i].$eval("a", (el) =>  el.textContent.trim());

        // Recoger el precio
        let int = await arrayArticles[i].$eval(".int", (el) => el.textContent);
        let decimal = await arrayArticles[i].$eval(".decimal", (el) => el.textContent);
        let price = parseFloat(int + decimal.replace("'", "."));

        // Crear el objeto con los datos obtenidos
        const article = {
            img,
            productName,
            price
        }

        // Insertar el artículo en el array de artículos
        arrayProducts.push(article);

    }

    // Escribir el array de productos en un fichero
    writeArticles(arrayProducts);
    
    // Cerrar ventana del navegador
    await browser.close();
};

// Función que escribe los articulos en un fichero
const writeArticles = (arrayProducts) => {
    // Pasar a writefile el nombre del archivo y el contenido a escribir en formato JSON.
    // La función necesita recibir un callback. Basta con un console.log
    fs.writeFile("products.json", JSON.stringify(arrayProducts), () => {
        console.log("Archivo escrito");
    });
};

module.exports = { scrapper }