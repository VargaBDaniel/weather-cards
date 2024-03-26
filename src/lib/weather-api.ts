import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default weatherApi;
