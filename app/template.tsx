"use client";

import Header from "@/components/layout/Header/Header";
import { useUserContext } from "@/context/UserContext";
import { Box } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
  const { user, userDetails } = useUserContext();

  return (
    <>
      {user && userDetails && <Header user={user} userDetails={userDetails} />}
      <Box sx={{ marginTop: 8.2 }}>{children}</Box>
    </>
  );
}
