
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Sample project data
    const sampleProjects: Project[] = [
      {
        id: 1,
        title: 'Precision Milled Components',
        category: 'vmc',
        description: 'High-precision aluminum components for aerospace applications with tight tolerances.',
        image: alpha('#d0d7df', 0.5) // steel-200
      },
      {
        id: 2,
        title: 'Custom Steel Fabrication',
        category: 'fabrication',
        description: 'Custom steel structures designed and fabricated for industrial equipment.',
        image: alpha('#a7b3c3', 0.5) // steel-300
      },
      {
        id: 3,
        title: 'CNC Machined Parts',
        category: 'vmc',
        description: 'Complex geometries machined from solid blocks for the automotive industry.',
        image: alpha('#c8daf4', 0.5) // blue-200
      },
      {
        id: 4,
        title: 'Sheet Metal Assembly',
        category: 'fabrication',
        description: 'Precision sheet metal components with complex bends and welded assemblies.',
        image: alpha('#a1c3ee', 0.5) // blue-300
      },
      {
        id: 5,
        title: 'Multi-axis Machining',
        category: 'vmc',
        description: 'Multi-axis machined components with intricate features and surface finishes.',
        image: alpha('#d0d7df', 0.5) // steel-200
      },
      {
        id: 6,
        title: 'Metal Framework',
        category: 'fabrication',
        description: 'Structural steel framework with precision welding and surface treatments.',
        image: alpha('#c8daf4', 0.5) // blue-200
      }
    ];

    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
  }, []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
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
  }, [filteredProjects]);

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '48rem', mx: 'auto', textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Our Projects"
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
            Featured work showcasing our capabilities
          </Typography>
          <Typography 
            variant="body1" 
            className="reveal"
            sx={{ 
              fontSize: '1.125rem', 
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Explore our portfolio of precision fabrication and machining projects across various industries.
          </Typography>
          
          <ButtonGroup 
            variant="outlined" 
            sx={{ mb: 6 }}
            className="reveal"
          >
            <Button 
              onClick={() => filterProjects('all')}
              variant={activeFilter === 'all' ? 'contained' : 'outlined'}
              color="primary"
            >
              All Projects
            </Button>
            <Button 
              onClick={() => filterProjects('vmc')}
              variant={activeFilter === 'vmc' ? 'contained' : 'outlined'}
              color="primary"
            >
              VMC Machining
            </Button>
            <Button 
              onClick={() => filterProjects('fabrication')}
              variant={activeFilter === 'fabrication' ? 'contained' : 'outlined'}
              color="primary"
            >
              Fabrication
            </Button>
          </ButtonGroup>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                className="reveal" 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-5px)',
                    '& .project-overlay': {
                      opacity: 1,
                    }
                  },
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Box 
                  sx={{ 
                    position: 'relative',
                    aspectRatio: '16/9',
                    bgcolor: typeof project.image === 'string' ? 'transparent' : project.image,
                    overflow: 'hidden',
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      inset: 0,
                      bgcolor: alpha('#354257', 0.1),
                    }}
                  />
                  <Box 
                    className="project-overlay"
                    sx={{ 
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Chip 
                      label={project.category === 'vmc' ? 'VMC' : 'Fabrication'}
                      size="small"
                      sx={{
                        bgcolor: project.category === 'vmc' 
                          ? alpha('#4f85dd', 0.1) 
                          : alpha('#566a85', 0.1),
                        color: project.category === 'vmc' 
                          ? 'secondary.main' 
                          : 'primary.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    size="small" 
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      color: 'secondary.main',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                    }}
                  >
                    View Project Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
