import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bg="gray.700" color="white" py="4" px="6" mt="4">
            <Flex justify="space-between" alignItems="center">
                <Text fontSize="sm">© 2023 Spanish with Alex.</Text>
                <Flex>
                    <Column title="Redes Sociales">
                        <CustomLink
                            href="https://www.youtube.com/@spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Youtube
                        </CustomLink>
                        <CustomLink
                            href="https://twitter.com/spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </CustomLink>
                        <CustomLink
                            href="https://www.instagram.com/spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </CustomLink>
                    </Column>
                    <Column title="Condiciones Legales">
                        <CustomLink href="/terminos-y-condiciones">Términos y condiciones</CustomLink>
                        <CustomLink href="/politica-de-privacidad">Política de privacidad</CustomLink>
                    </Column>
                    <Column title="Contacto">
                        <CustomLink href="/contacto">Formulario de contacto</CustomLink>
                    </Column>
                </Flex>
            </Flex>
        </Box>
    );
};

const CustomLink = ({ href, children }) => {
    return (
        <Link
            color="white"
            mr="4"
            _hover={{ color: "red.500" }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
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
