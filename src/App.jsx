import { useEffect, useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import db from "../DB/firebase-config"
import { collection, getDocs, addDoc } from 'firebase/firestore'
// import { Grid, GridItem } from '@chakra-ui/react'
// import { Bottom Card CardBody CardFooter} from '@chakra-ui/react'
import TarjetaComponente from './components/Card/TarjetaComponente.jsx'
import Datos from './components/DatosMateriales/Datos'
import TextoComponente from './components/Texto/TextoComponente'

import CardDetalleEjercicio from './components/CardDetalle/CardDetalleEjercicio'
import CardDetallePodcast from './components/CardDetalle/CardDetallePodcast'
import CardDetalleTexto from './components/CardDetalle/CardDetalleTexto'
import CardDetalleVideo from './components/CardDetalle/CardDetalleVideo'

import CardGrupoEjercicios from './components/CardGrupo/CardGrupoEjercicios'
import CardGrupoPodcasts from './components/CardGrupo/CardGrupoPodcasts'
import CardGrupoTextos from './components/CardGrupo/CardGrupoTextos'
import CardGrupoVideos from './components/CardGrupo/CardGrupoVideos'








function App() {



  // collection reference
  const colRef = collection(db, 'books')

  //get collection data
  getDocs(colRef)
    .then((snapshot) => {
      let books = []
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
      })
      console.log(books)
    })
    .catch(err => {
      console.log(err.message)
    })

  // adding nuevo libro
  const addBookForm = document.querySelector('.add')
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(addBookForm)

    addDoc(colRef, {
      title: addBookForm.title.value,
      author: addBookForm.author.value,
    })
      .then(() => {
        addBookForm.reset()
      })

  })


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



  }, [])
  console.log(materiales)


  return (
    <>

      <div>
        <Navbar />


        <Routes>

          <Route path='/contactos' element={<h1>contactooooo</h1>} />
          <Route path='/materiales' element={<Datos materiales={materiales} />} />
          <Route path='/podcast' element={<Datos materiales={materiales} />} />
          <Route path='/video' element={<Datos materiales={materiales} />} />
          <Route path='/texto' element={<Datos materiales={materiales} />} />
          <Route path='/cards' element={<h1>putas cards</h1>} />
          <Route path='/suscripcion' element={<TextoComponente />} />

          <Route path='/materiales/ejercicio/:tituloEjercicio' element={<CardDetalleEjercicio materiales={materiales} />} />
          <Route path='/materiales/podcast/:tituloPodcast' element={<CardDetallePodcast materiales={materiales} />} />
          <Route path='/materiales/texto/:tituloTexto' element={<CardDetalleTexto materiales={materiales} />} />
          <Route path='/materiales/video/:tituloVideo' element={<CardDetalleVideo materiales={materiales} />} />

          <Route path='/materiales/ejercicios' element={<CardGrupoEjercicios materiales={materiales} tipo="EJERCICIO" />} />
          <Route path='/materiales/podcasts' element={<CardGrupoPodcasts materiales={materiales} tipo="PODCAST" />} />
          <Route path='/materiales/textos' element={<CardGrupoTextos materiales={materiales} tipo="TEXTO" />} />
          <Route path='/materiales/videos' element={<CardGrupoVideos materiales={materiales} tipo="VIDEO" />} />


        </Routes>

        <Text fontSize='6x2' sx={{ color: 'red' }} > Spanish with alex
        </Text>
        <Button leftIcon={<MdBuild />} colorScheme='red' size='lg'> Púlsame </Button>

      </div >

    </>
  )
}




export default App

// si quieres exportar la informacion de manera globlal, manejar el estado de manera globaltienes 
// que utilizar context