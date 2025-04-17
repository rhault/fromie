import axios, { InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL:process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  if(config.method == "post"){
    if(config.data){
      config.data['app_key'] = process.env.OMIE_API_KEY;
      config.data['app_secret'] = process.env.OMIE_API_SECRET;
    }
  }
  return config
})
