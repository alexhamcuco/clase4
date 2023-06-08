import React from 'react'
import { Card, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

const CardDetalleTextos = ({ materiales }) => {
    const { tipoTextos } = useParams()
    const material = materiales.find(material => material.tipo === tipoTextos)
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

export default CardDetalleTextos


//deberes agregar urlTitulo en firebase
//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast. 