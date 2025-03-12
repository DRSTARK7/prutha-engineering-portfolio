
import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { alpha } from '@mui/material/styles';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="hero" 
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to right, rgba(100, 100, 100, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 100, 100, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(240, 245, 252, 0.5), transparent, rgba(247, 248, 249, 1))', 
          zIndex: 0
        }}
      />
      
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '16rem',
          height: '16rem',
          bgcolor: alpha('#a1c3ee', 0.2), // blue-300 with alpha
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.8 },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '33%',
          right: '25%',
          width: '20rem',
          height: '20rem',
          bgcolor: alpha('#d0d7df', 0.3), // steel-200 with alpha
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Chip 
          label="Precision Engineering & Fabrication"
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
          variant="h1" 
          ref={titleRef} 
          className="reveal"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.2,
            animationDelay: "200ms",
          }}
        >
          Crafting the future with <br />
          <Box component="span" sx={{ color: 'secondary.main' }}>precision</Box> and{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>innovation</Box>
        </Typography>
        
        <Typography 
          variant="h5" 
          className="reveal"
          sx={{ 
            maxWidth: '36rem', 
            mx: 'auto', 
            color: 'text.secondary',
            mb: 4,
            animationDelay: "400ms",
          }}
        >
          Transforming raw materials into sophisticated solutions through state-of-the-art 
          vertical machining centers and expert fabrication techniques.
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 2,
            animationDelay: "600ms",
          }}
          className="reveal"
        >
          <Button 
            variant="contained"
            color="primary"
            size="large"
            href="#contact"
            sx={{ 
              px: 4, 
              py: 1.5,
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outlined"
            color="primary"
            size="large"
            href="#services"
            sx={{ 
              px: 4, 
              py: 1.5,
              '&:hover': {
                bgcolor: alpha('#41526b', 0.05),
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Explore Our Services
          </Button>
        </Box>
      </Container>
      
      <Button 
        onClick={scrollToNextSection}
        aria-label="Scroll down"
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: 'auto',
          p: 1,
          color: 'text.secondary',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          }
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default Hero;
