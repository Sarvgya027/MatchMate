'use client'
import React, { useMemo, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material';
import { FcMenu } from 'react-icons/fc';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md' ));
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement); 
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const navigationLinks = useMemo(() => [
    { title: 'Home', href: '#', id: 'home' },
    { title: 'Discover', href: '#', id: 'discover' },
    { title: 'About', href: '#', id: 'about' }
  ], []);

  const getTabStyle = (tabId: String) => ({
    color: activeTab === tabId ? theme.palette.primary.main : theme.palette.text.primary,
    borderBottom: activeTab === tabId ? `2px solid ${theme.palette.primary.main}` : 'none',
    borderRadius: 0,
    '&:hover': {
      color: theme.palette.primary.light,
      background: 'transparent',
      borderBottom: `2px solid ${theme.palette.primary.light}`
    }
  });

  const glassmorphismStyle = {
    background: 'rgba(30, 30, 30, 0.8)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
  };

  const Logo = () => (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        color: theme.palette.primary.main
      }}
    >
      MatchMate
    </Typography>
  );

  return (
    <AppBar position="fixed" elevation={0} sx={glassmorphismStyle}>
      <Toolbar>
        {!isMobile ? (
          // Desktop Layout
          <>
            {/* Left side - Navigation Links */}
            <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
              {navigationLinks.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  sx={getTabStyle(link.id)}
                >
                  {link.title}
                </Button>
              ))}
            </Box>

            {/* Centered Logo */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            >
              <Logo />
            </Box>

            {/* Right side - Profile */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                onClick={handleProfileMenuOpen}
                sx={{
                  padding: 0.5,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <Avatar>
                </Avatar>
              </IconButton>
            </Box>
          </>
        ) : (
          // Mobile Layout
          <>
            {/* Left side - Logo */}
            <Box sx={{ flex: 1 }}>
              <Logo />
            </Box>

            {/* Right side - Controls */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2
            }}>
              <IconButton
                onClick={handleProfileMenuOpen}
                sx={{
                  padding: 0.5,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <Avatar>
                </Avatar>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <FcMenu />
              </IconButton>
            </Box>
          </>
        )}

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          PaperProps={{
            sx: {
              background: 'rgba(30, 30, 30, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              mt: 1.5
            }
          }}
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          PaperProps={{
            sx: {
              width: 240,
              background: 'rgba(30, 30, 30, 0.95)',
              backdropFilter: 'blur(8px)'
            }
          }}
        >
          <List>
            {navigationLinks.map((link) => (
              <ListItem 
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  handleDrawerToggle();
                }}
                sx={{
                  color: activeTab === link.id ? theme.palette.primary.main : theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.primary.light,
                    background: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              >
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;