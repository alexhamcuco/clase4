//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text, Heading } from '@chakra-ui/react'
import Formulario from "../Formulario/Formulario";
import { Button } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md"

const Contacto = () => {
    return (
        <div>


            <Text fontSize='xl' sx={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}> CONTACTO AQUÍ. ¡ES GRATIS! </Text>

            <Heading as="h6" fontSize="xl" mt={4} sx={{ color: "green", fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Políticas de Cookies
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                As OpenAI is a REST API, we simply need to send HTTP requests to use ChatGPT. We'll use the Fetch API to do this. However, since the official Fetch API only works on Node.js 18 and above, we'll be using node-fetch@2.6.9 to accommodate older versions. Nevertheless, with a very recent version of Node.js you can use the official Fetch API and skip installing node-fetch@2.6.9. Additionally, we'll be using the Creatomate API to render the final video. For that we'll be using its official NPM package creatomate:
            </Text>

            <Heading as="h6" fontSize="xl" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                ¿Qué son las cookies?
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                cuando visitas un sitio web. Estas cookies se utilizan para recordar tus
                preferencias y brindarte una experiencia personalizada.
            </Text>

            <Heading as="h6" fontSize="xl" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Configuración de las cookies
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                Puedes ajustar la configuración de las cookies en cualquier momento a través de
                la configuración de tu navegador. Sin embargo, ten en cuenta que deshabilitar
                las cookies puede afectar la funcionalidad de nuestro sitio web.
            </Text>


        </div >

    )
}

export default Contacto

