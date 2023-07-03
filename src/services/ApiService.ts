import axios from "axios";
import { AxiosError, CanceledError, AxiosRequestConfig } from "axios";

const API_KEY = "552e494de757490c8ba6050001be4b4c";
const BASE_URL = "https://api.rawg.io/api";

export default axios.create({ baseURL: BASE_URL, params: { key: API_KEY } });

// Classes export
export { CanceledError };
export { AxiosError as ApiError };

//Types and interfaces export
export type ApiRequestConfig = AxiosRequestConfig;
