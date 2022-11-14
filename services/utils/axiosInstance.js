import axios from "axios";
import {API} from "./api.constant";

export const axiosInstance = axios.create({
  baseURL: API.baseUrl,
  timeout: 30000,
  headers: {'Authorization': 'Token ' + API.accessToken}
});