import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../DB/firebase-config';
import {
    Button, Text,
    Input, Box, FormControl, FormLabel, VStack, Flex
} from '@chakra-ui/react';

function Formulario() {
    const [nivelMaterial, setNivelMaterial] = useState('');
    const [tipoMaterial, setTipoMaterial] = useState('');
    const [tituloMaterial, setTituloMaterial] = useState('');
    const [urlMaterial, setUrlMaterial] = useState('');
    const [urlTituloMaterial, setUrlTituloMaterial] = useState('');
    const [fechaMaterial, setFechaMaterial] = useState('');

    const colRefMateriales = collection(db, 'materiales');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Nivel Material: ', nivelMaterial);
        console.log('Tipo Material: ', tipoMaterial);
        console.log('Titulo Material: ', tituloMaterial);
        console.log('Url Material: ', urlMaterial);
        console.log('Url Titulo Material: ', urlTituloMaterial);
        console.log('Fecha Material: ', fechaMaterial);

        // Agregar nuevo material
        addDoc(colRefMateriales, {
            nivel: nivelMaterial,
            tipo: tipoMaterial,
            titulo: tituloMaterial,
            url: urlMaterial,
            urlTitulo: urlTituloMaterial,
            fecha: fechaMaterial,
        })
            .then(() => {
                console.log('Material agregado correctamente');
                setNivelMaterial('');
                setTipoMaterial('');
                setTituloMaterial('');
                setUrlMaterial('');
                setUrlTituloMaterial('');
                setFechaMaterial('');
            })
            .catch((error) => {
                console.log('Error al agregar el material:', error);
            });
    };

    return (

        <div>
            <Text fontSize='xl' sx={{ color: 'green', marginTop: '20px' }}> SUBE UN NUEVO MATERIAL </Text>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <Box w="50%" mt={10} mb={10} p={4} backgroundColor="gray.700" borderRadius="md">
                    <form className="add" onSubmit={handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl>
                                <Flex align="center">
                                    <FormLabel htmlFor="nivelMaterial" mr={2}>
                                        Nivel:
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        id="nivelMaterial"
                                        name="nivelMaterial"
                                        required
                                        value={nivelMaterial}
                                        onChange={(event) => setNivelMaterial(event.target.value)}
                                        backgroundColor="white"

                                    />
                                </Flex>
                            </FormControl>
                            <FormControl>
                                <Flex align="center">
                                    <FormLabel htmlFor="tipoMaterial" mr={2}>
                                        Tipo:
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        id="tipoMaterial"
                                        name="tipoMaterial"
                                        required
                                        value={tipoMaterial}
                                        onChange={(event) => setTipoMaterial(event.target.value)}
                                        backgroundColor="white"

                                    />
                                </Flex>
                            </FormControl>
                            <FormControl>
                                <Flex align="center">
                                    <FormLabel htmlFor="tituloMaterial" mr={2}>
                                        Titulo:
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        id="tituloMaterial"
                                        name="tituloMaterial"
                                        required
                                        value={tituloMaterial}
                                        onChange={(event) => setTituloMaterial(event.target.value)}
                                        backgroundColor="white"

                                    />
                                </Flex>
                            </FormControl>
                            <FormControl>
                                <Flex align="center">
                                    <FormLabel htmlFor="urlMaterial" mr={2}>
                                        Url:
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        id="urlMaterial"
                                        name="urlMaterial"
                                        required
                                        value={urlMaterial}
                                        onChange={(event) => setUrlMaterial(event.target.value)}
                                        backgroundColor="white"

                                    />
                                </Flex>
                            </FormControl>
                            <FormControl>
                                <Flex align="center">
                                    <FormLabel htmlFor="urlTituloMaterial" mr={2}>
                                        Url Titulo:
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        id="urlTituloMaterial"
                                        name="urlTituloMaterial"
                                        required
                                        value={urlTituloMaterial}
                                        onChange={(event) => setUrlTituloMaterial(event.target.value)}
                                        backgroundColor="white"

                                    />
                                </Flex>
                            </FormControl>
                            <FormControl>
                                <Flex align="center">
                                    <FormLabel htmlFor="fechaMaterial" mr={2}>
                                        Fecha:
                                    </FormLabel>
                                    <Input
                                        type="datetime-local"
                                        id="fechaMaterial"
                                        name="fechaMaterial"
                                        required
                                        value={fechaMaterial}
                                        onChange={(event) => setFechaMaterial(event.target.value)}
                                        backgroundColor="white"

                                    />
                                </Flex>
                            </FormControl>
                            <Button type="submit">Nuevo Material</Button>
                        </VStack>
                    </form>
                </Box>
            </div>
        </div>
    );
}

export default Formulario;
