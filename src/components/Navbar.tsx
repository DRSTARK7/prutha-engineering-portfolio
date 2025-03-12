
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (path: string) => {
    if (path === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={trigger ? 1 : 0}
      sx={{ 
        bgcolor: trigger ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: trigger ? 'blur(10px)' : 'none',
        color: trigger ? 'text.primary' : 'inherit',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo and brand name */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            sx={{
              fontFamily: '"Helvetica Neue", sans-serif',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 5 },
            }}
          >
            Precision<Box component="span" sx={{ color: 'secondary.main' }}>Fab</Box>
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.name} onClick={() => scrollToSection(link.path)}>
                  <Typography textAlign="center">{link.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                sx={{ 
                  my: 2, 
                  mx: 1,
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  }
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
