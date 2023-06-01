import React from "react";
import TarjetaComponente from "../Card/TarjetaComponente";
import { Grid, GridItem } from "@chakra-ui/react";
import { useInstantLayoutTransition } from "framer-motion";
const Datos = ({ materiales }) => {
    return (
        < Grid templateColumns='repeat(3, 1fr)' gap={6} >
            {
                materiales.map((material) => <TarjetaComponente material={material} key={material.id} />)
            }
        </Grid>
    )

}

export default Datos


// hay dos maneras de mostrar las tarjetas al usuario
// una es con paginacion
// y otra es lazyscrolling