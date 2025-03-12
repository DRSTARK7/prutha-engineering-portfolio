
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About = () => {
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

  const features = [
    {
      icon: <AccessTimeIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and commit to delivering projects on schedule without compromising quality.'
    },
    {
      icon: <ShieldIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality checks to ensure precision, durability, and compliance with industry standards.'
    },
    {
      icon: <PeopleIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
      title: 'Expert Team',
      description: 'Our workforce comprises skilled engineers and technicians with extensive experience in fabrication and machining.'
    },
    {
      icon: <VerifiedIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
      title: 'Certified Processes',
      description: 'We adhere to industry-certified processes and maintain stringent quality control measures throughout production.'
    }
  ];

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '48rem', mx: 'auto', textAlign: 'center', mb: 8 }}>
          <Chip 
            label="About Us"
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
            Precision engineered for excellence
          </Typography>
          <Typography 
            variant="body1" 
            className="reveal"
            sx={{ fontSize: '1.125rem', color: 'text.secondary' }}
          >
            With over two decades of experience, we specialize in high-precision fabrication and 
            vertical machining center operations, delivering exceptional quality and innovative solutions 
            for diverse industrial needs.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={1}
                className="reveal" 
                sx={{ 
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                  },
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Box 
                  sx={{ 
                    mb: 2,
                    display: 'inline-flex',
                    p: 1.5,
                    borderRadius: 1,
                    bgcolor: alpha('#4f85dd', 0.1),
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 12 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} className="reveal">
              <Box sx={{ position: 'relative' }}>
                <Box 
                  sx={{ 
                    aspectRatio: '4/3',
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: alpha('#d0d7df', 0.5),
                    position: 'relative',
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      inset: 0,
                      bgcolor: alpha('#354257', 0.1),
                    }}
                  />
                </Box>
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: -24,
                    right: -24,
                    width: '66.666%',
                    aspectRatio: '4/3',
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: alpha('#a1c3ee', 0.3),
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      inset: 0,
                      bgcolor: alpha('#2d56b8', 0.1),
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6} className="reveal">
              <Chip 
                label="Our Story"
                color="secondary"
                size="small"
                sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  bgcolor: alpha('#4f85dd', 0.1),
                  color: 'secondary.main',
                }}
              />
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Crafting precision since 2003
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Founded with a vision to revolutionize metal fabrication, our company has evolved into 
                a trusted partner for industries requiring precision-engineered components. Our journey 
                has been marked by continuous innovation and an unwavering commitment to quality.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                We've invested in cutting-edge vertical machining centers and developed proprietary 
                techniques that enable us to tackle complex projects with exceptional accuracy and efficiency.
              </Typography>
              <Button 
                href="#services" 
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  color: 'secondary.main',
                  fontWeight: 500,
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: 'secondary.dark',
                  }
                }}
              >
                Discover our capabilities
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
