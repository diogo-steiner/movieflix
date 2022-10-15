import axios from "axios";

const apiKey = "d732ba926f40e9365b369051905433b6";
const lang = "pt-Br";

export const api = axios.create({
  baseURL: " https://api.themoviedb.org/3/movie",
  timeout: 5000,
  params: {
    api_key: apiKey,
    language: lang,
  },
});
