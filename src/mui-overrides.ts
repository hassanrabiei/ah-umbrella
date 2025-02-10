import { Components } from "@mui/material/styles";

export const muiOverrides: Components = {
    
  MuiButton: {
    styleOverrides: {
      root: {
        border: "2px solid red",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "purple",
        "&:hover": {
          border: "2px solid #f44336",
          backgroundColor: "#ff5722",
        },
      },
    },
  },
};
