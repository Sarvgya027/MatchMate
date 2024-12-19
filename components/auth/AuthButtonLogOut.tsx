"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const supabase = createClient();

const AuthButtonLogOut = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      await supabase.auth.signOut();
      router.push('/');
    }
  };
  return (
    <div>
      <Button variant="text" onClick={handleLogOut} color="secondary">
        Log Out
      </Button>
    </div>
  );
};

export default AuthButtonLogOut;
