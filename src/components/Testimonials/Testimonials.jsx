import { Box, Flex, Text } from "@chakra-ui/react";

const Testimonials = () => {
    const testimonialsData = [


        {
            name: "Ben, Los Angeles",
            opinion: "He knows precisely how to cater to your level  and creates the scenarios to let you talk intuitively as opposed to just learn the words/verbs and recite them without relevance in your life. ",
            image: "https://www.spanishwithalex.com/images/T060221460_Avatar.jpg",
        },
        {
            name: "Mike, Sydney",
            opinion: "Alex is a wonderful teacher. He is very skilled at making the conversations that flow naturally, while also making sure to pause several times during the lesson to identify errors and talk about how to correct them. It's the perfect mix of fixing my mistakes while also having a fun conversation. His demeanor and style make it easy for the conversation to flow and builds up my confidence in speaking. Highly recommended!",
            image: "https://www.spanishwithalex.com/images/2T071007130_Avatar.jpg",
        },
        {
            name: "Sam, New York",
            opinion: "Alejandro kept the flow going at all times and made learning really fun and engaging. He’s humble and genuine even as a beginner, it just doesn’t feel like I’m being patronised by a teacher rather a friend who’s willing to share his language with me.",
            image: "https://www.spanishwithalex.com/images/T071363650_Avatar.jpg",
        },
    ];

    return (




        <Box mt="6" mb="12">
            <Text
                bgGradient='linear(to-l, #FF0033, #FF0033)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
                And some testimonials!
            </Text>
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
            <Box bg="gray.500" borderRadius="full" width="80px" height="80px" mb="2" mx="auto">
                <img src={image} alt={name} style={{ borderRadius: "50%", width: "100%", height: "100%" }} />
            </Box>
            <Box bg="gray.500" color="white" borderRadius="lg" p="4" position="relative">
                <Text fontSize="sm" fontStyle="italic" mb="2">{opinion}</Text>
                <Text fontWeight="bold">{name}</Text>

            </Box>
        </Box>
    );
};

export default Testimonials;
