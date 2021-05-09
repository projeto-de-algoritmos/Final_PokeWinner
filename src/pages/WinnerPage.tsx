import React, {useEffect, useState} from 'react';
import { Box } from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';
import PersonProps from '../interface/Person';
import axios from 'axios';

const Winner: React.FC = () => {
  const location: any = useLocation();
  const [bestTrainers] = useState<PersonProps[]>(location.state.bestTrainers);
  const [Winner, setWinner] = useState<any>();
  console.log(location);
  useEffect(() => {
    async function calculateWinner () {
      const trainersData: Array<PersonProps> = [];
      bestTrainers.forEach(async (trainer) => {
        const pokemonData: Array<any> = [];
        trainer.pokemons.forEach(async (pokemon) => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
          pokemonData.push(response.data);
        });
        trainer.pokemons = pokemonData;
        trainersData.push(trainer);
      });

      console.log(trainersData);
    }

    calculateWinner();
  }, []);

  return (
    <Box 
      w='100%'
      bg='#F5F5F5'
    >

    </Box>
  );
}

export default Winner;