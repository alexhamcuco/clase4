import { Box } from '@chakra-ui/react';

const Video = () => {
    return (
        <Box textAlign="center">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <iframe
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/8MhdV1nxa_8"
                    allowFullScreen
                    title="Buscar Compañero de piso"
                ></iframe>
            </div>
        </Box>
    );
};

export default Video;
