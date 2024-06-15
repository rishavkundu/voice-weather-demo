// route.ts 5
import { NextApiRequest, NextApiResponse } from 'next';
import { getAirPollutionData } from '@/actions/getAirPollutionData';
import { getHourlyData } from '@/actions/getHourlyData';
import { getTenDayForecast } from '@/actions/getTenDayForecast';
import { getUVData } from '@/actions/getUVData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const [airPollutionData, hourlyData, tenDayForecastData, uvData] = await Promise.all([
      getAirPollutionData(lat as string, lon as string),
      getHourlyData(lat as string, lon as string),
      getTenDayForecast(lat as string, lon as string),
      getUVData(lat as string, lon as string),
    ]);
    res.status(200).json({
      airPollutionData,
      hourlyData,
      tenDayForecastData,
      uvData,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
