// src/components/ProjectSection.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  alpha,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import ScienceIcon from '@mui/icons-material/Science';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkIcon from '@mui/icons-material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// ==================== CONSTANTS ====================
const COLORS = {
  primary: '#3a8eca',
  primaryDark: '#2a6ba5',
  primaryLight: '#4fa8e8',
  darkBlue: '#2c3e50',
  textPrimary: '#2c3e50',
  textSecondary: '#5a6c7d',
  white: '#ffffff',
};

// ==================== IMAGES ====================
const PROJECT_IMAGES = {
  recargo: '/images/proyecto1/image9.jpeg',
  modelo3D: '/images/proyecto1/image1.jpeg',
  prototipo: '/images/proyecto1/image2.jpeg',
  circuito: '/images/proyecto1/image3.jpeg',
  valvulas: '/images/proyecto1/image5.jpeg',
  mecanizado: '/images/proyecto1/image7.jpeg',
};

// ==================== STYLED COMPONENTS ====================
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  background: `
    radial-gradient(circle at 10% 20%, ${alpha(COLORS.primary, 0.08)} 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, ${alpha(COLORS.primary, 0.05)} 0%, transparent 50%),
    linear-gradient(135deg, ${COLORS.white} 0%, #f8fbff 50%, ${COLORS.white} 100%)
  `,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(45deg, transparent 40%, ${alpha(COLORS.primary, 0.02)} 50%, transparent 60%)
    `,
  },
}));

const BlueprintGrid = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `
    linear-gradient(${alpha(COLORS.primary, 0.1)} 1px, transparent 1px),
    linear-gradient(90deg, ${alpha(COLORS.primary, 0.1)} 1px, transparent 1px),
    linear-gradient(${alpha(COLORS.primary, 0.05)} 0.5px, transparent 0.5px),
    linear-gradient(90deg, ${alpha(COLORS.primary, 0.05)} 0.5px, transparent 0.5px)
  `,
  backgroundSize: `
    60px 60px,
    60px 60px,
    20px 20px,
    20px 20px
  `,
  zIndex: 1,
  pointerEvents: 'none',
}));

// ==================== COMPONENTES DE GALERÍA MEJORADOS ====================
const GalleryContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '400px',
  overflow: 'hidden',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const GalleryImage = styled(Box)(({ theme, imageurl, active }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: '400px',
  background: imageurl 
    ? `url(${imageurl}) center/contain no-repeat`
    : `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
  opacity: active ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: theme.spacing(3),
}));

const ImageDescription = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: COLORS.white,
  padding: theme.spacing(2, 3),
  borderRadius: '8px',
  maxWidth: '90%',
  textAlign: 'center',
  width: '100%',
}));

const GalleryNavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: COLORS.primary,
  '&:hover': {
    backgroundColor: COLORS.white,
    transform: 'translateY(-50%) scale(1.1)',
  },
  zIndex: 5,
  transition: 'all 0.3s ease',
}));

const PrevButton = styled(GalleryNavButton)(({ theme }) => ({
  left: theme.spacing(2),
}));

const NextButton = styled(GalleryNavButton)(({ theme }) => ({
  right: theme.spacing(2),
}));

const GalleryDots = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: theme.spacing(1),
  zIndex: 5,
}));

const GalleryDot = styled(Box)(({ theme, active }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: active ? COLORS.primary : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active ? COLORS.primaryDark : 'rgba(255, 255, 255, 0.8)',
    transform: 'scale(1.2)',
  },
}));

