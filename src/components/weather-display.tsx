import { WeatherResponse } from "@/types/weather-response";
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
          <p className="text-3xl font-semibold">15°</p>
        </div>

        {/** body */}
        <div className="flex-grow p-4">placeholder</div>
      </CardContent>
    </>
  );
};
