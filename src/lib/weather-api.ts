import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default weatherApi;
