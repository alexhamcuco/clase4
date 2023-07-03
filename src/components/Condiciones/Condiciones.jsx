//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text, Heading } from '@chakra-ui/react'


const Condiciones = () => {
    return (
        <div>


            <Heading as="h2" fontSize="xl" sx={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}>
                Términos y Condiciones
            </Heading>

            <Text fontSize="md" mt={4} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Bienvenido a Spanish with Alex. Estos términos y condiciones rigen tu uso de nuestra plataforma y los servicios que ofrecemos. Al utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de los términos, no utilices nuestros servicios.
            </Text>

            <Heading as="h3" fontSize="md" mt={4} sx={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
                Uso de la plataforma
            </Heading>

            <Text fontSize="md" mt={2} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Spanish with Alex te otorga un permiso limitado, no exclusivo y no transferible para acceder y utilizar nuestra plataforma con fines educativos. No podrás utilizar nuestros materiales con fines comerciales sin nuestro consentimiento previo por escrito.
            </Text>

            <Heading as="h3" fontSize="md" mt={4} sx={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
                Responsabilidad del usuario
            </Heading>

            <Text fontSize="md" mt={2} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de restringir el acceso a tu dispositivo. Aceptas ser el único responsable de todas las actividades que ocurran bajo tu cuenta. Si sospechas que alguien más está utilizando tu cuenta, debes informarnos de inmediato.
            </Text>

            <Heading as="h3" fontSize="md" mt={4} sx={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
                Derechos de propiedad intelectual
            </Heading>

            <Text fontSize="md" mt={2} sx={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                Todos los materiales y contenido en nuestra plataforma, incluyendo pero no limitado a textos, imágenes, videos y logotipos, están protegidos por derechos de propiedad intelectual. No puedes utilizar, copiar, reproducir, modificar, distribuir o crear trabajos derivados sin nuestro permiso previo por escrito.
            </Text>

        </div >

    )
}

export default Condiciones


