import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customComponents?: {
      RegularButton?: {
        border?: string;
        borderRadius?: string;
        backgroundColor?: string;
        color?: string;
        padding?: string;
        hover?: {
          borderColor?: string;
          backgroundColor?: string;
        };
      };
      InputField?: {
        border?: string;
      };
    };
  }

  interface ThemeOptions {
    customComponents?: {
      RegularButton?: {
        border?: string;
        borderRadius?: string;
        backgroundColor?: string;
        color?: string;
        padding?: string;
        hover?: {
          borderColor?: string;
          backgroundColor?: string;
        };
      };
      InputField?: {
        border?: string;
      };
    };
  }
}
