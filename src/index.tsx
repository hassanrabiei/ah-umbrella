import React, { ReactNode } from "react"; // ✅ Ensure React is imported
import { ThemeProvider } from "@mui/material/styles"; // ✅ Fix import
import { theme } from "./theme";

interface UmbrellaProviderProps {
  children: ReactNode;
}

export const UmbrellaProvider = ({ children }: UmbrellaProviderProps) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
};

export { theme };
