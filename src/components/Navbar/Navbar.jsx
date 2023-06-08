import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <div>
            <h1>prueba de tu puta madre</h1>
            <Link to='/contactos'>contacto  </Link>
            <Link to='/materiales'>materiales </Link>
            <Link to='/materiales/ejercicios'>ejercicios </Link>
            <Link to='/materiales/podcasts'>podcasts </Link>
            <Link to='/materiales/textos'>textos </Link>
            <Link to='/materiales/videos'>videos </Link>


            <Link to='/cards'>cards  </Link>
            <Link to='/suscripcion'>suscripcion</Link>

        </div>

    )


}

export default Navbar

//tareas: pensar en el boceto de la Natbar
