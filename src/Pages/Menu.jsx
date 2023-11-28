import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Flex pt={5} alignItems="center" justifyContent={"center"}>
      <nav>
        <div className="menu-links">
          <Link to="/">Home </Link>
          <Link to="/Tasks" ml={10}>
            Tasks
          </Link>
          <Link to="/AboutUs" ml={4}>
            About us
          </Link>
        </div>
      </nav>
    </Flex>
  );
};

export default Menu;
