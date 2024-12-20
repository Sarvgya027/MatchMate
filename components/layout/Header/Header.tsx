'use client';
import React, { useState, useMemo } from 'react';
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
import { usePathname, useRouter } from 'next/navigation';  
import Logo from './Logo';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import AuthButtonLogOut from '@/components/auth/AuthButtonLogOut';
import Link from 'next/link';
import { UsersTable } from '@/types';


interface HeaderProps {
  user: User;
  userDetails: UsersTable;
}

const Header = ({ user, userDetails } : HeaderProps) => {
  console.log('line 1',user)
  console.log('line 2',userDetails)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();  
  const router = useRouter();  

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

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
    { title: 'Home', href: '/' },
    { title: 'Discover', href: '/discover' },
    { title: 'About', href: '/about' },
  ], []);

  const getTabStyle = (tabHref: string) => ({
    color: pathname === tabHref ? theme.palette.text.primary : theme.palette.text.primary,
    borderBottom: pathname === tabHref ? `2px solid ${theme.palette.primary.main}` : 'none',
    borderRadius: 0,
    '&:hover': {
      color: theme.palette.primary.light,
      background: 'transparent',
      borderBottom: `2px solid ${theme.palette.primary.light}`,
    },
  });

  const glassmorphismStyle = {
    background: 'rgba(30, 30, 30, 0.8)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  };


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
                  key={link.href}
                  onClick={() => router.push(link.href)}  
                  sx={getTabStyle(link.href)}
                >
                  {link.title}
                </Button>
              ))}
            </Box>

            {/* Centered Logo */}
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
              <Logo />
              <h1>{userDetails?.name}</h1>
            </Box>

            {/* Right side - Profile */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={handleProfileMenuOpen} sx={{ padding: 0.5, '&:hover': { background: 'rgba(255, 255, 255, 0.1)' } }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton onClick={handleProfileMenuOpen} sx={{ padding: 0.5, '&:hover': { background: 'rgba(255, 255, 255, 0.1)' } }}>
                <Avatar />
              </IconButton>
              <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
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
              mt: 2,
            },
          }}
        >
          <MenuItem onClick={handleProfileMenuClose}><Link href={'/profile'}>Profile</Link></MenuItem>
          <MenuItem onClick={handleProfileMenuClose}><Link href={'/settings'}>Settings</Link></MenuItem>
          <AuthButtonLogOut />
        </Menu> 

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: 240,
              background: 'rgba(30, 30, 30, 0.95)',
              backdropFilter: 'blur(8px)',
            },
          }}
        >
          <List>
            {navigationLinks.map((link) => (
              <ListItem
                key={link.href}
                onClick={() => {
                  router.push(link.href);  
                  setMobileOpen(false);
                }}
                sx={{
                  color: pathname === link.href ? theme.palette.primary.main : theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.primary.light,
                    background: 'rgba(255, 255, 255, 0.05)',
                  },
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
