import React from "react";
import { Text, Grid, GridItem } from '@chakra-ui/react'
import TarjetaComponente from "../Card/TarjetaComponente";



const CardGrupoEjercicios = ({ materiales, tipo }) => {
    const materialesFiltrados = materiales.filter((material) => material.tipo === tipo);

    return (
        < Grid templateColumns='repeat(3, 1fr)' gap={6} >
            {
                materialesFiltrados.map((material) => <TarjetaComponente material={material} key={material.id} />)
            }
        </Grid>
    )

}

export default CardGrupoEjercicios





//deberes agregar urlTitulo en firebase
//deberes agregar boton de volver para ir a materiales despues de entrar en el podcast. 