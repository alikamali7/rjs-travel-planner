import { Box, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import { exploreImg } from "../../constant/exploreImg";
import CityCard from "../module/CityCard";

function Explore() {
  return (
    <Box textAlign="center" mt="100px" mb="100px">
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          mb: "50px",
          maxWidth: { xs: "300px", sm: "400px", md: "500px" },
        }}
        fontWeight="bold"
        margin="auto"
      >
        Explore hundreds of places to visit for every corner of the world
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {exploreImg.map((item) => (
            <CityCard
              src={item.src}
              name={item.name}
              subtitle={item.subtitle}
              key={item.id}
            />
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}

export default Explore;
