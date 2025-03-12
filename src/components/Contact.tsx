
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import { useToast } from "@/hooks/use-toast";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

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

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: alpha('#f7f8f9', 0.5) }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '48rem', mx: 'auto', textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Contact Us"
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
            Get in touch with our team
          </Typography>
          <Typography 
            variant="body1" 
            className="reveal"
            sx={{ fontSize: '1.125rem', color: 'text.secondary' }}
          >
            Have a project in mind or need a quote? Reach out to us and one of our experts will get back to you.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5} lg={4} className="reveal">
            <Paper 
              elevation={1}
              sx={{ 
                p: 4, 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Box 
                    sx={{ 
                      mr: 2, 
                      p: 1, 
                      bgcolor: alpha('#4f85dd', 0.1),
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PhoneIcon sx={{ color: 'secondary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>Phone</Typography>
                    <Typography variant="body2" color="text.secondary">+1 (555) 123-4567</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Box 
                    sx={{ 
                      mr: 2, 
                      p: 1, 
                      bgcolor: alpha('#4f85dd', 0.1),
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon sx={{ color: 'secondary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>Email</Typography>
                    <Typography variant="body2" color="text.secondary">info@precisionfab.com</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex' }}>
                  <Box 
                    sx={{ 
                      mr: 2, 
                      p: 1, 
                      bgcolor: alpha('#4f85dd', 0.1),
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LocationOnIcon sx={{ color: 'secondary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>Location</Typography>
                    <Typography variant="body2" color="text.secondary">
                      1234 Industrial Parkway<br />
                      Manufacturing District<br />
                      City, State 12345
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
              <Divider sx={{ my: 3 }} />
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Business Hours</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Monday - Friday</Typography>
                  <Typography variant="body2">8:00 AM - 5:00 PM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Saturday</Typography>
                  <Typography variant="body2">9:00 AM - 1:00 PM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Sunday</Typography>
                  <Typography variant="body2">Closed</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={7} lg={8} className="reveal">
            <Paper 
              elevation={1}
              sx={{ p: 4 }}
            >
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                Send us a message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      id="name"
                      name="name"
                      label="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      placeholder="John Doe"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      id="email"
                      name="email"
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      placeholder="john@example.com"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      placeholder="+1 (555) 123-4567"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      id="subject"
                      name="subject"
                      label="Subject"
                      select
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="">Select a subject</MenuItem>
                      <MenuItem value="quote">Request a Quote</MenuItem>
                      <MenuItem value="info">General Information</MenuItem>
                      <MenuItem value="support">Technical Support</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </TextField>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      id="message"
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSubmitting}
                      endIcon={<SendIcon />}
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        mt: 2,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 3,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {isSubmitting ? 'Processing...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
