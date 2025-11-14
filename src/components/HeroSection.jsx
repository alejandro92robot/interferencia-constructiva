// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container, Grid, alpha, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

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
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
  }
`;

const particleFlow = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
`;

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const lineReveal = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
`;

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
    linear-gradient(-45deg, ${COLORS.primary}, #2c6da3, #388cc9, #4fa8e8)
  `,
  backgroundSize: '400% 400%',
  animation: `${gradientShift} 15s ease infinite`,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  paddingTop: '50px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '40px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 15% 25%, ${alpha(COLORS.white, 0.1)} 0%, transparent 50%),
      radial-gradient(circle at 85% 65%, ${alpha(COLORS.white, 0.1)} 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const AnimatedGrid = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `
    linear-gradient(${alpha(COLORS.white, 0.3)} 1px, transparent 1px),
    linear-gradient(90deg, ${alpha(COLORS.white, 0.3)} 1px, transparent 1px),
    linear-gradient(${alpha(COLORS.white, 0.2)} 1px, transparent 1px),
    linear-gradient(90deg, ${alpha(COLORS.white, 0.2)} 1px, transparent 1px)
  `,
  backgroundSize: `
    40px 40px,
    40px 40px,
    20px 20px,
    20px 20px
  `,
  animation: 'gridMove 20s linear infinite',
  '@keyframes gridMove': {
    '0%': {
      backgroundPosition: '0 0, 0 0, 0 0, 0 0',
    },
    '100%': {
      backgroundPosition: '40px 40px, 40px 40px, 20px 20px, 20px 20px',
    },
  },
  zIndex: 2,
  pointerEvents: 'none',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 4,
  animation: `${fadeInUp} 1s ${ANIMATION.timing} both`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
}));

const AnimatedTagline = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '14px',
  color: COLORS.white,
  letterSpacing: '3px',
  marginBottom: theme.spacing(3),
  textTransform: 'uppercase',
  position: 'relative',
  fontWeight: 500,
  animation: `${fadeInUp} 0.8s ${ANIMATION.timing} 0.2s both`,
  textAlign: 'center',
  width: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '30px',
    height: '2px',
    background: `linear-gradient(90deg, ${COLORS.white}, ${alpha(COLORS.white, 0.5)})`,
    borderRadius: '1px',
    animation: `${pulse} 2s infinite`,
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(4),
    '&::before': {
      left: '0',
      transform: 'translateY(-50%)',
      width: '20px',
    },
  },
}));

const AnimatedTitle = styled(Typography)(({ theme }) => ({
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
  animation: `
    ${fadeInUp} 0.8s ${ANIMATION.timing} 0.4s both,
    ${textGlow} 3s ease-in-out infinite 1s
  `,
  textAlign: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const AnimatedSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  lineHeight: 1.7,
  marginBottom: theme.spacing(6),
  color: alpha(COLORS.white, 0.9),
  maxWidth: '600px',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontWeight: 300,
  animation: `${fadeInScale} 1.2s ${ANIMATION.timing} 0.8s both`,
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '1px',
    background: `linear-gradient(90deg, ${alpha(COLORS.white, 0.3)}, transparent)`,
    animation: `${lineReveal} 1.5s ${ANIMATION.timing} 1.5s both`,
    [theme.breakpoints.up('md')]: {
      left: 0,
      transform: 'none',
      width: '100%',
    },
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  animation: `${fadeInUp} 0.8s ${ANIMATION.timing} 1.2s both`,
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

const AnimatedPrimaryButton = styled(Button)(({ theme }) => ({
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
  animation: `${fadeInUp} 0.8s ${ANIMATION.timing} 1.4s both`,
  minWidth: '200px',
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
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 15px 35px rgba(255, 255, 255, 0.4)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(-1px) scale(1.02)',
  },
}));

// ==================== ANIMATED ELEMENTS ====================
const FloatingOrbs = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 3,
  pointerEvents: 'none',
}));

const Orb = styled(Box)(({ theme, size, color, top, left, delay }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
  filter: 'blur(8px)',
  top: top,
  left: left,
  animation: `${floatAnimation} 6s ease-in-out infinite`,
  animationDelay: delay,
  opacity: 0.6,
}));

