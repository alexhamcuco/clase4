import { extendTheme } from "@chakra-ui/react";

const Tema = extendTheme({
    colors: {
        dark: {
            // Personaliza los colores para el modo noche
            // Ejemplo:
            bg: "#140f0f",
            text: "#ffffff",
        },
        light: {
            // Personaliza los colores para el modo claro
            // Ejemplo:
            bg: "#ffffff",
            text: "#1a202c",
        },
    },
});

export default Tema