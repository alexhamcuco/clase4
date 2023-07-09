import { Box, Heading, Text, Image, Flex, Button } from '@chakra-ui/react';
import Contacto from '../Contacto/Contacto';

const RetrasosAviones = () => {
    const opciones = [
        { texto: 'El vuelo está retrasado', esCorrecta: true },
        { texto: 'El vuelo está adelantado', esCorrecta: false },
    ];

    const handleRespuesta = (esCorrecta) => {
        if (esCorrecta) {
            // Lógica para respuesta correcta
            console.log('Respuesta correcta');
        } else {
            // Lógica para respuesta incorrecta
            console.log('Respuesta incorrecta');
        }
    };

    return (
        <Box>
            <Heading as="h2" fontSize="xl" mt={4} mb={2}>
                Vocabulario de viajes en avión
            </Heading>

            <Text fontSize="lg" mb={4}>
                Completa la siguiente frase:
            </Text>

            <Flex direction="column" align="center">
                <Box
                    border="1px solid gray"
                    borderRadius="md"
                    p={4}
                    mb={4}
                >
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                        El vuelo está...
                    </Text>

                    {opciones.map((opcion, index) => (
                        <Button
                            key={index}
                            onClick={() => handleRespuesta(opcion.esCorrecta)}
                            size="lg"
                            variant="outline"
                            colorScheme="blue"
                            mb={2}
                        >
                            {opcion.texto}
                        </Button>
                    ))}
                </Box>

                <Contacto />

                <Image
                    src="imagen_conjugacion.png" // Reemplaza con la URL de la imagen de la conjugación
                    alt="Conjugación en español"
                    mb={4}
                    maxWidth="400px"
                />

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8MhdV1nxa_8" // Reemplaza con la URL del video
                    allowFullScreen
                    title="Video"
                ></iframe>

                <Contacto />
            </Flex>
        </Box>
    );
};

export default RetrasosAviones;
