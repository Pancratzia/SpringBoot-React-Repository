import axios from "axios";

export const loginUser = async ({ username, password }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      username,
      password,
    });
  } catch (error) {
    throw error;
  }
};
