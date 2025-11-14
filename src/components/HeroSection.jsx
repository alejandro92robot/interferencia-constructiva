// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container, Grid, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

// ==================== CONSTANTS & THEME ====================
const COLORS = {
  primary: '#388cc9',
  primaryLight: '#4fa8e8',
  white: '#ffffff',
  gradientStart: '#ffffff',
  gradientEnd: '#e6f4ff',
};

const ANIMATION = {
  duration: {
    slow: '4s',
    medium: '3s',
    fast: '2s',
  },
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// ==================== KEYFRAMES ====================
const keyframes = {
  lightPulse: {
    '0%, 100%': {
      opacity: 0.3,
      transform: 'rotate(15deg) scale(1)',
    },
    '50%': {
      opacity: 0.6,
      transform: 'rotate(15deg) scale(1.05)',
    },
  },
  rayPulse: {
    '0%, 100%': {
      opacity: 0.4,
    },
    '50%': {
      opacity: 0.8,
    },
  },
  nodePulse: {
    '0%': {
      boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.8), 0 0 0 0 rgba(255, 255, 255, 0.5)',
    },
    '70%': {
      boxShadow: '0 0 0 10px rgba(255, 255, 255, 0), 0 0 0 20px rgba(255, 255, 255, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(255, 255, 255, 0), 0 0 0 0 rgba(255, 255, 255, 0)',
    },
  },
  floatParticle: {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
      opacity: 0,
    },
    '25%': {
      transform: 'translateY(-20px) translateX(10px)',
      opacity: 0.6,
    },
    '50%': {
      transform: 'translateY(-40px) translateX(-5px)',
      opacity: 0.3,
    },
    '75%': {
      transform: 'translateY(-20px) translateX(-10px)',
      opacity: 0.6,
    },
  },
  fadeInUp: {
    '0%': {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};

// ==================== STYLED COMPONENTS ====================
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  background: `
    radial-gradient(circle at 20% 30%, ${alpha(COLORS.primaryLight, 0.25)} 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, ${alpha(COLORS.primaryLight, 0.25)} 0%, transparent 50%),
    linear-gradient(135deg, ${COLORS.primary} 0%, #2c6da3 100%)
  `,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  paddingTop: '50px', // Ajusta este valor según la altura de tu header
  [theme.breakpoints.down('md')]: {
    paddingTop: '40px', // Puedes ajustar para diferentes breakpoints
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 15% 25%, ${alpha(COLORS.white, 0.05)} 0%, transparent 50%),
      radial-gradient(circle at 85% 65%, ${alpha(COLORS.white, 0.05)} 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const BlueprintGrid = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `
    linear-gradient(${alpha(COLORS.white, 0.3)} 1px, transparent 1px),
    linear-gradient(90deg, ${alpha(COLORS.white, 0.3)} 1px, transparent 1px),
    linear-gradient(${alpha(COLORS.white, 0.2)} 1px, transparent 1px),
    linear-gradient(90deg, ${alpha(COLORS.white, 0.2)} 1px, transparent 1px),
    linear-gradient(${alpha(COLORS.white, 0.1)} 0.5px, transparent 0.5px),
    linear-gradient(90deg, ${alpha(COLORS.white, 0.1)} 0.5px, transparent 0.5px)
  `,
  backgroundSize: `
    40px 40px,
    40px 40px,
    20px 20px,
    20px 20px,
    10px 10px,
    10px 10px
  `,
  backgroundPosition: 'center center',
  zIndex: 2,
  pointerEvents: 'none',
  animation: 'gridMove 20s linear infinite',
  '@keyframes gridMove': {
    '0%': {
      backgroundPosition: '0 0, 0 0, 0 0, 0 0, 0 0, 0 0',
    },
    '100%': {
      backgroundPosition: '40px 40px, 40px 40px, 20px 20px, 20px 20px, 10px 10px, 10px 10px',
    },
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 4,
  animation: `${keyframes.fadeInUp} 1s ${ANIMATION.timing} both`,
}));

const Tagline = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '14px',
  color: COLORS.white,
  letterSpacing: '3px',
  marginBottom: theme.spacing(3),
  textTransform: 'uppercase',
  position: 'relative',
  paddingLeft: theme.spacing(4),
  fontWeight: 500,
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '2px',
    background: `linear-gradient(90deg, ${COLORS.white}, ${alpha(COLORS.white, 0.5)})`,
    borderRadius: '1px',
  },
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 0.2s both`,
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(4),
  background: `linear-gradient(135deg, ${COLORS.gradientStart} 0%, ${COLORS.gradientEnd} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  letterSpacing: '-0.02em',
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 0.4s both`,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  lineHeight: 1.7,
  marginBottom: theme.spacing(6),
  color: alpha(COLORS.white, 0.9),
  maxWidth: '600px',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontWeight: 300,
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 0.6s both`,
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: { xs: 'center', md: 'flex-start' },
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 0.8s both`,
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 5),
  backgroundColor: COLORS.white,
  color: COLORS.primary,
  fontWeight: 700,
  fontSize: '16px',
  borderRadius: '50px',
  textTransform: 'none',
  letterSpacing: '0.5px',
  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
  transition: 'all 0.4s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${alpha(COLORS.white, 0.4)}, transparent)`,
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    backgroundColor: '#f8fbff',
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(255, 255, 255, 0.4)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(-1px)',
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 5),
  backgroundColor: 'transparent',
  color: COLORS.white,
  fontWeight: 600,
  fontSize: '16px',
  borderRadius: '50px',
  border: `2px solid ${alpha(COLORS.white, 0.3)}`,
  textTransform: 'none',
  letterSpacing: '0.5px',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: alpha(COLORS.white, 0.1),
    borderColor: alpha(COLORS.white, 0.6),
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(255, 255, 255, 0.2)',
  },
}));

