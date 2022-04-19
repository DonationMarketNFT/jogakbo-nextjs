import React from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { darkTheme, lightTheme } from "./theme";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Provider = ({ children }: Props) => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
