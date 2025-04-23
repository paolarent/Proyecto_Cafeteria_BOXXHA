import { Router } from "express";
import { readdirSync } from "fs";   

// __dirname es la ruta del directorio actual	    
const PATH_ROUTER = `${__dirname}`; // //backend/src/routes    

const router = Router();

// Funcion para limpiar el nombre del archivo 
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift(); // Elimina la extensión del archivo .ts
    return file;
}

// CARGADOR DINAMICO DE RUTAS
// Lee todos los archivos del directorio actual es decir de "routes"
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    // Si el archivo no es un index hace uso de el
    if(cleanName !== "index") {
        // Importa el router dentro de la ruta que capturamos en la promesa "ModuleRouter"
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Cargando la ruta: /${cleanName}`);
            // Si el archivo tiene una propiedad "router" la usa
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});


export { router };