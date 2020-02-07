import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { BASE_URL, AUTH_TOKEN, API_KEY } from "../constants/api";

const apiBase = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Authorization: AUTH_TOKEN }
});

type TApi<R = any> = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => Promise<AxiosResponse<R>>;

const api: TApi = async (url, params = {}) =>
  await apiBase.get(url, { params: { api_key: API_KEY, ...params } });

export { api };
