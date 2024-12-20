// import AuthButtonLogOut from "@/components/auth/AuthButtonLogOut";
// import { UsersTable } from "@/types";
// import { User } from "@supabase/supabase-js";

// interface HomeProps {
//   user: User;
//   userDetails: UsersTable;
// }

// export default function Home({user, userDetails}: HomeProps ) {

//   return (
//     <>

//     </>
//   );
// }

import React from "react";
import AuthButtonLogOut from "@/components/auth/AuthButtonLogOut";
import { UsersTable } from "@/types";
import { User } from "@supabase/supabase-js";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
} from "@mui/material";
import { getUserAndDetails } from "./actions/getUserServerAction";

interface HomeProps {
  user: User;
  userDetails: UsersTable;
}

export default async function Home() {
  const { user, userDetails } = await getUserAndDetails();

  

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          src={userDetails?.avatar_url || ""}
          sx={{
            width: 120,
            height: 120,
            bgcolor: "primary.main",
            mb: 2,
          }}
        ></Avatar>

        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          color="text.primary"
        >
          Welcome, {userDetails?.user_name || userDetails?.name}!
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          Connect with fellow gamers and find your next gaming buddy
        </Typography>

        <Box sx={{ mt: 2, mb: 4 }}>
          <AuthButtonLogOut />
        </Box>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                {/* <GamesIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} /> */}
                <Typography variant="h6" gutterBottom>
                  Active Games
                </Typography>
                <Typography variant="h2" color="primary.main">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                {/* <FriendsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} /> */}
                <Typography variant="h6" gutterBottom>
                  Gaming Friends
                </Typography>
                <Typography variant="h2" color="primary.main">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                {/* <AchievementsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} /> */}
                <Typography variant="h6" gutterBottom>
                  Achievements
                </Typography>
                <Typography variant="h2" color="primary.main">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
