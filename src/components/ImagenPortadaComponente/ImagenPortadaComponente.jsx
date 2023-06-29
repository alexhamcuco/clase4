import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import imagenPortada from '../../assets/imagenes/cards/avionRetraso.jpg'

const ImagenPortadaComponente = () => {
    //  Debes desestructurar la prop imagenPortada poniendole { imagenPortada }  en el
    //  componente para obtener la URL de la imagen. 
    //  Actualmente, estás pasando la prop como argumento, sin corchetes, 
    //  pero necesitas extraer su valor. el valor de la direccion
    // la constante imagen portada, con la direccion está creada en App, 

    //para utilizar movimiento tuve que instalar otro paquete 
    //npm install framer-motion @chakra-ui/react
    //creo que hay conflictos porque ahora no hay color en el menu de materiales

    return (
        <div>
            <Box m="auto">
                <motion.div
                    initial={{ y: 22 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={imagenPortada} alt="Imagen principal" />
                </motion.div>
            </Box>
        </div>
    );
};

export default ImagenPortadaComponente;



