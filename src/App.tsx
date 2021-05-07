import React, {useEffect} from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import faker from 'faker';
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => {


  useEffect(() => {
    for(var i = 0; i < 100; i++){
      console.log(faker.name.findName());
      console.log(faker.image.avatar());
      const pokemons = [];
      const battles = [];
      for(var j = 0; j < 6; j++){
        pokemons.push(Math.floor(Math.random() * (1118 - 1)) + 1);
      }
      console.log(pokemons);

      for(var j = 0; j < 4; j++){
        battles.push(Math.floor(Math.random() * (99 - 0)) + 0);
      }

      console.log(battles);

      console.log(Math.floor(Math.random() * (10 - 0) + 0));
    }
  }, [])
  

return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
}
