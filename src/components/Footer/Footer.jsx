import { Icon, Box, Flex, Text, Link } from "@chakra-ui/react";
import { Fa500Px, FaAccessibleIcon, FaBezierCurve, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdAddIcCall, MdFoodBank } from "react-icons/md";
import logoIcon from '../../assets/imagenes/favicon/favicon4.ico'; // Asegúrate de proporcionar la ruta correcta al archivo .ico
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

import "./Footer.css"

const goBack = () => {
    window.history.back();
};


const Footer = () => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    return (
        <Box bg="gray.700" color="white" py="4" px="4" mt="2">
            <Icon as={FaArrowLeft} boxSize={6} cursor="pointer" onClick={() => goBack()} />


            <Flex justify="space-between" alignItems="center">
                <img className="logo-imagen" src={logoIcon} alt="Logo"
                    onClick={() => scrollToTop()}
                />
                <Text fontSize="sm" color="red.500">{`© ${currentYear} Spanish with Alex.`}</Text>


                <Flex>

                    <Column title="">
                        <CustomLink
                            href="https://www.youtube.com/@spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Flex align="center">
                                <Icon as={FaYoutube} mr="2" />
                                <h2>Youtube</h2>
                            </Flex>
                        </CustomLink>
                        <CustomLink
                            href="https://www.linkedin.com/in/alex-rodr%C3%ADguez-n%C3%BA%C3%B1ez-763720115/"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Flex align="center">
                                <Icon as={FaLinkedin} mr="2" />
                                <h2>Linkedin</h2>
                            </Flex>
                        </CustomLink>
                        <CustomLink
                            href="https://www.instagram.com/spanishwithalex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Flex align="center">
                                <Icon as={FaInstagram} mr="2" />
                                <h2>Instagram</h2>
                            </Flex>
                        </CustomLink>
                    </Column>


                    <Column title="">

                        <ChakraLink
                            as={ReactRouterLink}
                            to="/terminos-y-condiciones"
                            color="red"
                            mr="4"
                            _hover={{ color: "white" }}
                            onClick={() => scrollToTop()}
                        >
                            Condiciones
                        </ChakraLink>
                        {/* <CustomLink href="/terminos-y-condiciones">Condiciones</CustomLink> */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/politica-de-privacidad"
                            color="red"
                            mr="4"
                            _hover={{ color: "white" }}
                            onClick={() => scrollToTop()}

                        >
                            Privacidad
                        </ChakraLink>
                        {/* <CustomLink href="/politica-de-privacidad">Privacidad</CustomLink> */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/cookies"
                            color="red"
                            mr="4"
                            _hover={{ color: "white" }}
                            onClick={() => scrollToTop()}

                        >
                            Cookies
                        </ChakraLink>
                    </Column>


                    <Column title="">

                        <ChakraLink
                            as={ReactRouterLink}
                            to="/contacto"
                            color="red"
                            mr="4"
                            _hover={{ color: "white" }}
                            onClick={() => scrollToTop()}

                        >
                            Contacto
                        </ChakraLink>
                        {/* <CustomLink href="/contacto">About</CustomLink> */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/alejandro-rodriguez"
                            color="red"
                            mr="4"
                            _hover={{ color: "white" }}
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
