'use server';

import { UsersTable } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

export async function getUserAndDetails(): Promise<{ user: User | null; userDetails: UsersTable | null }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, userDetails: null };
  }

  const { data: userDetails, error } = await supabase
    .from('users')
    .select('*')
    .eq('auth_user_id', user.id)
    .single();

  if (error) {
    console.error("Error fetching user details:", error);
    return { user, userDetails: null };
  }

  return { user, userDetails };
}