import { Box, Typography } from "@mui/material";

function CityCard({ src, name, subtitle }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.5s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />
      <Typography
        variant="h1"
        color="#fff"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          fontWeight: "bold",
          fontSize: {
            xs: "3.2rem",
            sm: "1.7rem",
            md: "2rem",
            lg: "rem",
          },
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="p"
        color="#fff"
        sx={{
          position: "absolute",
          bottom: "8%",
          left: "5%",
          fontSize: {
            xs: "0.88rem",
            sm: "0.72rem",
            md: "0.63rem",
            lg: "0.88rem",
          },
          fontWeight: "bold",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default CityCard;
