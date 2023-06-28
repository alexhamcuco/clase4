import { Box, Flex, Text } from "@chakra-ui/react";

const Testimonials = () => {
    const testimonialsData = [
        {
            name: "Usuario 1",
            opinion: "¡Excelente experiencia con Spanish with Alex!",
            image: "https://www.spanishwithalex.com/images/T060221460_Avatar.jpg",
        },
        {
            name: "Usuario 2",
            opinion: "Recomiendo totalmente este servicio. Me ha ayudado mucho.",
            image: "https://www.spanishwithalex.com/images/2T071007130_Avatar.jpg",
        },
        {
            name: "Usuario 3",
            opinion: "Las clases son divertidas y muy efectivas. ¡Gracias!",
            image: "https://www.spanishwithalex.com/images/T071363650_Avatar.jpg",
        },
    ];

    return (
        <Box mt="6" mb="12">
            <Flex justify="center" align="center">
                {testimonialsData.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </Flex>
        </Box>
    );
};

const Testimonial = ({ name, opinion, image }) => {
    return (
        <Box textAlign="center" mx="4">
            <Box bg="gray.200" borderRadius="full" width="80px" height="80px" mb="2" mx="auto">
                <img src={image} alt={name} style={{ borderRadius: "50%", width: "100%", height: "100%" }} />
            </Box>
            <Box bg="gray.800" color="white" borderRadius="lg" p="4" position="relative">
                <Text fontSize="sm" fontStyle="italic" mb="2">{opinion}</Text>
                <Text fontWeight="bold">{name}</Text>
                <Box
                    bg="gray.800"
                    borderColor="transparent"
                    borderWidth="8px"
                    borderTopColor="gray.800"
                    position="absolute"
                    top="-16px"
                    left="50%"
                    transform="translateX(-50%)"
                />
            </Box>
        </Box>
    );
};

export default Testimonials;
