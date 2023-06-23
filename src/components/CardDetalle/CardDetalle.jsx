//este el es componente de vista individual

import React from 'react'
import { Card, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

const CardDetalleEjercicio = ({ materiales }) => {
    const { tituloEjercicio } = useParams()
    const material = materiales.find(material => material.urlTitulo === tituloEjercicio)
    return (

        <div>

            <Card>
                <CardBody>
                    <img src={material.url} alt="" />
                </CardBody>
                <CardFooter>
                    <Text> {material.titulo} </Text>

                </CardFooter>
            </Card>

        </div>
    )
}

export default CardDetalleEjercicio


//deberes agregar urlTitulo en firebase
//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast.
//deberes crear una base de datos con verbos y conjugaciones, finales de verbos...
//deberes limpiar codigo