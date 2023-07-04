import { Icon, Box, Flex, Text, Link } from "@chakra-ui/react";
import { Fa500Px, FaAccessibleIcon, FaBezierCurve, FaThermometer } from "react-icons/fa";
import { MdAddIcCall, MdFoodBank } from "react-icons/md";
import logoIcon from '../../assets/imagenes/favicon/favicon4.ico'; // Asegúrate de proporcionar la ruta correcta al archivo .ico
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "./Footer.css"

const Footer = () => {
    return (
        <Box bg="gray.700" color="white" py="4" px="6" mt="4">
            <img className="logo-imagen" src={logoIcon} alt="Logo"
                onClick={() => scrollToTop()}
            />

            <Flex justify="space-between" alignItems="center">

                <Text fontSize="sm">© 2023 Spanish with Alex.</Text>
                <Flex>

                    <Column title="Redes Sociales">
                        <CustomLink
                            href="https://www.youtube.com/@spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Flex align="center">
                                <Icon as={MdAddIcCall} mr="2" />
                                <h2>Youtube</h2>
                            </Flex>
                        </CustomLink>
                        <CustomLink
                            href="https://twitter.com/spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Flex align="center">
                                <Icon as={Fa500Px} mr="2" />
                                <h2>Twitter</h2>
                            </Flex>
                        </CustomLink>
                        <CustomLink
                            href="https://www.instagram.com/spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Flex align="center">
                                <Icon as={MdFoodBank} mr="2" />
                                <h2>Instagram</h2>
                            </Flex>
                        </CustomLink>
                    </Column>
                    <Column title="Condiciones Legales">
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/terminos-y-condiciones"
                            color="white"
                            mr="4"
                            _hover={{ color: "red.500" }}
                            onClick={() => scrollToTop()}
                        >
                            Condiciones
                        </ChakraLink>
                        {/* <CustomLink href="/terminos-y-condiciones">Condiciones</CustomLink> */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/politica-de-privacidad"
                            color="white"
                            mr="4"
                            _hover={{ color: "red.500" }}
                            onClick={() => scrollToTop()}

                        >
                            Privacidad
                        </ChakraLink>
                        {/* <CustomLink href="/politica-de-privacidad">Privacidad</CustomLink> */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/cookies"
                            color="white"
                            mr="4"
                            _hover={{ color: "red.500" }}
                            onClick={() => scrollToTop()}

                        >
                            Cookies
                        </ChakraLink>
                    </Column>
                    <Column title="Contacto">
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/contacto"
                            color="white"
                            mr="4"
                            _hover={{ color: "red.500" }}
                            onClick={() => scrollToTop()}

                        >
                            Contacto
                        </ChakraLink>
                        {/* <CustomLink href="/contacto">About</CustomLink> */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/alejandro-rodriguez"
                            color="white"
                            mr="4"
                            _hover={{ color: "red.500" }}
                            onClick={() => scrollToTop()}

                        >
                            About me
                        </ChakraLink>
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

const scrollToTop = () => {
    window.scrollTo({
        top: 1,
        behavior: "smooth"
    });
};

export default Footer;
