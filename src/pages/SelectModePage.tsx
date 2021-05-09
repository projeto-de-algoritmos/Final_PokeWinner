import { Box, Text, Button, Grid, Image, Spinner } from '@chakra-ui/react';
import React, { useState, useEffect, BaseSyntheticEvent } from 'react';
import createPeople from '../algorithms/createGroup';
import PersonProps from '../interface/Person';
import Graph from '../algorithms/Graph';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import knapsack from '../algorithms/Knapsack';

const SelectMode: React.FC = () => {
    const history = useHistory();
    const [people, setPeople] = useState<PersonProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const data = createPeople();
        setPeople(data);
    }, []);

    const setMode = async (e: BaseSyntheticEvent, mode: string) => {
        e.preventDefault();
        setIsLoading(true);
        const graph = new Graph();

        people.forEach((_, index) => graph.addNode(index));

        people.forEach((person, index) => {
            person.wons.forEach((battle) => {
                graph.addEdge(index, battle);
            });
        });
        
        const bestTrainers: Array<PersonProps> = [];

        const random = Math.floor(Math.random() * 99);
        
        graph.BFS(random, (currentValue: number) => {
            if(people[currentValue].power > 7){
                bestTrainers.push(people[currentValue]);
                return false;
            }
            else{
                return false;
            }
        });

        setPeople(bestTrainers);

        const trainersData: Array<any> = await Promise.all(bestTrainers.map(async (trainer) => {
             const pokemonData: Array<any> = await Promise.all(trainer.pokemons.map(async (pokemon) => {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                    return response.data;
                } catch (error) {
                    console.error(error);
                }
            }));
            trainer.pokemons = pokemonData;
            return trainer;
        }));
        let theBestOne: any = {};
        let theBestValue: number = 0;
        trainersData.forEach((trainer) => {
            const knapsackValue = knapsack(trainer.pokemons, 500, mode);
            if(theBestValue < knapsackValue.maxValue){
                theBestValue = knapsackValue.maxValue;
                theBestOne = trainer;
            }
        });
        setIsLoading(false);
        history.push({pathname: '/winner', state: theBestOne});
    }

    return (
        <>
        <Box w="100%" h="100vh" bg="#F5F5F5">
            <Box 
                w="100%" 
                h="20vh" 
                bg="#f5dae7"
                d="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="space-evenly"
                borderBottom="1px solid black"
                pos="fixed"
                top="0"
            >
                <Text fontFamily='"Press Start 2P", cursive' fontSize="0.8rem">Aqui, você deve selecionar qual atributo você deseja analisar dentro dos treinadores abaixo:</Text>
                <Box
                    w="70%"
                    d="flex"
                    justifyContent="space-evenly"
                >
                    <Button bg="#6ff77d" _hover={{background: "#62da6e"}} onClick={(e) => setMode(e,"hp")}>Health Power</Button>
                    <Button bg="#f76f6f" _hover={{background: "#cf5f5f"}} onClick={(e) => setMode(e,"attack")}>Attack</Button>
                    <Button bg="#6fd7f7" _hover={{background: "#5cb4cf"}} onClick={(e) => setMode(e,"defense")}>Defense</Button>
                    <Button bg="#f7ba6f" _hover={{background: "#ce9c5e"}} onClick={(e) => setMode(e,"special-attack")}>Special Attack</Button>
                    <Button bg="#c16ff7" _hover={{background: "#a45fd1"}} onClick={(e) => setMode(e,"special-defense")}>Special Defense</Button>
                    <Button bg="#f0f76f" _hover={{background: "#c5ca5a"}} onClick={(e) => setMode(e,"speed")}>Speed</Button>
                </Box>
            </Box>
            <Box
                w="100%"
                d="flex"
                justifyContent="center"
                bg="#F5F5F5"
                marginTop="20vh"
            >
                <Grid templateColumns="repeat(5, 1fr)" gap={6} paddingTop="2rem">
                    {people.length > 0 ? (
                        people.map((person, index) => (
                            <Box 
                                key={index}
                                w="12rem" 
                                h="16rem" 
                                bg="#9fc2ed" 
                                d="flex" 
                                flexDir="column" 
                                justifyContent="space-evenly" 
                                alignItems="center"
                                borderRadius="10px"
                                boxShadow="1px 1px 10px rgba(0,0,0,.5)"
                            >
                                <Image src={person.photo} borderRadius="50%" w="8rem"/>
                                <Text fontFamily='"Press Start 2P", cursive' fontSize="0.7rem">{person.name}</Text>
                            </Box>
                        ))
                    ) : null}
                </Grid>
            </Box>
        </Box>
        {isLoading ? (
            <Box w="100%" height="100vh" pos="absolute" top="0" left="0" d="flex" justifyContent="center" alignItems="center" background="rgba(0,0,0,.5)" zIndex="10">
                <Spinner 
                    thickness="10px"
                    speed="0.5s"
                    emptyColor="red.500"
                    color="blue.500"
                    size="xl"
                />
            </Box>
        ) : null}
        </>
    );
}

export default SelectMode;