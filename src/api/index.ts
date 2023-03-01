import axios from "axios"

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getNews = (category: string) =>
  API.get(`/v2/top-headlines?country=id&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`);