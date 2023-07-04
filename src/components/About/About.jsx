//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text, Heading } from '@chakra-ui/react'
import Formulario from "../Formulario/Formulario";
import { Button } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md"

const About = () => {
    return (
        <div>


            <Text fontSize='xl' sx={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}>
                ABOUT AQUÍ. ¡ES GRATIS!
            </Text>


            {/* <Text fontSize='6x2' sx={{ color: 'red' }} > Spanish with alex </Text>
            <Button leftIcon={<MdBuild />} colorScheme='red' size='lg'> Púlsame pero soy inutil </Button> */}

            <Heading as="h6" fontSize="xl" mt={4} sx={{ color: "green", fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Políticas de Cookies
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
                Al continuar navegando, aceptas el uso de cookies de acuerdo con nuestras
                políticas.
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

export default About

