"use client";

import Header from "@/components/layout/Header/Header";
import { getUserSession } from "./helpers/getUserSession";
import { User } from "@supabase/supabase-js";
import { Children, useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";

export default function Template({ children }: { children: React.ReactNode }) {

  const { user } = useUserContext();
  
  return (
    <>
      {user && <Header user={user} />}
      {children}
    </>
  );
}
