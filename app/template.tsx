"use client";

import Header from "@/components/layout/Header/Header";
import { useUserContext } from "@/context/UserContext";

export default function Template({ children }: { children: React.ReactNode }) {

  const { user, userDetails } = useUserContext();

  return (
    <>
      {user && <Header user={user} userDetails={userDetails} />}
      {children}
    </>
  );
}
