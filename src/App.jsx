import { useEffect, useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import db from "../DB/firebase-config"
import { collection, getDocs, addDoc } from 'firebase/firestore'
import Datos from './components/Datos/Datos'
import TextoComponente from './components/Texto/TextoComponente'
import FormularioMateriales from './components/FormularioMateriales/FormularioMateriales'
import TarjetaComponente from './components/TarjetaComponente/TarjetaComponente'
import ImagenPortadaComponente from './components/ImagenPortadaComponente/ImagenPortadaComponente'
import Footer from './components/Footer/Footer'

//vite es el nuevo webpack, es un compilador de procesos. 
//Vite preagrupa las dependencias de React

function App() {

  //cargar la imagen de la portada del componente ImagenPortadaComponente
  const imagenPortada = 'https://www.spanishwithalex.com/images/cards/pedirPerdon.jpg'
  //segunda imagen de portada pero en disco duro local
  // const imagenPortada = './src/assets/imagenes/saliendoPortatil.png';


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

          <Route path='/home' element={<ImagenPortadaComponente imagenPortada={imagenPortada} />} />
          <Route path='/materiales' element={<Datos materiales={materiales} />} />
          <Route path='/materiales/:tipo' element={<Datos materiales={materiales} />} />
          <Route path='/cards' element={<h1>putas cards</h1>} />
          <Route path='/suscripcion' element={<TextoComponente />} />
          <Route path='/FormularioMateriales' element={<FormularioMateriales />} />
          <Route path='/materiales/:tipo/:titulo' element={<TarjetaComponente materiales={materiales} />} />



        </Routes>



        <Footer />
      </div >

    </>
  )
}

export default App

// si quieres exportar la informacion de manera globlal, manejar el estado de manera globaltienes 
// que utilizar context
//
