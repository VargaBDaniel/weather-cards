import weatherApi from "@/lib/weather-api";
import { WeatherResponse } from "@/types/weather-response";

export default async function getWeatherByCoordinates(
  latitude: number,
  longitude: number,
) {
  const response = await weatherApi.get<WeatherResponse>("/data/2.5/weather", {
    params: {
      lat: latitude,
      lon: longitude,
      units: "metric",
    },
  });

  return response.data;
}
