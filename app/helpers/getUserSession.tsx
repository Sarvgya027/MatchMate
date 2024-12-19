"use client";

import { createClient } from "@/utils/supabase/client";

export async function getUserSession() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log("error", error);
    return null;
    // add toast
  }

  return user;
}
