//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text, Heading } from '@chakra-ui/react'


const Cookies = () => {
    return (
        <div>


            <Heading as="h2" fontSize='xl' sx={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}>
                Políticas de Cookies
            </Heading>

            <Text fontSize='md' mt={4} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
                Al continuar navegando, aceptas el uso de cookies de acuerdo con nuestras
                políticas.
            </Text>

            <Heading as="h3" fontSize='md' mt={4} sx={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
                ¿Qué son las cookies?
            </Heading>

            <Text fontSize='md' mt={2} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                cuando visitas un sitio web. Estas cookies se utilizan para recordar tus
                preferencias y brindarte una experiencia personalizada.
            </Text>

            <Heading as="h3" fontSize='md' mt={4} sx={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
                Configuración de las cookies
            </Heading>

            <Text fontSize='md' mt={2} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Puedes ajustar la configuración de las cookies en cualquier momento a través de
                la configuración de tu navegador. Sin embargo, ten en cuenta que deshabilitar
                las cookies puede afectar la funcionalidad de nuestro sitio web.
            </Text>

            <Heading as="h3" fontSize='md' mt={4} sx={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
                Más información
            </Heading>

            <Text fontSize='md' mt={2} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Si deseas obtener más información sobre cómo utilizamos las cookies y cómo
                protegemos tu privacidad, consulta nuestra política de privacidad.
            </Text>
        </div >

    )
}

export default Cookies

