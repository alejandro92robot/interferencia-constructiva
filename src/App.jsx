// src/App.jsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#388cc9',
      light: '#5ca3d4',
      dark: '#2a6ba5',
    },
    secondary: {
      main: '#2c3e50',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Exo 2', sans-serif",
    h1: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: '1.1rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
          width: '100%',
        },
        html: {
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
          width: '100%',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      'html, body': {
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        fontFamily: "'Exo 2', sans-serif",
      },
      '#root': {
        width: '100%',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: "'Orbitron', sans-serif !important",
        margin: 0,
      },
    }}
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <CssBaseline />
      
      {/* Header */}
      <Header />
      
      {/* Main Content - Añadimos padding top para compensar el header fijo */}
      <main style={{ 
        width: '100%',
        margin: 0 
      }}>
        <HeroSection />
        <ProjectSection />
        {/* Aquí puedes agregar más secciones */}
      </main>
      
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;