"use client";
import { UsersTable } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface UserContextProps {
  user: User | null;
  userDetails: UsersTable | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setUserDetails: React.Dispatch<React.SetStateAction<UsersTable | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);
const supabase = createClient();

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UsersTable | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(data.session?.user || null);

        if (data?.session?.user) {
          const { data: userDetails, error: userDetailsError } = await supabase
            .from("users")
            .select("*")
            .eq("email", data.session.user.email)
            .single();
          if (userDetailsError) throw userDetailsError;
          setUserDetails(userDetails);
        }
      } catch (error) {
        console.error("Error fetching user session:", error);
        toast.error("Error fetching user session");
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user || null);
        // setUserDetails(userDetails || null);
        if (session?.user) {
          const { data: userDetails, error: userDetailsError } = await supabase
            .from("users")
            .select("*")
            .eq("email", session.user.email) // Fetch user by email or other unique field
            .single();
          if (userDetailsError) throw userDetailsError;
          setUserDetails(userDetails);
          
        } else {
          setUserDetails(null); // Clear userDetails when the user logs out
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ user, userDetails, setUser, setUserDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
