import axios from "axios";
import { getStorageToken } from "./auth";

const api = axios.create({
  baseURL: "https://open-opportunity.herokuapp.com/"
});

api.interceptors.request.use(async config => {
  const token = getStorageToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
