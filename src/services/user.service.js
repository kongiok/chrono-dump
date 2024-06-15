import { supabase } from "../assets/utils";
import { upsertUser } from "@/models/user.model.js";

export const signInWithPassword = async (
  email, password
) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}

export const createUserByEmail = async ({
  email,
  password,
  phone,
  name,
}) => {
  const { data: userSignUp, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });
  if (signUpError) {
    return { user: null, error: signUpError };
  }
  const { data: userUpsert, error: upsertError } = await upsertUser({
    id: userSignUp.user.id,
    name,
    email,
    password,
    phone,
  });
  if (upsertError) {
    return { user: null, error: upsertError };
  }
  return { userSignUp, error: null };
}
