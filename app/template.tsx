"use client";

import Header from "@/components/layout/Header/Header";
import { getUserSession } from "./helpers/getUserSession";
import { User } from "@supabase/supabase-js";
import { Children, useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const sessionUser = await getUserSession();
        setUser(sessionUser);
      } catch (error) {
        console.error("Failed to get user session:", error);
      }
    };

    getUser();
  }, []);

  return (
    <>
      {user && <Header user={user} />}
      {children}
    </>
  );
}
