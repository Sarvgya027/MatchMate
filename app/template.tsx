"use client";

import Header from "@/components/layout/Header/Header";
import { useUserContext } from "@/context/UserContext";
import { Box } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
  const { user, userDetails } = useUserContext();


  const hasHeader = user && userDetails;

  return (
    <>
      {hasHeader && <Header user={user} userDetails={userDetails} />}
      <Box sx={{ marginTop: hasHeader ? 8.2 : 0 }}>{children}</Box>
    </>
  );
}
