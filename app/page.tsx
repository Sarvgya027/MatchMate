// import React from "react";
// import AuthButtonLogOut from "@/components/auth/AuthButtonLogOut";
// import { UsersTable } from "@/types";
// import { User } from "@supabase/supabase-js";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Paper,
// } from "@mui/material";
// import { getUserAndDetails } from "./actions/getUserServerAction";

// interface HomeProps {
//   user: User;
//   userDetails: UsersTable;
// }

// export default async function Home() {

//   const { user, userDetails } = await getUserAndDetails();

//   return (
//     <Container maxWidth="lg">
//       <Box
//         sx={{
//           textAlign: "center",
//           py: 6,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >

//         <Typography
//           variant="h1"
//           component="h1"
//           gutterBottom
//           color="text.primary"
//         >
//           Welcome Back, {userDetails?.user_name || userDetails?.name}!
//         </Typography>

//         <Typography variant="h6" color="text.secondary" gutterBottom>
//           Let's find you your next gaming buddy
//         </Typography>

//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           <Grid item xs={12} md={4}>
//             <Card elevation={3}>
//               <CardContent sx={{ textAlign: "center", py: 3 }}>
//                 {/* <GamesIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} /> */}
//                 <Typography variant="h6" gutterBottom>
//                   Active Games
//                 </Typography>
//                 <Typography variant="h2" color="primary.main">
//                   0
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card elevation={3}>
//               <CardContent sx={{ textAlign: "center", py: 3 }}>
//                 {/* <FriendsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} /> */}
//                 <Typography variant="h6" gutterBottom>
//                   Gaming Friends
//                 </Typography>
//                 <Typography variant="h2" color="primary.main">
//                   0
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card elevation={3}>
//               <CardContent sx={{ textAlign: "center", py: 3 }}>
//                 {/* <AchievementsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} /> */}
//                 <Typography variant="h6" gutterBottom>
//                   Achievements
//                 </Typography>
//                 <Typography variant="h2" color="primary.main">
//                   0
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }


// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Stack,
// } from "@mui/material";
// import { FaGamepad, FaUsers, FaTrophy } from "react-icons/fa";
// import ModalComponent from "@/components/home/Modal";
// import { getUserAndDetails } from "./actions/getUserServerAction";

// // interface HomeProps {
// //   user: User;
// //   userDetails: UsersTable;
// // }

// export default async function Home() {

//   const {user, userDetails} = await getUserAndDetails();

//   return (
//     <Box sx={{ display: "flex", minHeight: "calc(100vh - 64px)" }}>
//       {/* Left Side - Action Area */}
//       <Box
//         sx={{
//           width: "25%",
//           p: 2,
//           backgroundColor: "background.paper",
//           borderRight: "1px solid",
//           borderColor: "divider",
//           borderTopRightRadius: 20,
//           borderBottomRightRadius: 20,
//         }}
//       >
//         <Stack spacing={3}>
//           <Typography variant="h5" gutterBottom>
//             Getting Started
//           </Typography>
//           <ModalComponent>
//             <Button
//               variant="contained"
//               size="large"
//               startIcon={<FaGamepad />}
//               sx={{ py: 2, width: "100%" }}
//             >
//               ADD A NEW GAME
//             </Button>
//           </ModalComponent>

//           <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//             Add your favorite games and preferences to find the perfect gaming buddy!
//           </Typography>
//         </Stack>
//       </Box>

//       {/* Right Side - Content Area */}
//       <Box sx={{ flex: 1, p: 4 }}>
//         <Typography variant="h3" component="h1" gutterBottom>
//           Welcome Back, {userDetails?.name}!
//         </Typography>
//         <Typography variant="h6" color="text.secondary" gutterBottom>
//           Let's find you your next gaming buddy
//         </Typography>

//         <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 4 }}>
//           <Card sx={{ flex: 1 }} elevation={3}>
//             <CardContent sx={{ textAlign: "center", py: 3 }}>
//               <FaGamepad size={40} style={{ color: "#1976d2", marginBottom: "16px" }} />
//               <Typography variant="h6" gutterBottom>
//                 Active Games
//               </Typography>
//               <Typography variant="h2" color="primary.main">
//                 0
//               </Typography>
//             </CardContent>
//           </Card>

//           <Card sx={{ flex: 1 }} elevation={3}>
//             <CardContent sx={{ textAlign: "center", py: 3 }}>
//               <FaUsers size={40} style={{ color: "#1976d2", marginBottom: "16px" }} />
//               <Typography variant="h6" gutterBottom>
//                 Gaming Friends
//               </Typography>
//               <Typography variant="h2" color="primary.main">
//                 0
//               </Typography>
//             </CardContent>
//           </Card>

//         </Stack>
//       </Box>
//     </Box>
//   );
// }

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { FaGamepad, FaUsers, FaTrophy } from "react-icons/fa";
import ModalComponent from "@/components/home/Modal";
import { getUserAndDetails } from "./actions/getUserServerAction";

export default async function Home() {
  const { user, userDetails } = await getUserAndDetails();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: { xs: "100%", md: "calc(100vh - 64px)" },
      }}
    >
      {/* Left Side - Action Area */}
      <Box
        sx={{
          width: { xs: "100%", md: "25%" },
          p: 2,
          backgroundColor: "background.paper",
          borderRight: { xs: "none", md: "1px solid" },
          borderBottom: { xs: "1px solid", md: "none" },
          borderColor: "divider",
          borderTopRightRadius: { xs: 0, md: 20 },
          borderBottomRightRadius: { xs: 0, md: 20 },
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: { xs: "100%", md: "none" } }}>
          <Typography variant="h5" gutterBottom>
            Getting Started
          </Typography>
          <ModalComponent>
            <Button
              variant="contained"
              size="small"
              startIcon={<FaGamepad />}
              sx={{
                py: 2,
                width: "100%",
              }}
            >
              ADD A NEW GAME
            </Button>
          </ModalComponent>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 2,
              display: { xs: "none", sm: "block" },
            }}
          >
            Add your favorite games and preferences to find the perfect gaming
            buddy!
          </Typography>
        </Stack>
      </Box>

      {/* Right Side - Content Area */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          width: "100%",
        }}
      >
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Welcome Back, {userDetails?.name}!
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Let's find you your next gaming buddy
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 3 }}
          sx={{
            mt: { xs: 2, md: 4 },
          }}
        >
          <Card
            sx={{
              flex: 1,
              minWidth: { xs: "100%", sm: "200px" },
            }}
            elevation={3}
          >
            <CardContent
              sx={{
                textAlign: "center",
                py: { xs: 2, sm: 3 },
              }}
            >
              <FaGamepad
                size={32}
                style={{ color: "#00ADB5", marginBottom: "16px" }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Active Games
              </Typography>
              <Typography
                variant="h2"
                color="primary.main"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.75rem" },
                }}
              >
                0
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              flex: 1,
              minWidth: { xs: "100%", sm: "200px" },
            }}
            elevation={3}
          >
            <CardContent
              sx={{
                textAlign: "center",
                py: { xs: 2, sm: 3 },
              }}
            >
              <FaUsers
                size={32}
                style={{ color: "#00ADB5", marginBottom: "16px" }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Gaming Friends
              </Typography>
              <Typography
                variant="h2"
                color="primary.main"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.75rem" },
                }}
              >
                0
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}