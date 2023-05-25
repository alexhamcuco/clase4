import React from "react";
import { Button, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Grid, GridItem } from '@chakra-ui/react'

const TarjetaComponente = () => {
    return (
        <div>
            <GridItem />
            <Card>
                <CardBody>
                    <img src="https://www.spanishwithalex.com/images/cards/pedirPerdon.jpg" alt="" />
                </CardBody>
                <CardFooter>
                    <Text>Pedir perdón en España</Text>
                    <Button colorScheme='blue'>PODCAST</Button>
                </CardFooter>
            </Card>

            <GridItem />
        </div>

    )
}

export default TarjetaComponente