import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="#469924"
        maxWidth="sm"
        sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" } }}
      >
        One travel app
      </Typography>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="#fae54d"
        sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" } }}
      >
        to replace them all
      </Typography>
      <Typography color="#327d81" maxWidth="450px">
        Streamline every aspect of your trip - from itinerary planning and
        travel budgeting to packing and wanderlust sharing.
      </Typography>
      <Link to="/plan">
        <Button
          sx={{
            padding: "12px",
            backgroundColor: "#283a2c",
            color: "#fff",
            borderRadius: "12px",
            "&:hover": { bgcolor: "#daddc5", color: "#000" },
          }}
        >
          Get Started
          <ArrowForwardIcon />
        </Button>
      </Link>
    </Box>
  );
}

export default Banner;
