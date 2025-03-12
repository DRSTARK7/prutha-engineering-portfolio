
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box sx={{ bgcolor: '#1e2632', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: '"Helvetica Neue", sans-serif',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
                display: 'inline-flex',
                mb: 2,
              }}
            >
              Precision<Box component="span" sx={{ color: '#a1c3ee' }}>Fab</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: '#a7b3c3', mb: 3 }}>
              Precision engineering and fabrication solutions for industries that demand excellence.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                size="small"
                sx={{ 
                  bgcolor: alpha('#ffffff', 0.1),
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#386ad0',
                  }
                }}
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  bgcolor: alpha('#ffffff', 0.1),
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#386ad0',
                  }
                }}
                aria-label="Twitter"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  bgcolor: alpha('#ffffff', 0.1),
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#386ad0',
                  }
                }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  bgcolor: alpha('#ffffff', 0.1),
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#386ad0',
                  }
                }}
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <Box 
                  component="li" 
                  key={index}
                  sx={{ mb: 1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    underline="none"
                    sx={{ 
                      color: '#a7b3c3',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'white',
                        '& .MuiSvgIcon-root': {
                          opacity: 1,
                          ml: 0,
                        }
                      },
                    }}
                  >
                    <ArrowForwardIosIcon 
                      className="MuiSvgIcon-root"
                      sx={{ 
                        fontSize: 12, 
                        mr: 1, 
                        opacity: 0, 
                        ml: -3,
                        transition: 'all 0.2s',
                      }} 
                    />
                    {item === 'Home' ? 'Home' : item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {[
                'VMC Machining',
                'Metal Fabrication',
                'Industrial Solutions',
                'Engineering Services',
                'Custom Projects'
              ].map((item, index) => (
                <Box 
                  component="li" 
                  key={index}
                  sx={{ mb: 1 }}
                >
                  <Link
                    href="#services"
                    underline="none"
                    sx={{ 
                      color: '#a7b3c3',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'white',
                        '& .MuiSvgIcon-root': {
                          opacity: 1,
                          ml: 0,
                        }
                      },
                    }}
                  >
                    <ArrowForwardIosIcon 
                      className="MuiSvgIcon-root"
                      sx={{ 
                        fontSize: 12, 
                        mr: 1, 
                        opacity: 0, 
                        ml: -3,
                        transition: 'all 0.2s',
                      }} 
                    />
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Info
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1.5, display: 'flex' }}>
                <Typography sx={{ color: '#a1c3ee', mr: 1, fontWeight: 500 }}>Location:</Typography>
                <Typography sx={{ color: '#a7b3c3' }}>1234 Industrial Parkway, City, State 12345</Typography>
              </Box>
              <Box component="li" sx={{ mb: 1.5, display: 'flex' }}>
                <Typography sx={{ color: '#a1c3ee', mr: 1, fontWeight: 500 }}>Phone:</Typography>
                <Link href="tel:+15551234567" underline="none" sx={{ color: '#a7b3c3', '&:hover': { color: 'white' } }}>
                  +1 (555) 123-4567
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5, display: 'flex' }}>
                <Typography sx={{ color: '#a1c3ee', mr: 1, fontWeight: 500 }}>Email:</Typography>
                <Link href="mailto:info@precisionfab.com" underline="none" sx={{ color: '#a7b3c3', '&:hover': { color: 'white' } }}>
                  info@precisionfab.com
                </Link>
              </Box>
              <Box component="li" sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#a1c3ee', mr: 1, fontWeight: 500 }}>Hours:</Typography>
                <Typography sx={{ color: '#a7b3c3' }}>Mon-Fri: 8am - 5pm</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: alpha('#ffffff', 0.1) }} />
        
        <Box sx={{ pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#7789a1' }}>
            &copy; {currentYear} PrecisionFab. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
