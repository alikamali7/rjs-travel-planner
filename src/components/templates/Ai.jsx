import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import earth from '../../assets/img/earth.png'; // فرض بر این است که مسیر این فایل صحیح است

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'Trip Planner', path: '/trip-planner' },
    { name: 'Weather', path: '/weather' },
  ];
  const authItems = [
    { name: 'Sign in', path: '/signin' },
    { name: 'Sign up', path: '/signup' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'textSecondary' }}>
        Travel Planner
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path} disablePadding>
            <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
        {authItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path} disablePadding>
            <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background: '#fff' }}>
      <Toolbar>
        {/* Logo and Title */}
        <Link to="/" style={{ display: 'flex', textDecoration: 'none', alignItems: 'center', marginRight: 'auto' }}>
          <img src={earth} alt="Travel Planner Logo" style={{ height: 40, marginRight: 8 }} />
          <Typography
            variant="h6"
            component="div"
            color="textSecondary"
            sx={{ display: { xs: 'none', sm: 'block' } }} // Title visible only on desktop/tablet
          >
            Travel Planner
          </Typography>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end" // Puts the icon at the end (right side)
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' }, color: 'textSecondary' }} // Only visible on mobile
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation and Auth Buttons for Desktop/Tablet */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button key={item.name} component={Link} to={item.path} sx={{ color: 'textSecondary' }}>
              {item.name}
            </Button>
          ))}
          {authItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              sx={{
                color: item.name === 'Sign up' ? '#fff' : 'textSecondary',
                backgroundColor: item.name === 'Sign up' ? '#283a2c' : 'transparent',
                borderRadius: item.name === 'Sign up' ? '16px' : '0',
                '&:hover': {
                  bgcolor: item.name === 'Sign up' ? '#daddc5' : 'rgba(0, 0, 0, 0.04)',
                  color: item.name === 'Sign up' ? '#000' : 'textSecondary',
                },
                ml: 1, // Add some margin between buttons
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }, // Set drawer width
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
}

export default Header;