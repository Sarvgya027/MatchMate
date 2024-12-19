import { createClient } from "@/utils/supabase/server";

export async function getUserSession() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser()

  // console.log('lineacsasca', user);
  if(error){
    
  }

}