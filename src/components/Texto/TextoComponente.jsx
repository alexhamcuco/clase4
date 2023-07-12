//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text } from '@chakra-ui/react'
import Formulario from "../Formulario/Formulario";
import { Button } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md"

const TextoComponente = () => {
    return (
        <div>


            <Text fontSize='xl' sx={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}> SUSCRÍBETE AQUÍ. ¡ES GRATIS! </Text>
            {/* <Text fontSize='xl' sx={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}> SOLO POR TIEMPO LIMITADO </Text> */}

            <Formulario />

            {/* <Text fontSize='6x2' sx={{ color: 'red' }} > Spanish with alex </Text>
            <Button leftIcon={<MdBuild />} colorScheme='red' size='lg'> Púlsame pero soy inutil </Button> */}


        </div >

    )
}

export default TextoComponente


