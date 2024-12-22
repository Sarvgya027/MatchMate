import { Database } from "./database.types";

export type UsersTable = Database["public"]["Tables"]["users"]["Row"]

export type GamePreferences = Database['public']['Tables']['game_preferences']['Row'];

export type Games = Database['public']['Tables']['games']['Row'];
