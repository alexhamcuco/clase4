import { useEffect, useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import db from "../DB/firebase-config"
import { collection, getDocs, addDoc } from 'firebase/firestore'
import Datos from './components/DatosMateriales/Datos'
import TextoComponente from './components/Texto/TextoComponente'
import CardDetalleEjercicio from './components/CardDetalle/CardDetalleEjercicio'
import CardDetallePodcast from './components/CardDetalle/CardDetallePodcast'
import CardDetalleTexto from './components/CardDetalle/CardDetalleTexto'
import CardDetalleVideo from './components/CardDetalle/CardDetalleVideo'
import FormularioMateriales from './components/FormularioMateriales/FormularioMateriales'


function App() {




  //firebase materiales (objeto con los datos de las tarjetas)
  const [materiales, setMateriales] = useState([])
  const materialesRef = collection(db, "materiales")

  const getMateriales = async () => {
    const materialesLista = await getDocs(materialesRef)
    const materiales = materialesLista.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    // console.log(materiales)
    setMateriales(materiales)

  }

  useEffect(() => {
    getMateriales()

  }, []);
  // console.log(materiales)

  return (
    <>

      <div>

        <Navbar materiales={materiales} />

        <Routes>

          <Route path='/contactos' element={<h1>contactooooo</h1>} />
          <Route path='/materiales' element={<Datos materiales={materiales} />} />
          <Route path='/materiales/:tipo' element={<Datos materiales={materiales} />} />

          <Route path='/cards' element={<h1>putas cards</h1>} />
          <Route path='/suscripcion' element={<TextoComponente />} />
          <Route path='/FormularioMateriales' element={<FormularioMateriales />} />

          <Route path='/materiales/:tipo/:tituloEjercicio' element={<CardDetalleEjercicio materiales={materiales} />} />



        </Routes>

      </div >

    </>
  )
}

export default App

// si quieres exportar la informacion de manera globlal, manejar el estado de manera globaltienes 
// que utilizar context
//
