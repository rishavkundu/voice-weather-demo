// getAirPollutionData.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch air pollution data');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}

// Separate function for internal use
export async function getAirPollutionData(lat: string, lon: string) {
  const response = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch air pollution data');
  }
  return await response.json();
}