const ParticleField = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 2,
  pointerEvents: 'none',
}));

const Particle = styled(Box)(({ theme, left, delay, duration }) => ({
  position: 'absolute',
  width: '2px',
  height: '2px',
  background: alpha(COLORS.white, 0.6),
  borderRadius: '50%',
  left: left,
  bottom: '-10px',
  animation: `${particleFlow} ${duration || '8s'} linear infinite`,
  animationDelay: delay,
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100px',
    height: '1px',
    background: `linear-gradient(90deg, ${COLORS.white}, transparent)`,
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
  },
}));

const WaveLayer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '200%',
  height: '100px',
  background: `linear-gradient(90deg, transparent, ${alpha(COLORS.white, 0.1)}, transparent)`,
  animation: `${waveAnimation} 10s linear infinite`,
  zIndex: 3,
}));

const PulseRing = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '200px',
  height: '200px',
  border: `2px solid ${alpha(COLORS.white, 0.3)}`,
  borderRadius: '50%',
  top: '50%',
  right: '20%',
  transform: 'translateY(-50%)',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    border: `2px solid ${alpha(COLORS.white, 0.2)}`,
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '&::before': {
    width: '300px',
    height: '300px',
    animation: `${pulse} 3s ease-out infinite 1s`,
  },
  '&::after': {
    width: '400px',
    height: '400px',
    animation: `${pulse} 4s ease-out infinite 2s`,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

// ==================== MAIN COMPONENT ====================
const HeroSection = () => {
  const theme = useTheme();

  return (
    <HeroContainer component="main">
      <AnimatedGrid />
      
      {/* Floating Orbs */}
      <FloatingOrbs>
        <Orb 
          size="120px" 
          color={alpha(COLORS.primaryLight, 0.4)} 
          top="20%" 
          left="10%" 
          delay="0s" 
        />
        <Orb 
          size="80px" 
          color={alpha(COLORS.white, 0.3)} 
          top="60%" 
          left="80%" 
          delay="2s" 
        />
        <Orb 
          size="150px" 
          color={alpha(COLORS.primary, 0.3)} 
          top="70%" 
          left="15%" 
          delay="4s" 
        />
      </FloatingOrbs>

      {/* Particle Field */}
      <ParticleField>
        {[...Array(15)].map((_, i) => (
          <Particle
            key={i}
            left={`${(i * 7)}%`}
            delay={`${i * 0.5}s`}
            duration={`${8 + (i % 3)}s`}
          />
        ))}
      </ParticleField>

      {/* Wave Layers */}
      <WaveLayer sx={{ animationDelay: '0s', opacity: 0.3 }} />
      <WaveLayer sx={{ 
        animationDelay: '-5s', 
        opacity: 0.2,
        height: '150px',
        background: `linear-gradient(90deg, transparent, ${alpha(COLORS.primaryLight, 0.2)}, transparent)`
      }} />

      {/* Pulse Rings */}
      <PulseRing />

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
              {/* Contenido completamente centrado en móvil */}
              <Box sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                [theme.breakpoints.up('md')]: {
                  alignItems: 'flex-start',
                  textAlign: 'left',
                },
              }}>
                <AnimatedTagline variant="subtitle1">
                  Innovación Tecnológica Avanzada
                </AnimatedTagline>
                
                <AnimatedTitle variant="h1">
                  Construyendo el Futuro con Tecnología de Vanguardia
                </AnimatedTitle>
                
                <AnimatedSubtitle variant="body1">
                  En Interferencia Constructiva, fusionamos ciencia de punta con ingeniería innovadora 
                  para desarrollar soluciones transformadoras que redefinen industrias y crean un impacto positivo en la sociedad.
                </AnimatedSubtitle>
                
                <ButtonGroup>
                  <AnimatedPrimaryButton 
                    variant="contained" 
                    size="large"
                    sx={{
                      '&:hover': {
                        animation: `${pulse} 0.5s ease-in-out`,
                      }
                    }}
                  >
                    Descubrir Proyectos
                  </AnimatedPrimaryButton>
                </ButtonGroup>
              </Box>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;