//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text, Heading } from '@chakra-ui/react'


const Privacidad = () => {
    return (
        <div>
            <Heading as="h6" fontSize="xl" mt={4} sx={{ color: "green", fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Política de Privacidad
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                En Spanish with Alex, respetamos tu privacidad y nos comprometemos a proteger la información personal que compartas con nosotros. Esta política describe cómo recopilamos, utilizamos, almacenamos y divulgamos tu información cuando utilizas nuestros servicios. Al acceder o utilizar nuestros servicios, aceptas las prácticas descritas en esta política.

            </Text>

            <Heading as="h6" fontSize="xl" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Recopilación de información
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                Recopilamos la información que nos proporcionas cuando te registras en nuestra plataforma, utilizas nuestras funciones o interactúas con nosotros de alguna otra manera. Esta información puede incluir tu nombre, dirección de correo electrónico, información de contacto y cualquier otra información que elijas proporcionarnos.
            </Text>

            <Heading as="h6" fontSize="xl" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Uso de la información
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'justify', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                Utilizamos la información recopilada para proporcionarte nuestros servicios, personalizar tu experiencia, mejorar nuestros productos y comunicarnos contigo. No compartiremos tu información con terceros sin tu consentimiento, a menos que sea necesario para brindarte los servicios solicitados o requerido por la ley.
            </Text>

            <Heading as="h6" fontSize="xl" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px', mt: '300px', mt: '40px', mb: '20px', }}>
                Seguridad de la información
            </Heading>

            <Text fontSize="xl" as="h6" mt={4} sx={{ textAlign: 'left', marginLeft: '200px', marginRight: '200px', mt: '40px', mb: '60px', }}>
                Tomamos las medidas necesarias para proteger la información personal que recopilamos. Sin embargo, ten en cuenta que ninguna medida de seguridad es absoluta y no podemos garantizar la seguridad completa de tus datos. Te recomendamos tomar precauciones adicionales al compartir información personal en línea.
            </Text>

            {/* Otros puntos de la política de privacidad */}

        </div >

    )
}

export default Privacidad


