import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Simple gaming bracket */}
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        component="span"
        sx={{ 
          color: theme.palette.primary.main,
          fontWeight: 800,
          opacity: 0.9
        }}
      >
        ⟨
      </Typography>
      
      {/* Match text */}
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        component="span"
        sx={{ 
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '0.5px',
          mx: 0.5,
          fontFamily: 'var(--font-roboto)',
        }}
      >
        Match
      </Typography>
      
      {/* Mate text with simple gradient */}
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        component="span"
        sx={{ 
          fontWeight: 800,
          background: `linear-gradient(90deg, 
            ${theme.palette.primary.main}, 
            ${theme.palette.primary.light}
          )`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.5px',
          fontFamily: 'var(--font-roboto)',
        }}
      >
        Mate
      </Typography>
      
      {/* Simple gaming bracket */}
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        component="span"
        sx={{ 
          color: theme.palette.primary.main,
          fontWeight: 800,
          opacity: 0.9
        }}
      >
        ⟩
      </Typography>
    </Box>
  );
};

export default Logo;