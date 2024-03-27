import { WeatherResponse } from "@/types/weather-response";
import { CardContent } from "./ui/card";

type WeatherDisplayProps = {
  onClose: () => void;
  weather: WeatherResponse;
};

const getBackgroundImage = (weatherCode: number) => {
  switch (weatherCode.toString()[0]) {
    case "2":
      return "/thunderstorm.jpg";
    case "3":
      return "/drizzle.jpg";
    case "5":
      return "/rain.jpg";
    case "6":
      return "/snow.jpg";
    case "8":
      return "/clear.jpg";
    case "7":
    default:
      return "/athmosphere.jpg";
  }
};

// Purposefully not using the skeleton components provided by ShadCN as to circumvent complication.
// Normally, I would opt to adding these components after the fact, when the main functionality is implemented.
export const WeatherDisplay = ({ onClose, ...props }: WeatherDisplayProps) => {
  return (
    <CardContent className="flex h-full animate-fade-in flex-col p-0 opacity-0 [transform:rotateY(180deg)]">
      {/** close button */}
      <button
        onClick={onClose}
        className="absolute right-3 top-3 z-10 size-6 rounded-full bg-brand-red/30 leading-4"
      >
        X
      </button>

      {/** header */}
      <div
        className={`pointer-events-none relative flex h-1/3 w-full items-center justify-between p-4`}
        style={{
          backgroundImage: `url('${getBackgroundImage(
            props.weather.weather[0].id,
          )}')`,
        }}
      >
        <span className="absolute left-0 top-0 h-full w-full backdrop-blur-[2px]" />

        <div className="z-10 rounded-xl bg-white/30 px-4 py-2">
          <p className="text-xl font-semibold">
            {props.weather.name || "Unknown location name"}
          </p>
          <p className="text-lg">{props.weather.weather[0].description}</p>
        </div>
      </div>

      {/** body */}
      <div className="flex flex-grow flex-col gap-2 p-4">
        <div className="flex gap-2">
          <h2 className="font-bold">Temperature:</h2>
          <p>{props.weather.main.temp.toFixed()} °C</p>
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold">Feels like:</h2>
          <p>{props.weather.main.feels_like.toFixed()} °C</p>
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold">Humidity:</h2>
          <p>{props.weather.main.humidity}%</p>
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold">Pressure:</h2>
          <p>{props.weather.main.pressure} hPa</p>
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold">Wind speed:</h2>
          <p>{props.weather.wind.speed} km/h</p>
        </div>
      </div>
    </CardContent>
  );
};
