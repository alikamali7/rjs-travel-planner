import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: "100%",
        backgroundColor: "#a4a4a4",
      }}
    >
      <Typography>Developed by Ali whit 💗</Typography>
    </Box>
  );
}

export default Footer;
