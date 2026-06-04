import axios from "axios";
import { baseUrl } from "../../app/baseUrl/baseUrl";
import { store } from "../../app/store/store";

export const authApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true //!!! Важливо для куків
})

authApi.interceptors.request.use((config) => {
    const token = store?.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });