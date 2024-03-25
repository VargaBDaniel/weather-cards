import weatherApi from "@/lib/weather-api";
import { WeatherResponse } from "@/types/weather-response";

export default async function getCityByCoordinates(
  latitude: number,
  longitude: number,
) {
  const response = await weatherApi.get<WeatherResponse>("/weather", {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });

  return response.data.name;
}
