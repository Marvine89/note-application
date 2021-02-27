import axios from "axios";
import { API_URL, API_TOKEN } from "../../config/environments/env.json";

const client = axios.create({
  baseURL: API_URL || 'http://localhost:8000/api',
});

client.interceptors.request.use(async (config) => {
  if (API_TOKEN) {
    config.headers["Authorization"] = `Bearer ${API_TOKEN}`;
  }
  return await Promise.resolve(config);
});

export { client };
