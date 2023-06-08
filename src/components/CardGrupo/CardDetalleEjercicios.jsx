import React from 'react'
import { Card, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

const CardDetalleEjercicios = ({ materiales }) => {

    const material = materiales.find(material => material.tipo.ejercicio)
    return (

        <div>


            <Card>
                <CardBody>
                    <img src={material.url} alt="" />
                </CardBody>
                <CardFooter>
                    <Text> {material.titulo} </Text>
                    <Link to={material.tipo.toLowerCase() + '/' + material.urlTitulo}>
                        <Button colorScheme='blue'> {material.tipo}

                        </Button>
                    </Link>

                </CardFooter>
            </Card>

        </div>
    )
}

export default CardDetalleEjercicios


//deberes agregar urlTitulo en firebase
//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast. 