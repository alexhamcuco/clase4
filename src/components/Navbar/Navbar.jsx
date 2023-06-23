import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";


const Navbar = ({ materiales }) => {
    const uniqueTypes = [...new Set(materiales.map((material) => material.tipo))];


    return (
        <Flex bg="gray.800" p="4" align="center">
            <Box>
                <ChakraLink
                    as={ReactRouterLink}
                    to="/home"
                    color="white"
                    mr="4"
                    _hover={{ color: "red.500" }}
                >
                    HOME
                </ChakraLink>
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
//prueba menú
                <Menu>
                    <MenuButton as={ChakraLink} color="white" mr="4" _hover={{ color: "red.500" }}>
                        Materiales
                    </MenuButton>
                    <MenuList>
                        {uniqueTypes.map((tipo) => (
                            <MenuItem key={tipo} as={ReactRouterLink} to={`/materiales/${tipo}`}>
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
        </Flex>
    );
};

export default Navbar;
