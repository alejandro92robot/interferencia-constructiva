// src/components/Header.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useScrollTrigger,
  Slide,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(10, 25, 47, 0.98)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  borderBottom: '1px solid rgba(56, 140, 201, 0.3)',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const ProfessionalToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  maxWidth: '1280px',
  margin: '0 auto',
  width: '100%',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-1px)',
  },
}));

const RoboticIcon = styled(PrecisionManufacturingIcon)(({ theme }) => ({
  fontSize: '2rem',
  background: 'linear-gradient(135deg, #388cc9 0%, #64ffda 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-3px)',
    },
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: 800,
  fontSize: '1.4rem',
  background: 'linear-gradient(135deg, #ffffff 0%, #64ffda 50%, #388cc9 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '0.5px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #388cc9, transparent)',
    opacity: 0.7,
  },
}));

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ccd6f6',
  fontWeight: 500,
  fontSize: '0.85rem',
  padding: theme.spacing(1, 2),
  position: 'relative',
  borderRadius: '6px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minWidth: 'auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(56, 140, 201, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%)',
    borderRadius: '6px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #388cc9, #64ffda)',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    color: '#ffffff',
    transform: 'translateY(-1px)',
    '&::after': {
      width: '80%',
    },
  },
  '&.active': {
    color: '#64ffda',
    '&::after': {
      width: '80%',
      background: '#64ffda',
    },
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #388cc9 0%, #2a6ba5 100%)',
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '0.85rem',
  padding: theme.spacing(1, 2.5),
  borderRadius: '8px',
  border: '1px solid rgba(56, 140, 201, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #2a6ba5 0%, #388cc9 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(56, 140, 201, 0.4)',
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#ccd6f6',
  border: '1px solid rgba(56, 140, 201, 0.3)',
  borderRadius: '8px',
  padding: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(56, 140, 201, 0.1)',
    color: '#64ffda',
    borderColor: '#64ffda',
    transform: 'scale(1.05)',
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 50,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Inicio');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = ['Inicio', 'Proyectos', 'Nosotros'];

  const drawer = (
    <Box sx={{ 
      width: 320, 
      background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
      height: '100%',
      color: 'white',
      boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
    }}>
      <Box sx={{ 
        p: 3, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid rgba(56, 140, 201, 0.2)',
        background: 'rgba(10, 25, 47, 0.8)',
      }}>
        <LogoContainer>
          <RoboticIcon />
          <Logo variant="h6">Interferencia Constructiva</Logo>
        </LogoContainer>
        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ 
            color: '#ccd6f6',
            border: '1px solid rgba(56, 140, 201, 0.3)',
            '&:hover': {
              color: '#64ffda',
              borderColor: '#64ffda',
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ p: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item} 
            sx={{ 
              p: 0,
              mb: 0.5,
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(56, 140, 201, 0.1)',
              }
            }}
          >
            <Button
              fullWidth
              onClick={() => {
                handleNavClick(item);
                handleDrawerToggle();
              }}
              sx={{
                justifyContent: 'flex-start',
                p: 2,
                color: activeItem === item ? '#64ffda' : '#ccd6f6',
                fontWeight: activeItem === item ? 600 : 400,
                background: activeItem === item ? 
                  'linear-gradient(135deg, rgba(56, 140, 201, 0.15) 0%, rgba(100, 255, 218, 0.1) 100%)' : 
                  'transparent',
                border: activeItem === item ? '1px solid rgba(100, 255, 218, 0.3)' : '1px solid transparent',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(56, 140, 201, 0.2) 0%, rgba(100, 255, 218, 0.15) 100%)',
                  color: '#64ffda',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {item}
            </Button>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ p: 3, pt: 2 }}>
        <CTAButton 
          fullWidth 
          variant="contained"
          startIcon={<ScienceIcon />}
          sx={{
            py: 1.5,
            fontSize: '1rem',
          }}
        >
          Contactar Expertos
        </CTAButton>
      </Box>
      
      <Box sx={{ 
        p: 3, 
        mt: 2,
        borderTop: '1px solid rgba(56, 140, 201, 0.2)',
        textAlign: 'center',
      }}>
        <Typography variant="body2" sx={{ color: '#8892b0', fontSize: '0.75rem' }}>
          Innovación Tecnológica Avanzada
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <StyledAppBar position="fixed">
          <ProfessionalToolbar>
            <LogoContainer>
              <RoboticIcon />
              <Logo variant="h6">Interferencia Constructiva</Logo>
            </LogoContainer>
            
            {/* Desktop Navigation */}
            <NavContainer sx={{ display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map((item) => (
                <NavButton 
                  key={item}
                  className={activeItem === item ? 'active' : ''}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </NavButton>
              ))}
              <CTAButton variant="contained" startIcon={<ScienceIcon />}>
                Contactar
              </CTAButton>
            </NavContainer>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </MobileMenuButton>
          </ProfessionalToolbar>
        </StyledAppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 320,
            borderLeft: '1px solid rgba(56, 140, 201, 0.2)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;