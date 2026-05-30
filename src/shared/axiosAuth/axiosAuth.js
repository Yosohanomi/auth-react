import axios from "axios";
import { baseUrl } from "../../app/baseUrl/baseUrl";

export const authApi = axios.create({
    baseUrl: baseUrl,
    withCredentials: true //!!! Важливо для куків
})

auth.interceptors.request.use((config) => {
    const token = store?.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });