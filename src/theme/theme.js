import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            borderRadius: "12px"
          },
        },
      },
    },
  },
});

export default theme;
