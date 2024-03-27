"use client";

import { cn } from "@/lib/utils";
import { WeatherResponse } from "@/types/weather-response";
import { Card } from "./ui";
import { WeatherDisplay } from "./weather-display";
import { WeatherForm } from "./weather-form";

type FlipCardProps = {
  children?: never;
  weatherData: WeatherResponse | null;
  setWeatherData: (weatherData: WeatherResponse) => void;
  onClose: () => void;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const FlipCard = (props: FlipCardProps) => {
  const { children, className, onClose, weatherData, setWeatherData, ...rest } =
    props;

  const isFlipped = Boolean(weatherData);

  return (
    <Card
      className={cn(
        "animate-flip h-80 w-60 overflow-hidden rounded-xl border-none bg-white shadow-lg duration-300",
        className,
        isFlipped ? "animate-flip-card" : "",
      )}
      {...rest}
    >
      {weatherData ? (
        <WeatherDisplay onClose={onClose} weather={weatherData} />
      ) : (
        <WeatherForm onWeatherDataFound={setWeatherData} />
      )}
    </Card>
  );
};
