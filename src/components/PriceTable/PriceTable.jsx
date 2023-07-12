import React from 'react';
import { Box, Heading, Text, Button, List, ListItem, Icon, Link } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from "react-router-dom";


const PriceTable = () => {
    return (

        <Box p={4} boxShadow="md" borderRadius="md" bg="gray.200" maxW="sm" mx="auto">
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0033)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
                This offer!
            </Text>
            <Heading as="h3" fontSize="xl" textAlign="center" mb={4}>
                Limited time offer.
            </Heading>
            <Box textAlign="center" fontSize="4xl" fontWeight="bold" mb={4}>
                <Text as="span" color="green.500" mr={1}>

                </Text>
                20
                <Text as="span" fontSize="2xl" color="gray.900" ml={1}>
                    €
                </Text>
            </Box>
            <Text textAlign="center" color="gray.500" mb={6}>
                50% off your first month.
            </Text>
            <List spacing={2} mb={6}>
                <ListItem>
                    <Icon as={CheckIcon} color="green.500" mr={2} />
                    Includes ALL Spanish courses
                </ListItem>
                <ListItem>
                    <Icon as={CheckIcon} color="green.500" mr={2} />
                    New classes every month
                </ListItem>
                <ListItem>
                    <Icon as={CheckIcon} color="green.500" mr={2} />
                    Includes over 100 hours of video classes.
                </ListItem>
                <ListItem>
                    <Icon as={CheckIcon} color="green.500" mr={2} />
                    Includes access to the private Academy community
                </ListItem>

                <ListItem>
                    <Icon as={CheckIcon} color="green.500" mr={2} />
                    Includes acces to the  Book, Film, and Documentary channel and club.
                </ListItem>
                <ListItem>
                    <Icon as={CheckIcon} color="green.500" mr={2} />
                    Earn points and win prizes or discounts.
                </ListItem>
            </List>


            <Link as={ReactRouterLink} to='/suscripcion'>

                <Button colorScheme="red" size="lg" mx="auto" display="block" mb={4} >
                    Join Spanish with Alex
                </Button>
            </Link>
            <Text textAlign="center" color="gray.500" fontSize="sm">
                First month 20€ Then 40/month. Cancel anytime.
            </Text>
        </Box>
    );
};

export default PriceTable;
