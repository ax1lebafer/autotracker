import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "https://gps.autotracker.group/api/session",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: email,
          password: password,
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};
