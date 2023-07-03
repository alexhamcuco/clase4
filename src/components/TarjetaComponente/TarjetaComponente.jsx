//está siendo llamado por Datos
//el material lo podamos obtener a traves de la base de datos, y no por props(cuando lo genera navegande dentro de la pagina)

import React from "react";
import { Button, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link, useLocation, useParams } from "react-router-dom";
import "../TarjetaComponente/TarjetaComponente.css"; // Importa el archivo CSS


const TarjetaComponente = ({ material }) => {
    const { tipo } = useParams()
    const { urlTitulo } = useParams()
    const path = useLocation()

    // console.log(path)
    // console.log(tipo)
    // console.log(urlTitulo)
    // console.log()
    // console.log({ material })
    // console.log()


    return (
        <div>

            <Card >
                <CardBody className="tarjeta" padding={0}>
                    <Link to={tipo ? material.urlTitulo : `${material.tipo}/${material.urlTitulo}`}>
                        <img src={material.url} alt="" className="tarjeta-imagen"
                        />
                    </Link>
                </CardBody>
                <CardFooter style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Text className="titulomaterial"> {material.titulo} </Text>

                    {/* //esto es un condicional terniario en modo js  */}

                    {tipo ? <Link to={material.urlTitulo}>


                        {/* boton debajo de la tarjeta  */}

                        {/* <Button colorScheme='red'> {material.tipo}

                        </Button> */}

                    </Link> : <Link to={material.tipo + '/' + material.urlTitulo}>

                        {/* boton debajo de la tarjeta pero en la url todos los materiales  */}


                        {/* <Button colorScheme='red'> {material.tipo}

                        </Button> */}
                    </Link>
                    }


                </CardFooter>
            </Card>


        </div >

    )
}

export default TarjetaComponente
