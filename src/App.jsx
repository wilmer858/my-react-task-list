import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Menu from "./Pages/Menu";
import Tasks from "./Pages/Tasks";
import {
  ChakraProvider,
  ColorModeScript,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import theme from "./theme/theme";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Grid
            width="98vw"
            height="100vh"
            templateColumns="20% 60% 20%"
            templateRows="100%"
            gap={4}
          >
            <GridItem>
              <Menu />
            </GridItem>
            <GridItem>
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/Tasks" Component={Tasks} />
                <Route path="/AboutUs" Component={AboutUs} />
              </Routes>
            </GridItem>
            <GridItem>
              <Buttons />
            </GridItem>
          </Grid>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
