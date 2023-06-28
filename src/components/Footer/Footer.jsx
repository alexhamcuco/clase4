import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bg="gray.800" color="white" py="4" px="6">
            <Flex justify="space-between" alignItems="center">
                <Text fontSize="sm">© 2023 Spanish with Alex.</Text>
                <Flex>
                    <Column title="Redes Sociales">
                        <Link color="white" mr="4" _hover={{ color: "red.500" }}>
                            Facebook
                        </Link>
                        <Link color="white" mr="4" _hover={{ color: "red.500" }}>
                            Twitter
                        </Link>
                        <Link color="white" mr="4" _hover={{ color: "red.500" }}>
                            Instagram
                        </Link>
                    </Column>
                    <Column title="Condiciones Legales">
                        <Link color="white" mr="4" _hover={{ color: "red.500" }}>
                            Términos y condiciones
                        </Link>
                        <Link color="white" _hover={{ color: "red.500" }}>
                            Política de privacidad
                        </Link>
                    </Column>
                    <Column title="Contacto">
                        <Link color="white" mr="4" _hover={{ color: "red.500" }}>
                            Email
                        </Link>
                        <Link color="white" _hover={{ color: "red.500" }}>
                            Teléfono
                        </Link>
                    </Column>
                </Flex>
            </Flex>
        </Box>
    );
};

const Column = ({ title, children }) => {
    return (
        <Box mr="6">
            <Text fontSize="sm" mb="2" fontWeight="bold">
                {title}
            </Text>
            <Flex direction="column">{children}</Flex>
        </Box>
    );
};

export default Footer;
