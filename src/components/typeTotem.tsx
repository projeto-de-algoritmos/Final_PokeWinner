import { Box } from '@chakra-ui/react';
import React from 'react';

interface TotemProps {
    type: string,
    key: number
};

const TypeTotem: React.FC<TotemProps> = ({type, key}) => {
    const returnColor = (type: string) => {
        if(type === "bug"){ return '#A7B91D'; }
        else if(type === "dark"){ return '#3D2E28'; }
        else if(type === "dragon"){ return '#7460DF'; }
        else if(type === "electric"){ return '#F5B615'; }
        else if(type === "fairy"){ return '#F7B9F7'; }
        else if(type === "fighting"){ return '#7B311C'; }
        else if(type === "fire"){ return '#EE400E'; }
        else if(type === "flying"){ return '#95A6F3'; }
        else if(type === "ghost"){ return '#6060A6'; }
        else if(type === "grass"){ return '#76C639'; }
        else if(type === "ground"){ return '#D0B155'; }
        else if(type === "ice"){ return '#B0E8FC'; }
        else if(type === "normal"){ return '#CECBC3'; }
        else if(type === "poison"){ return '#894887'; }
        else if(type === "psychic"){ return '#EA487F'; }
        else if(type === "rock"){ return '#B9A358'; }
        else if(type === "steel"){ return '#B9B8C8'; }
        else if(type === "water"){ return '#3698FB'; }
    }
    return <Box 
                w="5rem" 
                h="2rem" 
                bg={returnColor(type)} 
                borderRadius="1rem" 
                d='flex' 
                justifyContent="center" 
                alignItems="center" 
                textTransform="uppercase" 
                fontFamily='"Press Start 2P"' 
                fontSize="8px" 
                border="1px solid black"
                key={key}
                color="#FFF"
                >
                    {type}
                </Box>
     ;
}

export default TypeTotem;