// ==================== PROJECT DATA ====================
const projects = [
  {
    id: 1,
    title: 'Módulo de Atención Automática',
    description: 'Dispensador automático de detergentes a granel.',
    fullDescription: 'Desarrollamos un sistema completo de gestión de recargos que automatiza y optimiza los procesos empresariales. La plataforma incorpora algoritmos de inteligencia artificial para análisis predictivo, reduciendo errores humanos y mejorando la eficiencia operativa en un 60%.',
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Docker', 'AWS'],
    status: 'Completado',
    icon: <ScienceIcon />,
    image: PROJECT_IMAGES.recargo,
    duration: '8 meses',
    teamSize: '6 especialistas',
    client: 'Empresa de Logística Internacional',
    demoUrl: '#',
    
    gallery: [
      {
        image: PROJECT_IMAGES.modelo3D,
        description: 'Modelado tridimensional previo a la construcción del prototipo.'
      },
      {
        image: PROJECT_IMAGES.prototipo,
        description: 'Prototipo funcional montado en estación de servicio.'
      },
      {
        image: PROJECT_IMAGES.circuito,
        description: 'Integración de control electrónico.'
      },
      {
        image: PROJECT_IMAGES.valvulas,
        description: 'Dispensador para múltiples productos.'
      },
      {
        image: PROJECT_IMAGES.mecanizado,
        description: ''
      }
    ],
    
    features: [
      {
        title: 'Automatización Inteligente',
        description: 'Sistema que reduce el procesamiento manual en un 85%',
        icon: '🤖'
      },
      {
        title: 'Análisis Predictivo',
        description: 'Algoritmos de IA con 95% de precisión en cálculos',
        icon: '📊'
      },
      {
        title: 'Dashboard en Tiempo Real',
        description: 'Métricas y KPIs actualizados instantáneamente',
        icon: '⚡'
      },
      {
        title: 'Reportes Automatizados',
        description: 'Generación automática de reportes ejecutivos',
        icon: '📈'
      },
      {
        title: 'Seguridad Avanzada',
        description: 'Encriptación de datos y autenticación multifactor',
        icon: '🔒'
      },
      {
        title: 'Integración API',
        description: 'Conectores para sistemas ERP existentes',
        icon: '🔗'
      }
    ],
    
    achievements: [
      'Reducción del 60% en tiempo de procesamiento',
      '95% de precisión en cálculos automatizados',
      'Integración con 3 sistemas ERP diferentes',
      'Capacidad para procesar 10,000+ transacciones/día',
      'Implementación exitosa en 2 países',
      'Soporte para 100+ usuarios concurrentes'
    ]
  },
];

// ==================== COMPONENTE DE PESTAÑAS ====================
const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

// ==================== COMPONENTE DE GALERÍA MEJORADO ====================
const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          imageurl={image.image}
          active={index === currentImageIndex}
        >
          <ImageDescription>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {image.description}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {index + 1} / {images.length}
            </Typography>
          </ImageDescription>
        </GalleryImage>
      ))}
      
      {images.length > 1 && (
        <>
          <PrevButton onClick={prevImage} size="large">
            <ArrowBackIosIcon />
          </PrevButton>
          
          <NextButton onClick={nextImage} size="large">
            <ArrowForwardIosIcon />
          </NextButton>
          
          <GalleryDots>
            {images.map((_, index) => (
              <GalleryDot
                key={index}
                active={index === currentImageIndex}
                onClick={() => goToImage(index)}
              />
            ))}
          </GalleryDots>
        </>
      )}
    </GalleryContainer>
  );
};

