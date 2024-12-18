"use client";

import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/supabase-js";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthButton = () => {
  const handleSignIn = async ({ provider }: Provider) => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signInWithOAuth({
      provider: "github"
    })
  };

  return (
    <div>
      <button
        onClick={() => handleSignIn("github")}
        className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
      >
        <FaGithub size={20} />
        Sign in with GitHub
      </button>

      <button
        onClick={() => handleSignIn("google")}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50"
      >
        <FcGoogle size={20} />
        Sign in with Google
      </button>
    </div>
  );
};

export default AuthButton;
