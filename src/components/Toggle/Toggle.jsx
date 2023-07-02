import { useColorMode, IconButton, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    );
};

export default Toggle 