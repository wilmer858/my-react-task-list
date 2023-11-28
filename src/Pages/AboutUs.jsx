import {
  Box,
  Collapse,
  Icon,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const AboutUs = () => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const [technologiesExpanded, setTechnologiesExpanded] = useState(false);

  const toggleDescriptionCollapse = () => {
    setDescriptionExpanded(!descriptionExpanded);
  };

  const toggleFeaturesCollapse = () => {
    setFeaturesExpanded(!featuresExpanded);
  };

  const toggleTechnologiesCollapse = () => {
    setTechnologiesExpanded(!technologiesExpanded);
  };

  return (
    <Flex pt={125} alignItems="center" justifyContent="center">
      <Box>
        <Flex justify={"center"}>
          <Box
            as="button"
            color="black"
            borderRadius="md"
            padding={1}
            fontSize="23px"
            bgGradient="radial(circle at 6.6% 12%, rgb(0, 255, 160)  20.8%, rgb(64, 0, 126) 100.2%)"
            _hover={{
              bgGradient:
                "radial(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%)",
            }}
            mt={6}
            onClick={toggleDescriptionCollapse}
          >
            Descripción de la App
            {descriptionExpanded ? (
              <Icon as={MdExpandLess} />
            ) : (
              <Icon as={MdExpandMore} />
            )}
          </Box>
        </Flex>
        <Collapse in={descriptionExpanded} animateOpacity>
          <UnorderedList mt={4} pl={4}>
            <ListItem fontSize={"20px"}>
              Esta aplicación fue desarrollada para gestionar tareas y que el
              usuario pueda hacer un uso mas eficiente de su tiempo.
            </ListItem>
          </UnorderedList>
        </Collapse>

        <Flex justify={"center"}>
          <Box
            as="button"
            color="black"
            borderRadius="md"
            padding={1}
            fontSize="25px"
            bgGradient="radial(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%)"
            _hover={{
              bgGradient:
                "radial(circle at 6.6% 12%, rgb(0, 255, 160)  20.8%, rgb(64, 0, 126) 100.2%)",
            }}
            mt={6}
            onClick={toggleFeaturesCollapse}
          >
            Funcionalidades
            {featuresExpanded ? (
              <Icon as={MdExpandLess} />
            ) : (
              <Icon as={MdExpandMore} />
            )}
          </Box>
        </Flex>
        <Collapse in={featuresExpanded} animateOpacity>
          <UnorderedList mt={4} pl={4}>
            <ListItem fontSize={"20px"}>
              Crear un tarea con un nombre y descripcion
            </ListItem>
            <ListItem fontSize={"20px"}>Eliminar una tarea</ListItem>
            <ListItem fontSize={"20px"}>
              Editar tanto el nombre como la descripcion de la tarea
            </ListItem>
            <ListItem fontSize={"20px"}>
              Marcado de tareas pendientes y completadas.
            </ListItem>
            <ListItem fontSize={"20px"}>
              Cambio de tema entre modo claro y oscuro.
            </ListItem>
          </UnorderedList>
        </Collapse>

        <Flex justify={"center"}>
          <Box
            as="button"
            color="black"
            borderRadius="md"
            padding={1}
            fontSize="23px"
            bgGradient="radial(circle at 6.6% 12%, rgb(0, 255, 160)  20.8%, rgb(64, 0, 126) 100.2%)"
            _hover={{
              bgGradient:
                "radial(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%)",
            }}
            mt={6}
            onClick={toggleTechnologiesCollapse}
          >
            Tecnologías utilizadas
            {technologiesExpanded ? (
              <Icon as={MdExpandLess} />
            ) : (
              <Icon as={MdExpandMore} />
            )}
          </Box>
        </Flex>
        <Collapse in={technologiesExpanded} animateOpacity>
          <UnorderedList mt={4} pl={4}>
            <ListItem fontSize={"20px"}>
              React para la interfaz de usuario.
            </ListItem>
            <ListItem fontSize={"20px"}>
              React Router para el enrutamiento.
            </ListItem>
            <ListItem fontSize={"20px"}>Chakra UI para estilos.</ListItem>
            <ListItem fontSize={"20px"}>React Icons para íconos.</ListItem>
          </UnorderedList>
        </Collapse>
      </Box>
    </Flex>
  );
};

export default AboutUs;
