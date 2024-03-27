"use client";

import { FlipCard } from "@/components/flip-card";
import { Button } from "@/components/ui";
import { WeatherResponse } from "@/types/weather-response";
import { useState } from "react";

export default function Home() {
  const [weatherCards, setWeatherCards] = useState<(WeatherResponse | null)[]>(
    [],
  );

  const setWeatherData = (
    weatherData: WeatherResponse,
    indexOfCard: number,
  ) => {
    setWeatherCards((prev) => {
      const newCards = [...prev];
      newCards[indexOfCard] = weatherData;
      return newCards;
    });
  };

  const handleAddCard = () => {
    setWeatherCards((prev) => [...prev, null]);
  };

  const handleRemoveCard = (index: number) => {
    setWeatherCards((prev) => {
      const newCards = [...prev];
      newCards.splice(index, 1);
      return newCards;
    });
  };

  return (
    <main className="flex min-h-screen flex-wrap gap-5 bg-black p-16">
      {weatherCards.map((weatherData, index) => (
        <FlipCard
          key={index}
          weatherData={weatherData}
          setWeatherData={(data) => setWeatherData(data, index)}
          onClose={() => handleRemoveCard(index)}
        />
      ))}
      <Button
        className="h-80 w-60 rounded-xl text-8xl text-white/80"
        onClick={handleAddCard}
      >
        +
      </Button>
    </main>
  );
}
