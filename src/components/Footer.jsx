// src/components/Footer.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// ==================== CONSTANTS & THEME ====================
const COLORS = {
  primary: '#388cc9',
  secondary: '#64ffda',
  darkBlue: '#0a192f',
  darkerBlue: '#020c1b',
  textPrimary: '#ccd6f6',
  textSecondary: '#8892b0',
  textMuted: '#64748b',
};

const ANIMATION = {
  duration: '0.4s',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// ==================== KEYFRAMES ====================
const keyframes = {
  fadeInUp: {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  float: {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-5px)',
    },
  },
  glow: {
    '0%, 100%': {
      boxShadow: '0 0 5px rgba(100, 255, 218, 0.3)',
    },
    '50%': {
      boxShadow: '0 0 20px rgba(100, 255, 218, 0.6)',
    },
  },
};

// ==================== STYLED COMPONENTS ====================
const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${COLORS.darkBlue} 0%, ${COLORS.darkerBlue} 100%)`,
  color: 'white',
  padding: theme.spacing(12, 0, 4),
  position: 'relative',
  overflow: 'hidden',
  borderTop: `1px solid rgba(56, 140, 201, 0.3)`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 15% 85%, rgba(56, 140, 201, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 85% 15%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
      linear-gradient(135deg, transparent 0%, rgba(56, 140, 201, 0.02) 50%, transparent 100%)
    `,
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${COLORS.primary}, ${COLORS.secondary}, transparent)`,
  },
}));

const BackgroundPattern = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.03,
  backgroundImage: `
    radial-gradient(circle at 25% 25%, ${COLORS.secondary} 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, ${COLORS.primary} 2px, transparent 2px)
  `,
  backgroundSize: '50px 50px',
  zIndex: 1,
}));

const FooterLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} both`,
}));

const LogoIconWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%)`,
    opacity: 0.1,
    animation: `${keyframes.float} 4s ease-in-out infinite`,
  },
}));

const RoboticIcon = styled(PrecisionManufacturingIcon)(({ theme }) => ({
  fontSize: '2.5rem',
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
  position: 'relative',
  zIndex: 2,
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: 800,
  fontSize: 'clamp(1.5rem, 2vw, 1.8rem)',
  background: `linear-gradient(135deg, ${COLORS.textPrimary} 0%, ${COLORS.secondary} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.02em',
}));

const CompanyDescription = styled(Typography)(({ theme }) => ({
  color: COLORS.textSecondary,
  lineHeight: 1.8,
  marginBottom: theme.spacing(4),
  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 0.1s both`,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
  marginBottom: theme.spacing(4),
  color: COLORS.textPrimary,
  position: 'relative',
  paddingBottom: theme.spacing(1.5),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '60px',
  },
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} both`,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: COLORS.textSecondary,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2.5),
  transition: `all ${ANIMATION.duration} ${ANIMATION.timing}`,
  fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
  position: 'relative',
  paddingLeft: theme.spacing(1.5),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: COLORS.primary,
    opacity: 0,
    transition: `all ${ANIMATION.duration} ${ANIMATION.timing}`,
  },
  '&:hover': {
    color: COLORS.secondary,
    transform: 'translateX(8px)',
    '&::before': {
      opacity: 1,
    },
  },
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} both`,
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: COLORS.textSecondary,
  border: `1px solid rgba(56, 140, 201, 0.4)`,
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: `all ${ANIMATION.duration} ${ANIMATION.timing}`,
  backgroundColor: 'rgba(15, 23, 42, 0.5)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    color: COLORS.secondary,
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    borderColor: COLORS.secondary,
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)',
    animation: `${keyframes.glow} 2s ease-in-out infinite`,
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  color: COLORS.textSecondary,
  fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
  lineHeight: 1.8,
  '& > div': {
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} both`,
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: COLORS.primary,
  minWidth: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2px',
}));

const NewsletterBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, rgba(56, 140, 201, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%)`,
  border: `1px solid rgba(56, 140, 201, 0.2)`,
  borderRadius: '12px',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backdropFilter: 'blur(10px)',
  animation: `${keyframes.fadeInUp} 0.8s ${ANIMATION.timing} 0.3s both`,
}));

const NewsletterButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
  color: COLORS.darkBlue,
  fontWeight: 700,
  padding: theme.spacing(1.5, 4),
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '0.9rem',
  transition: `all ${ANIMATION.duration} ${ANIMATION.timing}`,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(100, 255, 218, 0.4)',
  },
}));

const BottomLink = styled(Link)(({ theme }) => ({
  color: COLORS.textMuted,
  textDecoration: 'none',
  fontSize: '0.85rem',
  transition: `all ${ANIMATION.duration} ${ANIMATION.timing}`,
  position: 'relative',
  padding: theme.spacing(0.5, 1),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '0',
    height: '1px',
    background: COLORS.secondary,
    transition: `all ${ANIMATION.duration} ${ANIMATION.timing}`,
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    color: COLORS.secondary,
    '&::after': {
      width: '100%',
    },
  },
}));

// ==================== MAIN COMPONENT ====================
const Footer = () => {
  return (
    <FooterContainer component="footer">
      <BackgroundPattern />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 3, sm: 4, md: 6 } 
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Company Info & Newsletter */}
          <Grid item xs={12} md={5}>
            <FooterLogo>
              <LogoIconWrapper>
                <RoboticIcon />
              </LogoIconWrapper>
              <LogoText>Interferencia Constructiva</LogoText>
            </FooterLogo>
            
            <CompanyDescription variant="body1">
              Líderes en innovación tecnológica donde la ciencia de vanguardia y la ingeniería 
              de excelencia convergen para crear soluciones transformadoras que redefinen 
              industrias y construyen el futuro.
            </CompanyDescription>

            {/*<NewsletterBox>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: COLORS.textPrimary, 
                  mb: 2,
                  fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                  fontWeight: 600 
                }}
              >
                📧 Mantente Informado
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: COLORS.textSecondary, 
                  mb: 3,
                  fontSize: '0.9rem'
                }}
              >
                Suscríbete para recibir las últimas innovaciones y proyectos.
              </Typography>
              <NewsletterButton variant="contained" fullWidth>
                Suscribirse al Newsletter
              </NewsletterButton>
            </NewsletterBox>

            <Box sx={{ mt: 2 }}>
              <SocialIcon size="medium">
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon size="medium">
                <TwitterIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon size="medium">
                <GitHubIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon size="medium">
                <EmailIcon fontSize="small" />
              </SocialIcon>
            </Box>*/}
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle variant="h6">Enlaces</SectionTitle>
            <FooterLink href="#inicio" variant="body2">🏠 Inicio</FooterLink>
            <FooterLink href="#proyectos" variant="body2">🚀 Proyectos</FooterLink>
            <FooterLink href="#nosotros" variant="body2">👥 Nosotros</FooterLink>
            <FooterLink href="#tecnologias" variant="body2">💻 Tecnologías</FooterLink>
            <FooterLink href="#contacto" variant="body2">📞 Contacto</FooterLink>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle variant="h6">Servicios</SectionTitle>
            <FooterLink href="#" variant="body2">🔧 Desarrollo Software</FooterLink>
            <FooterLink href="#" variant="body2">🧠 Inteligencia Artificial</FooterLink>
            <FooterLink href="#" variant="body2">🤖 Robótica Avanzada</FooterLink>
            <FooterLink href="#" variant="body2">🌐 IoT & Edge Computing</FooterLink>
            <FooterLink href="#" variant="body2">🔬 Investigación Científica</FooterLink>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle variant="h6">Contacto</SectionTitle>
            <ContactInfo>
              <div>
                <ContactIcon>
                  <LocationOnIcon fontSize="small" />
                </ContactIcon>
                <span>
                  Av. Innovación 123, Tech Park<br />
                  Ciudad Tecnológica, CT 12345
                </span>
              </div>
              <div>
                <ContactIcon>
                  <PhoneIcon fontSize="small" />
                </ContactIcon>
                <span>+1 (555) 123-4567</span>
              </div>
              <div>
                <ContactIcon>
                  <EmailIcon fontSize="small" />
                </ContactIcon>
                <span>info@interferencia-constructiva.com</span>
              </div>
              <div>
                <ContactIcon>
                  <AccessTimeIcon fontSize="small" />
                </ContactIcon>
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </ContactInfo>
          </Grid>
        </Grid>

        <Divider 
          sx={{ 
            my: { xs: 5, md: 7 }, 
            borderColor: 'rgba(56, 140, 201, 0.3)',
            background: 'linear-gradient(90deg, transparent, #388cc9, transparent)'
          }} 
        />

        {/* Bottom Bar */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', sm: 'center' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: { xs: 3, sm: 2 },
          py: 1,
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: COLORS.textMuted, 
              fontSize: '0.85rem',
              order: { xs: 2, sm: 1 }
            }}
          >
            © 2025 Interferencia Constructiva. Todos los derechos reservados. 
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: { xs: 2, sm: 3 },
              flexWrap: 'wrap',
              justifyContent: 'center',
              order: { xs: 1, sm: 2 }
            }}
          >
            <BottomLink href="#" variant="body2">
              Política de Privacidad
            </BottomLink>
            <BottomLink href="#" variant="body2">
              Términos de Servicio
            </BottomLink>
            <BottomLink href="#" variant="body2">
              Cookies
            </BottomLink>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;