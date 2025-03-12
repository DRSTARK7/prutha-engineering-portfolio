
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import LayersIcon from '@mui/icons-material/Layers';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const serviceCategories = [
    {
      icon: <SettingsIcon fontSize="large" />,
      title: 'VMC Machining',
      description: 'High-precision vertical machining center operations for complex components.',
      services: [
        'CNC Milling and Turning',
        'Multi-axis Machining',
        'Precision Parts Manufacturing',
        'Prototype Development'
      ],
      color: 'secondary'
    },
    {
      icon: <BuildIcon fontSize="large" />,
      title: 'Metal Fabrication',
      description: 'Comprehensive metal fabrication services from raw materials to finished products.',
      services: [
        'Custom Sheet Metal Fabrication',
        'Welding and Assembly',
        'Laser and Plasma Cutting',
        'Metal Forming and Bending'
      ],
      color: 'primary'
    },
    {
      icon: <LayersIcon fontSize="large" />,
      title: 'Industrial Solutions',
      description: 'End-to-end industrial solutions tailored to specific industry requirements.',
      services: [
        'Production Line Components',
        'Industrial Automation Parts',
        'Custom Machinery Components',
        'Specialized Industrial Fixtures'
      ],
      color: 'secondary'
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Engineering Services',
      description: 'Advanced engineering services to optimize designs for manufacturability.',
      services: [
        'Design for Manufacturing (DFM)',
        'Reverse Engineering',
        'Technical Consulting',
        '3D Modeling and CAD Services'
      ],
      color: 'primary'
    }
  ];

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: alpha('#f7f8f9', 0.5) }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '48rem', mx: 'auto', textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Our Services"
            color="secondary"
            size="small"
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              bgcolor: alpha('#4f85dd', 0.1),
              color: 'secondary.main',
            }}
            className="reveal"
          />
          <Typography 
            variant="h2" 
            className="reveal"
            sx={{ 
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Comprehensive fabrication and machining solutions
          </Typography>
          <Typography 
            variant="body1" 
            className="reveal"
            sx={{ fontSize: '1.125rem', color: 'text.secondary' }}
          >
            We offer a wide range of precision manufacturing services utilizing state-of-the-art 
            vertical machining centers and advanced fabrication technologies.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {serviceCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                className="reveal" 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-5px)',
                  },
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Box 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    justifyContent: 'center',
                    bgcolor: category.color === 'secondary' 
                      ? alpha('#4f85dd', 0.1) 
                      : alpha('#566a85', 0.1),
                    color: category.color === 'secondary' 
                      ? 'secondary.main' 
                      : 'primary.main',
                  }}
                >
                  <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {category.icon}
                  </Box>
                </Box>
                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {category.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                    {category.services.map((service, i) => (
                      <Box 
                        component="li" 
                        key={i} 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          mb: 1.5,
                        }}
                      >
                        <CheckIcon 
                          sx={{ 
                            mr: 1, 
                            mt: 0.25, 
                            fontSize: '1.25rem',
                            color: category.color === 'secondary' ? 'secondary.main' : 'primary.main' 
                          }} 
                        />
                        <Typography variant="body2">{service}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper 
          elevation={1} 
          className="reveal"
          sx={{ 
            mt: 10, 
            p: 4, 
            borderRadius: 2,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Custom solutions for your specific needs
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Can't find exactly what you're looking for? Our team specializes in 
                developing custom solutions tailored to your unique requirements.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                href="#contact"
                sx={{ 
                  px: 3,
                  py: 1.25,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 3,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Request Custom Service
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box 
                    sx={{ 
                      p: 2, 
                      bgcolor: alpha('#4f85dd', 0.1),
                      borderRadius: 2,
                      height: '100%',
                    }}
                  >
                    <Box sx={{ height: 4, width: 40, bgcolor: 'secondary.main', mb: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      Industry-Specific Solutions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Specialized manufacturing solutions for aerospace, automotive, medical, and industrial sectors.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box 
                    sx={{ 
                      p: 2, 
                      bgcolor: alpha('#566a85', 0.1),
                      borderRadius: 2,
                      height: '100%',
                    }}
                  >
                    <Box sx={{ height: 4, width: 40, bgcolor: 'primary.main', mb: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      Material Expertise
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Extensive experience working with steel, aluminum, titanium, stainless steel, and specialty alloys.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box 
                    sx={{ 
                      p: 2, 
                      bgcolor: alpha('#566a85', 0.1),
                      borderRadius: 2,
                      height: '100%',
                    }}
                  >
                    <Box sx={{ height: 4, width: 40, bgcolor: 'primary.main', mb: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      Tolerance Capabilities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Precision machining with tolerances as tight as ±0.0005" for critical applications.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box 
                    sx={{ 
                      p: 2, 
                      bgcolor: alpha('#4f85dd', 0.1),
                      borderRadius: 2,
                      height: '100%',
                    }}
                  >
                    <Box sx={{ height: 4, width: 40, bgcolor: 'secondary.main', mb: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      Volume Flexibility
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Scalable manufacturing capabilities for both small prototype runs and high-volume production.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Services;
