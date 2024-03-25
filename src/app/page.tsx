"use client";

import getCityByCoordinates from "@/api/weather/getCityByCoordinates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coordinates } from "@/types/coordinates";
import { useState } from "react";

const inputFields: (keyof Coordinates)[] = ["lat", "lon"];

const defaultCoordiantes: Coordinates = {
  lat: 47.4979,
  lon: 19.0402,
};

export default function Home() {
  const [formData, setFormData] = useState<Coordinates>(defaultCoordiantes);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(">> handleSubmit");

    const response = await getCityByCoordinates(
      Number(formData.lon),
      Number(formData.lat),
    );

    console.log("response", response);
  };

  return (
    <main className="grid min-h-screen place-items-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 align-middle"
      >
        {inputFields.map((field) => (
          <div key={field} className="grid w-full max-w-sm items-center">
            <label htmlFor={field} className="text-white">
              {field}
            </label>
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

        <Button type="submit">Find city</Button>
      </form>
    </main>
  );
}