// ==================== COMPONENTE DE CARACTERÍSTICAS ====================
const FeaturesGrid = ({ features }) => {
  return (
    <Grid container spacing={3}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              p: 3,
              backgroundColor: 'transparent',
              borderRadius: '0px',
              border: 'none',
              height: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: alpha(COLORS.primary, 0.03),
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              {feature.icon}
            </Typography>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: COLORS.textPrimary,
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: COLORS.textSecondary,
                  lineHeight: 1.5,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

// ==================== MODAL COMPONENT MEJORADO ====================
const ProjectModal = ({ open, onClose, project }) => {
  const [tabValue, setTabValue] = useState(0);

  if (!open || !project) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
        padding: 2,
      }}
      onClick={handleBackdropClick}
    >
      <Box
        sx={{
          backgroundColor: COLORS.white,
          borderRadius: '0px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '95vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header del Modal */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
            color: COLORS.white,
            padding: '24px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '2rem' },
              flex: 1
            }}
          >
            {project.title}
          </Typography>
          <IconButton 
            onClick={onClose}
            sx={{ 
              color: COLORS.white,
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Cuerpo del Modal */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {/* Galería de imágenes */}
          {project.gallery && project.gallery.length > 0 && (
            <ImageGallery images={project.gallery} />
          )}

          {/* Pestañas de contenido */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  minHeight: '60px',
                },
                '& .Mui-selected': {
                  color: `${COLORS.primary} !important`,
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: COLORS.primary,
                  height: 3,
                },
              }}
            >
              <Tab label="Descripción" />
              <Tab label="Características" />
              <Tab label="Logros" />
              <Tab label="Información" />
            </Tabs>
          </Box>

          {/* Contenido de las pestañas */}
          <TabPanel value={tabValue} index={0}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: COLORS.textPrimary, mb: 3 }}>
              Descripción del Proyecto
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: COLORS.textSecondary, mb: 4 }}>
              {project.fullDescription}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: COLORS.textPrimary, mt: 4, mb: 2 }}>
              Tecnologías Utilizadas
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {project.technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    backgroundColor: alpha(COLORS.primary, 0.12),
                    color: COLORS.primaryDark,
                    fontWeight: 600,
                    border: `1px solid ${alpha(COLORS.primary, 0.25)}`,
                    borderRadius: '4px',
                  }}
                />
              ))}
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: COLORS.textPrimary, mb: 4 }}>
              Características Principales
            </Typography>
            <FeaturesGrid features={project.features} />
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: COLORS.textPrimary, mb: 4 }}>
              Logros y Resultados
            </Typography>
            <List>
              {project.achievements.map((achievement, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: COLORS.primary }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={achievement}
                    primaryTypographyProps={{ 
                      color: COLORS.textSecondary,
                      fontWeight: 500
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  backgroundColor: 'transparent',
                  borderRadius: '0px',
                  padding: 3,
                  border: 'none',
                  height: '100%'
                }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: COLORS.textPrimary }}>
                    Información del Proyecto
                  </Typography>
                  
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CalendarTodayIcon sx={{ color: COLORS.primary }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Duración"
                        secondary={project.duration}
                      />
                    </ListItem>
                    
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <GroupIcon sx={{ color: COLORS.primary }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Equipo"
                        secondary={project.teamSize}
                      />
                    </ListItem>
                    
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <TrendingUpIcon sx={{ color: COLORS.primary }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Cliente"
                        secondary={project.client}
                      />
                    </ListItem>
                  </List>

                  <Chip 
                    label={project.status} 
                    sx={{ 
                      mt: 2,
                      backgroundColor: 
                        project.status === 'Completado' ? alpha('#4CAF50', 0.15) :
                        project.status === 'En Desarrollo' ? alpha(COLORS.primary, 0.15) :
                        alpha('#FF9800', 0.15),
                      color: 
                        project.status === 'Completado' ? '#2E7D32' :
                        project.status === 'En Desarrollo' ? COLORS.primaryDark :
                        '#EF6C00',
                      border: `2px solid ${
                        project.status === 'Completado' ? alpha('#4CAF50', 0.4) :
                        project.status === 'En Desarrollo' ? alpha(COLORS.primary, 0.4) :
                        alpha('#FF9800', 0.4)
                      }`,
                      fontWeight: 700,
                      width: '100%',
                      justifyContent: 'center',
                      borderRadius: '4px',
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<LinkIcon />}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
                      color: COLORS.white,
                      padding: '16px 32px',
                      fontWeight: 700,
                      borderRadius: '0px',
                      fontSize: '1rem',
                      '&:hover': {
                        background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 100%)`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${alpha(COLORS.primary, 0.3)}`,
                      },
                      transition: 'all 0.3s ease',
                      mb: 3
                    }}
                  >
                    Ver Demo en Vivo
                  </Button>
                  
                  <Typography variant="body2" sx={{ color: COLORS.textSecondary, fontStyle: 'italic' }}>
                    Explora la versión funcional del proyecto
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

// ==================== MAIN COMPONENT - DISEÑO PROFESIONAL SIN BORDES ====================
const ProjectSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    console.log('Opening modal for:', project.title);
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Section id="proyectos">
      <BlueprintGrid />
      
      <Container maxWidth={false} sx={{ maxWidth: '1400px !important', px: { xs: 3, sm: 4, md: 6 } }}>
        <Box sx={{ textAlign: 'center', mb: 10, position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            background: `linear-gradient(135deg, ${COLORS.darkBlue} 0%, ${COLORS.primary} 50%, ${COLORS.primaryDark} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
              borderRadius: '0px',
            },
          }}>
            Proyectos de Vanguardia
          </Typography>
          <Typography sx={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            textAlign: 'center',
            color: COLORS.textSecondary,
            maxWidth: '700px',
            margin: '0 auto',
            marginTop: 4,
            lineHeight: 1.7,
            fontWeight: 400,
          }}>
            Descubre nuestras soluciones tecnológicas innovadoras que están redefiniendo industrias 
            y creando el futuro mediante la integración de ciencia avanzada e ingeniería de precisión.
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 6,
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {projects.map((project) => (
            <Box key={project.id} sx={{
              width: '100%',
              minHeight: '520px',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              background: 'transparent',
              borderRadius: '0px',
              boxShadow: 'none',
              border: 'none',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}>
              {/* IMAGEN CUADRADA - 300x300px */}
              <Box sx={{
                width: '100%',
                height: '300px',
                background: project.image 
                  ? `url(${project.image}) center/cover no-repeat`
                  : `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: 'none',
              }}>
                <Box sx={{
                  fontSize: '3rem',
                  color: 'rgba(255, 255, 255, 0.95)',
                  zIndex: 2,
                  position: 'relative',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }}>
                  {project.icon}
                </Box>
                {/* Overlay de gradiente */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${alpha(COLORS.primary, 0.4)} 0%, ${alpha(COLORS.primaryDark, 0.6)} 100%)`,
                }} />
              </Box>
              
              <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: 4,
                '& > *': {
                  flexShrink: 0,
                },
                background: 'transparent',
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ 
                    fontWeight: 700, 
                    color: COLORS.textPrimary, 
                    flex: 1,
                    fontSize: '1.3rem',
                    lineHeight: 1.3,
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {project.title}
                  </Typography>
                  <Chip 
                    label={project.status} 
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      height: '26px',
                      backgroundColor: 
                        project.status === 'Completado' ? alpha('#4CAF50', 0.15) :
                        project.status === 'En Desarrollo' ? alpha(COLORS.primary, 0.15) :
                        alpha('#FF9800', 0.15),
                      color: 
                        project.status === 'Completado' ? '#2E7D32' :
                        project.status === 'En Desarrollo' ? COLORS.primaryDark :
                        '#EF6C00',
                      border: `2px solid ${
                        project.status === 'Completado' ? alpha('#4CAF50', 0.4) :
                        project.status === 'En Desarrollo' ? alpha(COLORS.primary, 0.4) :
                        alpha('#FF9800', 0.4)
                      }`,
                      borderRadius: '4px',
                    }}
                  />
                </Box>
                
                <Typography variant="body1" sx={{ 
                  color: COLORS.textSecondary, 
                  mb: 4, 
                  lineHeight: 1.6, 
                  fontSize: '1rem',
                  fontWeight: 400,
                  flex: 1,
                  minHeight: '80px'
                }}>
                  {project.description}
                </Typography>

                <Box sx={{ mb: 4, minHeight: '60px' }}>
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: alpha(COLORS.primary, 0.12),
                        color: COLORS.primaryDark,
                        fontWeight: 600,
                        margin: 0.3,
                        border: `1px solid ${alpha(COLORS.primary, 0.25)}`,
                        fontSize: '0.75rem',
                        height: '28px',
                        borderRadius: '4px',
                        '&:hover': {
                          backgroundColor: alpha(COLORS.primary, 0.2),
                        },
                      }}
                    />
                  ))}
                  {project.technologies.length > 4 && (
                    <Chip
                      label={`+${project.technologies.length - 4}`}
                      size="small"
                      sx={{
                        backgroundColor: alpha(COLORS.primary, 0.08),
                        color: COLORS.primaryDark,
                        fontWeight: 600,
                        margin: 0.3,
                        border: `1px solid ${alpha(COLORS.primary, 0.2)}`,
                        fontSize: '0.75rem',
                        height: '28px',
                        borderRadius: '4px',
                      }}
                    />
                  )}
                </Box>

                <Button
                  endIcon={<LaunchIcon />}
                  fullWidth
                  onClick={() => handleOpenModal(project)}
                  sx={{
                    color: COLORS.primary,
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: `2px solid ${alpha(COLORS.primary, 0.3)}`,
                    borderRadius: '0px',
                    padding: '12px 24px',
                    marginTop: 'auto',
                    flexShrink: 0,
                    minHeight: '52px',
                    '&:hover': {
                      backgroundColor: alpha(COLORS.primary, 0.08),
                      borderColor: COLORS.primary,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Explorar Proyecto
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <ProjectModal 
        open={modalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
    </Section>
  );
};

export default ProjectSection;