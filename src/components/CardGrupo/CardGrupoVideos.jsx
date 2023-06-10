import React from "react";
import { Button, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Grid, GridItem } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import TarjetaComponente from "../Card/TarjetaComponente";



const CardGrupoVideos = ({ materiales, tipo }) => {
    const materialesFiltrados = materiales.filter((material) => material.tipo === tipo);

    return (
        < Grid templateColumns='repeat(3, 1fr)' gap={6} >
            {
                materialesFiltrados.map((material) => <TarjetaComponente material={material} key={material.id} />)
            }
        </Grid>
    )

}

export default CardGrupoVideos