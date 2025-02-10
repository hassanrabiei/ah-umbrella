import { createTheme } from "@mui/material/styles";
import { customComponents } from "./components";
import { muiOverrides } from "./mui-overrides";
import { palette } from "./palette";
import "./types";

export const theme = createTheme({
  palette,
  components: muiOverrides,
  customComponents,
});
