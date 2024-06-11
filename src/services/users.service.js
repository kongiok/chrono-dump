import { backend } from "@/utils/utils.js";

export const login = async (email, password) => {
  const response = await backend.post("/auth/login", {}, {
    auth: {
      username: email,
      password: password,
    }
  });
  return response.data.token;
}

export const registerNewUser = async ({
  name,
  email,
  password,
  phone = null,
}) => {
  const response = await backend.post("/users", { name, email, password, phone });
  return response.token;
}
