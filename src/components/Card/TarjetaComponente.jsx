import React from "react";
import { Button, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Grid, GridItem } from '@chakra-ui/react'


const TarjetaComponente = ({ material }) => {
    return (
        <div>

            <Card>
                <CardBody>
                    <img src={material.url} alt="" />
                </CardBody>
                <CardFooter>
                    <Text> {material.titulo} </Text>
                    <Button colorScheme='blue'>{material.tipo}</Button>
                </CardFooter>
            </Card>


        </div>

    )
}

export default TarjetaComponente
