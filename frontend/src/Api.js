import axios from "axios";
import { auth } from "./firebase";

const API = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL });

API.interceptors.request.use(async (config) => {
  if (auth.currentUser) {
    const token = await auth.currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;