// ==================== VISUAL ELEMENTS ====================
const LightDispersion = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: '45%',
  height: '70%',
  zIndex: 3,
  [theme.breakpoints.down('lg')]: {
    width: '50%',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LightTriangle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '0',
  height: '0',
  borderLeft: '180px solid transparent',
  borderRight: '180px solid transparent',
  borderBottom: '300px solid rgba(255, 255, 255, 0.08)',
  top: '30%',
  right: '10%',
  transform: 'rotate(15deg)',
  filter: 'blur(12px)',
  animation: `${keyframes.lightPulse} ${ANIMATION.duration.slow} ease-in-out infinite`,
}));

const LightRay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  height: '2px',
  background: `linear-gradient(90deg, ${alpha(COLORS.white, 0.8)}, ${alpha(COLORS.white, 0)})`,
  transformOrigin: 'left center',
  filter: 'blur(1px)',
  animation: `${keyframes.rayPulse} ${ANIMATION.duration.medium} ease-in-out infinite`,
}));

const Ray1 = styled(LightRay)(({ theme }) => ({
  width: '220px',
  top: '25%',
  right: '8%',
  transform: 'rotate(45deg)',
  animationDelay: '0s',
}));

const Ray2 = styled(LightRay)(({ theme }) => ({
  width: '200px',
  top: '40%',
  right: '3%',
  transform: 'rotate(30deg)',
  animationDelay: '0.5s',
}));

const Ray3 = styled(LightRay)(({ theme }) => ({
  width: '240px',
  top: '55%',
  right: '6%',
  transform: 'rotate(60deg)',
  animationDelay: '1s',
}));

const TechNode = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  background: COLORS.white,
  boxShadow: `0 0 20px ${alpha(COLORS.white, 0.8)}`,
  animation: `${keyframes.nodePulse} ${ANIMATION.duration.fast} infinite`,
  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.6))',
}));

const Node1 = styled(TechNode)(({ theme }) => ({
  top: '35%',
  right: '32%',
  animationDelay: '0s',
}));

const Node2 = styled(TechNode)(({ theme }) => ({
  top: '60%',
  right: '22%',
  animationDelay: '1s',
}));

const Node3 = styled(TechNode)(({ theme }) => ({
  top: '45%',
  right: '12%',
  animationDelay: '2s',
}));

const LightParticle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  background: alpha(COLORS.white, 0.9),
  animation: `${keyframes.floatParticle} 8s ease-in-out infinite`,
}));

const Particle1 = styled(LightParticle)(({ theme }) => ({
  top: '25%',
  right: '18%',
  animationDelay: '0s',
}));

const Particle2 = styled(LightParticle)(({ theme }) => ({
  top: '40%',
  right: '12%',
  animationDelay: '1.5s',
}));

const Particle3 = styled(LightParticle)(({ theme }) => ({
  top: '55%',
  right: '22%',
  animationDelay: '3s',
}));

// ==================== MAIN COMPONENT ====================
const HeroSection = () => {
  return (
    <HeroContainer component="main">
      <BlueprintGrid />
      
      <Container 
        maxWidth={false} 
        sx={{ 
          maxWidth: '1200px !important',
          margin: '0 auto',
          padding: { xs: '0 20px', sm: '0 28px', md: '0 36px' },
          position: 'relative',
          zIndex: 4,
        }}
      >
        <Grid container alignItems="center" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={7}>
            <ContentWrapper>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                py: { xs: 10, md: 0 }
              }}>
                <Tagline variant="subtitle1">
                  Innovación Tecnológica Avanzada
                </Tagline>
                
                <MainTitle variant="h1">
                  Construyendo el Futuro con Tecnología de Vanguardia
                </MainTitle>
                
                <Subtitle variant="body1">
                  En Interferencia Constructiva, fusionamos ciencia de punta con ingeniería innovadora 
                  para desarrollar soluciones transformadoras que redefinen industrias y crean un impacto positivo en la sociedad.
                </Subtitle>
                
                <ButtonGroup>
                  <PrimaryButton variant="contained" size="large">
                    Descubrir Proyectos
                  </PrimaryButton>
               {/*    <SecondaryButton variant="outlined" size="large">
                    Conocer Más
                  </SecondaryButton>*/}
                </ButtonGroup>

                {/* Stats Preview 
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 1s both`,
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: COLORS.white, 
                        fontWeight: 700,
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      50+
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: alpha(COLORS.white, 0.8),
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '12px',
                      }}
                    >
                      Proyectos
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: COLORS.white, 
                        fontWeight: 700,
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      15+
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: alpha(COLORS.white, 0.8),
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '12px',
                      }}
                    >
                      Años Exp.
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: COLORS.white, 
                        fontWeight: 700,
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      100%
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: alpha(COLORS.white, 0.8),
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '12px',
                      }}
                    >
                      Compromiso
                    </Typography>
                  </Box>
                </Box>*/}
              </Box>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Container>
      
      <LightDispersion>
        <LightTriangle />
        <Ray1 />
        <Ray2 />
        <Ray3 />
        <Node1 />
        <Node2 />
        <Node3 />
        <Particle1 />
        <Particle2 />
        <Particle3 />
      </LightDispersion>
    </HeroContainer>
  );
};

export default HeroSection;