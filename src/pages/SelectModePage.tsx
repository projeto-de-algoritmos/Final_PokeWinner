import { Box, Text, Button, Grid, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import createPeople from '../algorithms/createGroup';
import PersonProps from '../interface/Person';
import Graph from '../algorithms/Graph';
import {useHistory} from 'react-router-dom';

const SelectMode: React.FC = () => {
    const history = useHistory();
    const [people, setPeople] = useState<PersonProps[]>([]);

    useEffect(() => {
        const data = createPeople();
        setPeople(data);
    }, []);

    const setMode = (mode: string) => {
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

        const data = {mode, bestTrainers};

        history.push({
            pathname: '/winner',
            state: data
        });
    }

    return (
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
                    <Button bg="#6ff77d" _hover={{background: "#62da6e"}} onClick={() => setMode("hp")}>Health Power</Button>
                    <Button bg="#f76f6f" _hover={{background: "#cf5f5f"}} onClick={() => setMode("attack")}>Attack</Button>
                    <Button bg="#6fd7f7" _hover={{background: "#5cb4cf"}} onClick={() => setMode("defense")}>Defense</Button>
                    <Button bg="#f7ba6f" _hover={{background: "#ce9c5e"}} onClick={() => setMode("special-attack")}>Special Attack</Button>
                    <Button bg="#c16ff7" _hover={{background: "#a45fd1"}} onClick={() => setMode("special-defense")}>Special Defense</Button>
                    <Button bg="#f0f76f" _hover={{background: "#c5ca5a"}} onClick={() => setMode("speed")}>Speed</Button>
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
    );
}

export default SelectMode;