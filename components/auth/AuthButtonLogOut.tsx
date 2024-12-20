"use client";

import { createClient } from "@/utils/supabase/client";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const supabase = createClient();

const AuthButtonLogOut = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      await supabase.auth.signOut();
      router.push("/");
      toast.success("Logged out successfully");
    }
  };

  return (
    <MenuItem onClick={handleLogOut}>
      <ListItemIcon>
        <RiLogoutBoxRFill size={18} />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </MenuItem>
  );
};

export default AuthButtonLogOut;
