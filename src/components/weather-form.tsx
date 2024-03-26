"use client";

import { getWeatherByCoordinates } from "@/api/weather";
import { Coordinates } from "@/types/coordinates";

import { WeatherResponse } from "@/types/weather-response";
import { useState } from "react";
import { Button, Input } from "./ui";

const inputFields: (keyof Coordinates)[] = ["lat", "lon"];

const defaultCoordiantes: Coordinates = {
  lat: 47.4979,
  lon: 19.0402,
};

type WeatherFormProps = {
  onWeatherDataFound: (weather: WeatherResponse) => void;
};

export const WeatherForm = ({ onWeatherDataFound }: WeatherFormProps) => {
  const [formData, setFormData] = useState<Coordinates>(defaultCoordiantes);
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(">> handleSubmit");

    try {
      const response = await getWeatherByCoordinates(
        Number(formData.lat),
        Number(formData.lon),
      );

      setIsShowError(false);
      onWeatherDataFound(response);
    } catch (error) {
      setIsShowError(true);
      console.log(">> error", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex h-full flex-col justify-evenly gap-2 p-4 align-middle"
      >
        <h2 className="text-2xl font-semibold">Get weather data</h2>
        <div>
          {inputFields.map((field) => (
            <div key={field} className="grid w-full max-w-sm items-center">
              <label htmlFor={field}>{field}</label>
              <Input
                key={field}
                type="number"
                step="0.01"
                id={field}
                value={formData[field]}
                onChange={handleChange}
                name={field}
              />
            </div>
          ))}
        </div>

        <Button type="submit">Find city</Button>
      </form>
      {isShowError && <p className="text-red-500">City not found</p>}
    </>
  );
};
