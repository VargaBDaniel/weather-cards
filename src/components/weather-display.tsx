import { WeatherResponse } from "@/types/weather-response";
import Image from "next/image";
import { CardContent } from "./ui/card";

type WeatherDisplayProps = {
  onClose: () => void;
  weather: WeatherResponse;
};

export const WeatherDisplay = ({ onClose, ...props }: WeatherDisplayProps) => {
  return (
    <>
      <CardContent className="flex h-full animate-fade-in flex-col p-0 opacity-0 [transform:rotateY(180deg)]">
        {/** close button */}
        <button onClick={onClose} className="absolute right-4 top-4">
          X
        </button>

        {/** header */}
        <div className="flex h-1/3 w-full  items-center justify-between bg-black/40 p-4">
          <div>
            <p className="text-lg font-semibold">
              {props.weather.name || "Unknown location name"}
            </p>
            <p className="text-sm">{props.weather.weather[0].description}</p>
          </div>
          <div className="relative size-20">
            <Image
              fill
              objectFit="contain"
              src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </div>

        {/** body */}
        <div className="flex flex-grow flex-col gap-2 p-4">
          <div className="flex gap-2">
            <h2 className="font-bold">Temperature:</h2>
            <p>{props.weather.main.temp} °C</p>
          </div>
          <div className="flex gap-2">
            <h2 className="font-bold">Feels like:</h2>
            <p>{props.weather.main.feels_like} °C</p>
          </div>
          <div className="flex gap-2">
            <h2 className="font-bold">Humidity:</h2>
            <p>{props.weather.main.humidity}%</p>
          </div>
          <div className="flex gap-2">
            <h2 className="font-bold">Pressure:</h2>
            <p>{props.weather.main.pressure} hPa</p>
          </div>
          {/* {JSON.stringify(props.weather.main, null, 2)} */}
        </div>
      </CardContent>
    </>
  );
};
