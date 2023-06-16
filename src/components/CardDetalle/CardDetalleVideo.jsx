import React from 'react'
import { Card, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

const CardDetalleVideo = ({ materiales }) => {
    //este tituloVideo viene de App 83
    const { tituloVideo } = useParams()
    const material = materiales.find(material => material.urlTitulo === tituloVideo)

    return (

        <div>


            <Card>
                <CardBody>
                    <img src={material.url} alt="" />
                </CardBody>

                <CardFooter>

                    <Text>
                        {material.titulo}
                    </Text>

                    <Link to={material.tipo + '/' + material.urlTitulo}>

                        <Button
                            colorScheme='blue'> {material.tipo}
                        </Button>

                    </Link>

                </CardFooter>

            </Card>

        </div>
    )
}

export default CardDetalleVideo


//deberes agregar urlTitulo en firebase
//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast. 