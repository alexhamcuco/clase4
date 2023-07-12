import React from 'react';
import { Box, Text, Image, HStack, Button, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";

const ReservaFacil = () => {
    return (
        <HStack spacing="4">
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                bgGradient="linear(to-b, grey.500, grey)"
                color="grey.500"
            >
                <Image src="https://cdn.mos.cms.futurecdn.net/pShGA8P5jT4FW5xmgPJXmn.jpg" alt="Calendario" />
                <Box p="4">
                    <Text fontSize="sm">Reserva fácilmente</Text>
                    <Text mt="2">
                        Disfruta de todas las facilidades y beneficios de reservar a través de nuestra página web. Nuestro proceso
                        de reserva en línea es rápido y sencillo, lo que te permitirá ahorrar tiempo y esfuerzo. Además, tendrás
                        acceso a las siguientes ventajas:
                    </Text>
                    <Box mt="4">
                        <Text fontWeight="bold">- Comodidad:</Text>
                        <Text ml="4">Reserva desde la comodidad de tu hogar o cualquier lugar con conexión a Internet.</Text>
                    </Box>
                    <Box mt="2">
                        <Text fontWeight="bold">- Flexibilidad:</Text>
                        <Text ml="4">Elige el horario y la fecha que mejor se adapte a tus necesidades.</Text>
                    </Box>
                    <Box mt="2">
                        <Text fontWeight="bold">- Confirmación inmediata:</Text>
                        <Text ml="4">Recibirás una confirmación instantánea de tu reserva, sin esperas innecesarias.</Text>
                    </Box>
                    <Link as={ReactRouterLink} to='/suscripcion'>
                        <Button colorScheme="red" size="lg" mt="4">
                            Ir a Suscripción
                        </Button>
                    </Link>
                </Box>
            </Box>

            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                bgGradient="linear(to-b, grey.500, grey)"
                color="grey.500"
            >
                <Image src="https://cdn.mos.cms.futurecdn.net/pShGA8P5jT4FW5xmgPJXmn.jpg" alt="Merch" />
                <Box p="4">
                    <Text fontSize="sm">Compra nuestro merch</Text>
                    <Text mt="2">
                        Explora nuestra tienda en línea y descubre una amplia gama de productos exclusivos. Desde camisetas y gorras
                        hasta accesorios temáticos, tenemos todo lo que necesitas para mostrar tu apoyo y estilo.
                    </Text>
                    <Box mt="4">
                        <Text fontWeight="bold">- Variedad de productos:</Text>
                        <Text ml="4">Encuentra artículos de alta calidad y diseño único.</Text>
                    </Box>
                    <Box mt="2">
                        <Text fontWeight="bold">- Envío seguro y rápido:</Text>
                        <Text ml="4">Entregamos tus compras de manera rápida y segura a tu puerta.</Text>
                    </Box>
                    <Box mt="2">
                        <Text fontWeight="bold">- Garantía de satisfacción:</Text>
                        <Text ml="4">Si no estás satisfecho con tu compra, te ofrecemos devoluciones y reembolsos fáciles.</Text>
                    </Box>
                    <Link as={ReactRouterLink} to='/suscripcion'>

                        <Button colorScheme="red" size="lg" mt="4">
                            Ir a Tienda
                        </Button>
                    </Link>
                </Box>
            </Box>

            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                bgGradient="linear(to-b, grey.500, grey)"
                color="grey.500"
            >
                <Image src="https://cdn.mos.cms.futurecdn.net/pShGA8P5jT4FW5xmgPJXmn.jpg" alt="Material gratuito" />
                <Box p="4">
                    <Text fontSize="sm">Descarga material gratuito</Text>
                    <Text mt="2">
                        Accede a nuestra biblioteca de recursos gratuitos y descarga material exclusivo para ayudarte en tus proyectos
                        y aprendizaje. Y vamos a aumentar una linea más para que todas las tarjetas sean.
                    </Text>
                    <Box mt="4">
                        <Text fontWeight="bold">- Recursos de calidad:</Text>
                        <Text ml="4">Encuentra tutoriales, plantillas, guías y más, todo creado por expertos en el campo.</Text>
                    </Box>
                    <Box mt="2">
                        <Text fontWeight="bold">- Actualizaciones regulares:</Text>
                        <Text ml="4">Añadimos constantemente nuevo material para que siempre tengas acceso a las últimas tendencias.</Text>
                    </Box>
                    <Box mt="2">
                        <Text fontWeight="bold">- Sin costos ocultos:</Text>
                        <Text ml="4">Todo nuestro material gratuito es realmente gratuito, sin suscripciones ni pagos adicionales.</Text>
                    </Box>
                    <Link as={ReactRouterLink} to='/suscripcion'>

                        <Button colorScheme="red" size="lg" mt="4">
                            Ir a Descargas
                        </Button>
                    </Link>
                </Box>
            </Box>
        </HStack>
    );
};

export default ReservaFacil;
