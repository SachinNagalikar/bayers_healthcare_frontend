import axios from "axios";

const API_BASE_URL = "api_url"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const APIService = async (email, password) => {
    try {
    //   const response = await api.post("/login", { email, password });
    //   return response.data; // Should return token or user data
    } catch (error) {
      throw error.response ? error.response.data : { message: "Network Error" };
    }
  };
  
export default { APIService };