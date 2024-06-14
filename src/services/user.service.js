import { supabase } from "../assets/utils";

export const signInWithPassword = async (
  email, password
) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}
