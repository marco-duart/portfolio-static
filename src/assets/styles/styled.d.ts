import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      accent: string;
      accentLight: string;
      secundary: string;
      tertiary: string;
      close: string;
      background: string;
      backgroundSecondary: string;
      backgroundTertiary: string;
      highlight: string;
      edit: string;
      delete: string;
      cancel: string;
      create: string;
      save: string;
      text: string;
      textSecondary: string;
      error: string;
      success: string;
      warning: string;
      black: string;
      gray: string;
      lightGray: string;
      white: string;
    };
    fonts: {
      playWrite: string;
      openSans: string;
      candal: string;
      poppins: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
    };
    borderRadius: {
      none: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    boxShadow: {
      none: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      neon: string;
      neonPink: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
