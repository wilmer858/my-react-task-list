import { Flex, IconButton, useColorMode } from "@chakra-ui/react";

import { BsMoonStars } from "react-icons/bs";
import { CgSun } from "react-icons/cg";

import { useState } from "react";

const Buttons = () => {
  const { toggleColorMode } = useColorMode();
  const [icon, setIcon] = useState(<CgSun />);

  const handleButtonClick = () => {
    if (icon.type === CgSun) {
      setIcon(<BsMoonStars />);
    } else {
      setIcon(<CgSun />);
    }

    toggleColorMode();
  };

  return (
    <Flex pt={5} alignItems="center" justifyContent="center">
      <IconButton
        icon={icon}
        onClick={handleButtonClick}
        fontSize="24px"
        aria-label="Toggle button"
        borderColor="transparent"
        bg={"transparent"}
      />
    </Flex>
  );
};

export default Buttons;
