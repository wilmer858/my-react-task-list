import { Flex, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Flex pt={200} alignItems="center" justifyContent={"center"}>
        <Flex direction={"column"}>
          <Text
            align={"center"}
            bgGradient="radial(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%)"
            bgClip="text"
            fontSize="7xl"
            fontWeight="extrabold"
          >
            Todo App
          </Text>
          <Text
            bgGradient="radial(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            ¡Hola! Bienvenido a nuestra aplicación.
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
