'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ADB5', // Vibrant teal that works well for primary actions
      light: '#33BFC6', // Lighter teal for hover states
      dark: '#007A80', // Darker teal for active states
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF5722', // Energetic orange for secondary actions
      light: '#FF784E', // Lighter orange for hover states
      dark: '#B23C1A', // Darker orange for active states
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121212', // Dark background that won't strain eyes
      paper: '#1E1E1E', // Slightly lighter for cards and surfaces
    },
    text: {
      primary: '#E0E0E0', // Very readable light gray
      secondary: '#A0A0A0', // Subtle gray for secondary text
    },
    success: {
      main: '#4CAF50', // Standard green for success states
      light: '#81C784',
      dark: '#388E3C',
    },
    error: {
      main: '#F44336', // Clear red for errors
      light: '#E57373',
      dark: '#D32F2F',
    },
    warning: {
      main: '#F9A825', // Visible yellow for warnings
      light: '#FFB74D',
      dark: '#F57F17',
    },
    info: {
      main: '#29B6F6', // Subtle blue for information
      light: '#4FC3F7',
      dark: '#0288D1',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.4)',
            },
          },
        },
      },
    },
  },
});

export default theme;