import React from 'react';
import { Spinner } from '@chakra-ui/react';

const LoadingIndicator = () => {
    return (
        <Spinner
            thickness='9px'
            speed='0.35s'
            emptyColor='white'
            color='red.500'
            size='xl'
        />
    );
};

export default LoadingIndicator;