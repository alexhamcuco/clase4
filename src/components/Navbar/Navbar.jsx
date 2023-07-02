import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";

const Navbar = ({ materiales }) => {
    const uniqueTypes = [...new Set(materiales.map((material) => material.tipo))];


    return (
        <Flex bg="gray.700" p="4" align="center" mb="4" justify="space-between">
            <ChakraLink
                as={ReactRouterLink}
                to="/home"
                color="white"
                mr="4"
                _hover={{ color: "red.500" }}
            >
                <h2>HOME</h2>

            </ChakraLink>

            <Box>



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
                    <MenuButton as={ChakraLink} color="white" mr="4" _hover={{ color: "red.500" }}>
                        Materiales
                    </MenuButton>
                    <MenuList>

                        <MenuItem as={ReactRouterLink} to="/materiales" _hover={{ bg: "red.500", color: "white" }}>
                            Todos los materiales
                        </MenuItem>

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

export default Navbar;
