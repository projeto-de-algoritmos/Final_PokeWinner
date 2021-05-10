import React from 'react';
import {Box, Button, Image, Text} from '@chakra-ui/react';
import {useHistory} from 'react-router-dom';
import initialText from '../assets/initialText';

const StartPage: React.FC = () => {
    const history = useHistory();
    return (
        <Box 
            w="100%" 
            h="100vh" 
            bg="#F5F5F5" 
            d="flex" 
            alignItems="center" 
            justifyContent="center" 
            overflowY="hidden"
            flexDir="column"
        >
            <Image src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" pos="absolute" w="30rem" top="5" right="5"/>
            <Image src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" pos="absolute" w="30rem" bottom="5" left="5"/>
            <Text pos="absolute" top="10rem" fontFamily='"Press Start 2P", cursive' fontSize="2.5rem" >PokeWinner</Text>
            <Text
                w="50%"
                fontFamily='"Press Start 2P", cursive'
                fontSize="0.8rem"
                marginBottom="3rem"
                textAlign="justify"
            >{initialText}</Text>
            <Button 
                w="10rem" 
                h="5rem" 
                bg="#ff2c21" 
                transition=".4s all" 
                _hover={{background: "#216bff"}}
                onClick={() => history.push('/selectMode')}
            >Start Game</Button>
        </Box>
    );
}

export default StartPage;