import { Box } from '@chakra-ui/react';

const Video = () => {
    return (
        <Box textAlign="center">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8MhdV1nxa_8"
                allowFullScreen
                title="Buscar Compañero de piso"
            ></iframe>
        </Box>
    );
};

export default Video;