// // components/Header/ProfileMenu.jsx
// 'use client';

// import { useState } from 'react';
// import {
//   IconButton,
//   Avatar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Box,
//   Typography
// } from '@mui/material';
// import {
//   Person,
//   Settings,
//   Gamepad,
//   Message,
//   ExitToApp
// } from '@mui/icons-material';

// const ProfileMenu = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: 'Profile', icon: <Person />, path: '/profile' },
//     { text: 'My Games', icon: <Gamepad />, path: '/my-games' },
//     { text: 'Messages', icon: <Message />, path: '/messages' },
//     { text: 'Settings', icon: <Settings />, path: '/settings' },
//     { text: 'Logout', icon: <ExitToApp />, path: '/logout' }
//   ];

//   return (
//     <>
//       <IconButton
//         onClick={toggleDrawer(true)}
//         sx={{ 
//           ml: 2,
//           '&:hover': { bgcolor: 'primary.dark' }
//         }}
//       >
//         <Avatar sx={{ 
//           bgcolor: 'primary.main',
//           width: 35,
//           height: 35
//         }}>
//           <Person />
//         </Avatar>
//       </IconButton>

//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={toggleDrawer(false)}
//       >
//         <Box
//           sx={{
//             width: 280,
//             bgcolor: 'background.paper',
//             height: '100%',
//             color: 'text.primary'
//           }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <Box sx={{ p: 3, bgcolor: 'primary.main' }}>
//             <Avatar sx={{ width: 60, height: 60, mb: 2 }}>
//               <Person sx={{ fontSize: 40 }} />
//             </Avatar>
//             <Typography variant="h6">User Name</Typography>
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
//               user@example.com
//             </Typography>
//           </Box>

//           <List>
//             {menuItems.map((item) => (
//               <ListItem
//                 button 
//                 key={item.text}
//                 sx={{ '&:hover': { bgcolor: 'primary.dark' } }}
//               >
//                 <ListItemIcon sx={{ color: 'primary.main' }}>
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default ProfileMenu;