import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";
import { Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import logoIcon from '../../assets/imagenes/favicon/logopng_opx_icon.ico'; // Asegúrate de proporcionar la ruta correcta al archivo .ico

const Navbar = ({ materiales }) => {
    const uniqueTypes = [...new Set(materiales.map((material) => material.tipo))];



    return (
        <Flex className="navbar" bg="gray.700" p="1" align="center" mb="2" paddingTop="0px" justify="space-between">

            <ChakraLink
                as={ReactRouterLink}
                to="/home"
                color="white"
                mr="4"
                onClick={() => scrollToTop()}

                _hover={{ color: "red.500" }}
            >
                <Flex className="logo-imagen" align="center">
                    <img src={logoIcon} alt="Logo" />
                    {/* 
                    <Icon as={FaHome} mr="2" />
                    <h2>HOME</h2> */}
                </Flex>

            </ChakraLink>

            <Box className="navbartext">



                {/* <ChakraLink
                    as={ReactRouterLink}
                    to="/materiales"
                    color="white"
                    mr="4"
                    _hover={{ color: "red.500" }}
                >
                    materiales
                </ChakraLink>
                {uniqueTypes.map((tipo) => (
                    <ChakraLink
                        key={tipo}
                        as={ReactRouterLink}
                        to={`/materiales/${tipo}`}
                        color="white"
                        mr="4"
                        _hover={{ color: "red.500" }}
                    >
                        {tipo}
                    </ChakraLink>
                ))} */}
                {/* //prueba menú */}
                <Menu >
                    <Link as={ReactRouterLink} to='/materiales'>

                        <MenuButton as={ChakraLink} color="white" mr="4" _hover={{ color: "red.500" }}>
                            Materiales
                        </MenuButton>
                    </Link>
                    <MenuList>



                        {uniqueTypes.map((tipo) => (
                            <MenuItem key={tipo} as={ReactRouterLink} to={`/materiales/${tipo}`}
                                _hover={{ bg: "red.500", color: "white" }}
                            >
                                {tipo}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>

                <ChakraLink
                    as={ReactRouterLink}
                    to="/suscripcion"
                    color="white"
                    mr="4"
                    _hover={{ color: "red.500" }}
                >
                    Suscripcion
                </ChakraLink>
                <ChakraLink
                    as={ReactRouterLink}
                    to="/FormularioMateriales"
                    color="white"
                    _hover={{ color: "red.500" }}
                >
                    FormularioMateriales
                </ChakraLink>
            </Box>
            <Box>
                <Toggle />
            </Box>
        </Flex>
    );
};



const scrollToTop = () => {
    window.scrollTo({
        top: 1,
        behavior: "smooth"
    });
};



export default Navbar;
