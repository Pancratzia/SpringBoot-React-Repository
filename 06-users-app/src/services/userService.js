import axios from "axios";

const BASE_URL = "http://localhost:8080/users";

const config = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("token"),
    },
  };
};

export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const save = async ({ username, email, password }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      BASE_URL,
      { username, email, password },
      config()
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const update = async ({ id, username, email }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}`,
      { username, email },
      config()
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const remove = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await axios.delete(`${BASE_URL}/${id}`, config());
  } catch (error) {
    throw error;
  }
};
