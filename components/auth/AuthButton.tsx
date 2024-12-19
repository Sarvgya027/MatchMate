"use client";

import { createClient } from "@/utils/supabase/client";
import { Button, Divider, Stack } from "@mui/material";
import { Provider } from "@supabase/supabase-js";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthButton = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if(error){
      console.log(error.message)
    }

    
  };

  return (
    <Stack spacing={3}>
       <Button
            onClick={() => handleSignIn("github")}
            variant="contained"
            startIcon={<FaGithub />}
            fullWidth
            color="primary"
            sx={{
              "&:hover": {
                bgcolor: "secondary.light",
              },
            }}
          >
            Continue with GitHub
          </Button>

          <Divider>or</Divider>

          <Button
            onClick={() => handleSignIn("google")}
            variant="contained"
            startIcon={<FcGoogle />}
            fullWidth
            sx={{
              bgcolor: "background.paper",
              color: "text.primary",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Continue with Google
          </Button>
    </Stack>
  );
};

export default AuthButton;
