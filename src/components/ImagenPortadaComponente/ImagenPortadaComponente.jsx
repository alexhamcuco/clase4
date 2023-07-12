import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import imagenPortada from '../../assets/imagenes/cards/avionRetraso.jpg'
import { Link as ReactRouterLink } from "react-router-dom";

const ImagenPortadaComponente = () => {
    //  Debes desestructurar la prop imagenPortada poniendole { imagenPortada }  en el
    //  componente para obtener la URL de la imagen. 
    //  Actualmente, estás pasando la prop como argumento, sin corchetes, 
    //  pero necesitas extraer su valor. el valor de la direccion
    // la constante imagen portada, con la direccion está creada en App, 

    //para utilizar movimiento tuve que instalar otro paquete 
    //npm install framer-motion @chakra-ui/react
    //creo que hay conflictos porque ahora no hay color en el menu de materiales
    //da lo mismo como meta la imagen, no se carga la primera vez k carga home
    return (
        <div>
            <Box m="auto">

                <motion.div
                    initial={{ y: 22 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Link as={ReactRouterLink} to='/materiales/videos/retrasos-aviones'>

                        <img src={imagenPortada} alt="Imagen principal" />
                    </Link>

                </motion.div>
            </Box>

            <Link as={ReactRouterLink} to='/materiales/videos/retrasos-aviones'>

                <Text
                    bgGradient='linear(to-l,  #FF0033, #FF0033)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    Check out our latest video.
                </Text>
            </Link>


        </div>
    );
};

export default ImagenPortadaComponente;




