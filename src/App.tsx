import React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

export const App = () => {  

return (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
)
}
