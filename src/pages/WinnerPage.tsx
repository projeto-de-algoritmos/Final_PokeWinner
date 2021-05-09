import React, {useState} from 'react';
import { Box, Grid, Text } from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';
import PersonProps from '../interface/Person';
import trophy from '../assets/trophy.png';
import { Image } from '@chakra-ui/image';
import TypeTotem from '../components/typeTotem';
import PokemonCard from '../components/pokemonCard';


const Winner: React.FC = () => {
  const location: any = useLocation();
  const [winner] = useState<PersonProps>(location.state);
  console.log(winner);

  

  return (
    <Box 
      w='100%'
      bg='#F5F5F5'
      d="flex"
      flexDir="column"
      justifyContent="space-around"
      padding="30px 0"
    >
      <Box
        w="100%"
        d="flex"
        justifyContent="space-evenly"
      >
        <Image src={trophy} h="30rem"/>

        <Box
          w="30rem"
          height="30rem"
          bg="linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(204,30,30,1) 0%, rgba(0,212,255,1) 100%)"
          borderRadius="20px"
          boxShadow="2px 2px 10px rgba(0,0,0,.5)"
          d="flex"
          flexDir="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Image src={winner.photo} w="15rem" h="15rem" borderRadius="50%"/>
          <Text fontFamily='"Press Start 2P", cursive' fontSize="2.2rem" textAlign="center">{winner.name}</Text>
        </Box>

        <Image src={trophy} h="30rem"/>
      </Box>
      <Box
        w="100%"
        d="flex"
        justifyContent="center"
        padding="30px 0 0 0"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
          {winner.pokemons.length > 0 ? (
            winner.pokemons.map((pokemon, index) => (
              <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} key={index}>
                {pokemon.types.length > 0 ? (
                  pokemon.types.map((poke: any, index: number) => (
                    <TypeTotem type={poke.type.name} key={index}/>
                  )) 
                ) : null}
              </PokemonCard>
            ))
          ) : null}
        
        </Grid>
      </Box>

    </Box>
  );
}

export default Winner;