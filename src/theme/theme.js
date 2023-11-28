// theme.js

import { extendTheme } from "@chakra-ui/react";

// 1. import `extendTheme` function

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
