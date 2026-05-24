import axios from "axios";
import { baseUrl } from "../../app/baseUrl/baseUrl";

export const authApi = axios.create({
    baseUrl: baseUrl,
    withCredentials: true //!!! Важливо для куків
})