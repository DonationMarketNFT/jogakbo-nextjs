import {css, DefaultTheme} from "styled-components";

export const flexSet = (just = "center", align = "center") => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

export const flexColumnSet = (just = "center", align = "center") => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  768: customMediaQuery(768),
  tablet: customMediaQuery(1100),
  mobile: customMediaQuery(500),
};

export const color = {
  mainColor: "#f49a4a",
  white: "#fff",
  gray1: "#f8f9fa",
  gray2: "#e5e5e5",
  gray3: "#cecece",
  gray4: "#b4b4b4",
  gray5: "#9c9c9c",
  gray6: "#767676",
  gray7: "#585858",
  black: "#333",
};

export const lightTheme: DefaultTheme = {
  textColor: "#333",
  bgColor: "#fff",
  contentBgColor: "#fff",
  borderColor: "1px solid rgba(0, 0, 0, 0.1)",
  gradient: "linear-gradient(45deg, #ffe259 0%,#f49a4a 100%)",
  boxShadow1: "4px 12px 30px 6px rgb(0 0 0 / 9%)",
  boxShadow2: "4px 12px 30px 6px rgb(0 0 0 / 18%)",
  gray: {
    gray1: "#585858",
    gray2: "#737373",
    gray3: "#8d8e8e",
    gray4: "#a8a9a9",
    gray5: "#c3c3c4",
    gray6: "#dddedf",
    gray7: "#f8f9fa",
  },
  glass: {
    bgColor: "rgba(255, 255, 255, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    color: "rgb(28,28,28)",
  },
};

export const darkTheme: DefaultTheme = {
  textColor: "rgba(255,255,255,0.8)",
  bgColor: "#000",
  contentBgColor: "gray",
  borderColor: "1px solid rgba(255, 255, 255, 0.3)",
  gradient: "linear-gradient(45deg, #ffe259 0%,#f49a4a 100%)",
  boxShadow1: "4px 12px 30px 6px rgb(255 255 255 / 9%)",
  boxShadow2: "4px 12px 30px 6px rgb(255 255 255 / 18%)",
  gray: {
    gray1: "#f8f9fa",
    gray2: "#e5e5e5",
    gray3: "#cecece",
    gray4: "#b4b4b4",
    gray5: "#9c9c9c",
    gray6: "#767676",
    gray7: "#585858",
  },
  glass: {
    bgColor: "rgba(89, 89, 89, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(14, 14, 14, 0.19) 0px 6px 15px 0px",
    color: "rgb(255, 255, 255, 0.75)",
  },
};
