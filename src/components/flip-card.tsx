"use client";

import { cn } from "@/lib/utils";
import { WeatherResponse } from "@/types/weather-response";
import { useState } from "react";
import { Card } from "./ui";
import { WeatherDisplay } from "./weather-display";
import { WeatherForm } from "./weather-form";

type FlipCardProps = {
  children?: never;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const FlipCard = (props: FlipCardProps) => {
  const { children, className, ...rest } = props;

  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  const isFlipped = Boolean(weatherData);

  return (
    <Card
      className={cn(
        "animate-flip h-96 w-72 rounded-lg bg-white shadow-lg duration-300",
        className,
        isFlipped ? "animate-flip-card" : "",
      )}
      {...rest}
    >
      {weatherData ? (
        <WeatherDisplay
          onClose={() => setWeatherData(null)}
          weather={weatherData}
        />
      ) : (
        <WeatherForm onWeatherDataFound={setWeatherData} />
      )}
    </Card>
  );
};
