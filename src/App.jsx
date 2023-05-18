import { useState } from 'react'
import './App.css'
import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
// import { Grid, GridItem } from '@chakra-ui/react'
// import { Bottom Card CardBody CardFooter} from '@chakra-ui/react'

import { Button, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {


  return (
    <>

      <div>
        <Navbar />
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

        <Routes>
          <Route path='/contactos' element={<h1>contacto</h1>} />
          <Route path='/materiales' element={<h1>materiales</h1>} />
          <Route path='/card' element={<h1>Card</h1>} />

        </Routes>
        <Text fontSize='6xl' sx={{ color: 'red' }} > Spanish with alex

        </Text>

      </div >

    </>
  )
}

export default App
