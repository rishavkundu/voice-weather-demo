import CurrentWeather from "@/components/widgets/CurrentWeather";
import HourlyForecast from "@/components/widgets/HourlyForecast";
import Map from "@/components/widgets/Map";
import OtherLargeCities from "@/components/widgets/OtherLargeCities";
import TenDayForecast from "@/components/widgets/TenDayForecast";
import WeatherWidgets from "@/components/widgets/WeatherWidgets";
import { DEFAULT_LOCATION } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${DEFAULT_LOCATION.city} - Weather Forecast`,
  description: `${DEFAULT_LOCATION.city} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`,
};

export default function Home() {
  const dummyData = {
    main: {
      temp: 15,
      feels_like: 14,
      humidity: 74,
      pressure: 1013,
    },
    wind: {
      speed: 5,
      deg: 180,
    },
    rain: {
      "1h": 0.1,
    },
    visibility: 10000,
  };

  const dummyAirQuality = {
    main: {
      aqi: 1,
    },
  };

  const dummyUVIndexForToday = 5;

  const dummyCity = {
    name: "Dummy City",
    timezone: 0,
    sunrise: 1620000000,
    sunset: 1620043200,
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
          <CurrentWeather data={dummyData} city={dummyCity} />
          <TenDayForecast data={{ list: [dummyData], city: dummyCity }} />
        </div>
        <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <WeatherWidgets
            data={dummyData}
            city={dummyCity}
            airQuality={dummyAirQuality}
            uvIndexForToday={dummyUVIndexForToday}
          />
          <HourlyForecast data={[dummyData]} />
          <Map />
          <OtherLargeCities />
        </section>
      </div>
    </>
  );
}
