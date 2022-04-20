import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    contentBgColor: string;
    borderColor: string;
    gradient: string;
    boxShadow1: string;
    boxShadow2: string;
    gray: {
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
    };
    glass: {
      bgColor: string;
      border: string;
      boxShadow: string;
      color: string;
    };
  }
}
