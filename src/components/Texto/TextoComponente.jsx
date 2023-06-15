import React from "react";
import { Text } from '@chakra-ui/react'
import Formulario from "../Formulario/Formulario";
import { Button } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md"

const TextoComponente = () => {
    return (
        <div>


            <Text fontSize='xl' sx={{ color: 'green' }}> AÑADE TU NOMBRE, CORREO Y EDAD PARA SUSCRIBIRTE </Text>

            <Formulario />

            <Text fontSize='6x2' sx={{ color: 'red' }} > Spanish with alex </Text>
            <Button leftIcon={<MdBuild />} colorScheme='red' size='lg'> Púlsame pero soy inutil </Button>
            {/* <form class="add">
                <label for="title">titulo</label>
                <input type="text" name="title" required></input>
                <label for="author">autor:</label>
                <input type="text" name="author" required></input> */}

            {/* <button>add new book</button>

        </form> */}

        </div >

    )
}

export default TextoComponente


