
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#41526b', // steel-600
      light: '#566a85', // steel-500
      dark: '#354257', // steel-700
      contrastText: '#f7f8f9', // steel-50
    },
    secondary: {
      main: '#386ad0', // blue-600
      light: '#4f85dd', // blue-500
      dark: '#2d56b8', // blue-700
      contrastText: '#f0f5fc', // blue-50
    },
    background: {
      default: '#f7f8f9', // steel-50
      paper: '#ffffff',
    },
    text: {
      primary: '#1e2632', // steel-900
      secondary: '#566a85', // steel-500
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontFamily: '"Helvetica Neue", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Helvetica Neue", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Helvetica Neue", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Helvetica Neue", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Helvetica Neue", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Helvetica Neue", sans-serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
