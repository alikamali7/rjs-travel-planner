import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import earth from "../../assets/img/earth.png";
import { navItems } from "../../constant/navItems";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "#fff", maxWidth: "lg", margin: "auto" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
            <img src={earth} alt="" style={{ height: 40 }} />
            <Typography
              variant="h6"
              display={"inline-block"}
              color="textSecondary"
            >
              Travel Planner
            </Typography>
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "#666" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {navItems.map((item) => (
              <Link key={item.id} to={item.path}>
                <Button>{item.name}</Button>
              </Link>
            ))}
          </Box>
          <Stack
            direction="row"
            spacing={1}
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="/login">
              <Button>Sign in</Button>
            </Link>
            <Link to="regestry">
              <Button
                sx={{
                  backgroundColor: "#283a2c",
                  color: "#fff",
                  borderRadius: "12px",
                  "&:hover": { bgcolor: "#daddc5", color: "#000" },
                }}
              >
                Sign up
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
