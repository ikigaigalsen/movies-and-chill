import axios, { AxiosResponse } from "axios";
import { BASE_URL, AUTH_TOKEN, API_KEY } from "../constants/api";

const apiBase = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Authorization: AUTH_TOKEN }
});

type TApi = (url: string, method?: string) => Promise<AxiosResponse<any>>;

const api: TApi = async (url: string, method = "get") =>
  await apiBase.get(url, { params: { api_key: API_KEY } });
  
export { api };
