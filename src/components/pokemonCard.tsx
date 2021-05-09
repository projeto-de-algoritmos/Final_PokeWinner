import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface PokemonCardProps {
    name: string,
    image: string,
    key: number
}

const PokemonCard: React.FC<PokemonCardProps> = ({name, image, children, key}) => {
  return (
    <Box w="15rem" h="10rem" background="#FFF" borderRadius="10px" d="flex" flexDir="column" alignItems="center" border="1px solid #000" key={key}>
        <Image src={image}/>
        <Text textTransform="uppercase" fontFamily='"Press Start 2P"' color="#000">{name}</Text>
        <Box d="flex" w="100%" justifyContent="center">
            {children}
        </Box>
    </Box>
  );
}

export default PokemonCard;