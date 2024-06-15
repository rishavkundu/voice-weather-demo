import { Card } from "@/components/ui/card";
import Clock from "../ui/clock";
import IconComponent from "../ui/icon-component";

interface CurrentWeatherProps {
  data?: any;
  city?: any;
}

export default function CurrentWeather({ data, city }: CurrentWeatherProps) {
  const initial = new Date();

  const dummyData = {
    dt: 1620000000,
    main: {
      temp: 15,
      temp_max: 18,
      temp_min: 12,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
      },
    ],
    sys: {
      pod: "d",
    },
  };

  const dummyCity = {
    name: "Dummy City",
    timezone: 0, // Assuming a numerical timezone offset, e.g., GMT offset in hours
  };

  return (
    <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem]">
      <div className="absolute " />
      <div>
        <div className="flex justify-between text-lg font-semibold">
          <span>{new Date(dummyData.dt * 1000).toLocaleDateString()}</span>
          <Clock initial={initial} timezone={dummyCity.timezone} />
        </div>
        <div className="text-md mt-2 flex font-bold">
          <span>{dummyCity.name}</span>
          <i>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-0.5 h-4 w-4 fill-none stroke-black dark:stroke-white"
            >
              <path
                d="M7.39993 6.32003L15.8899 3.49003C19.6999 2.22003 21.7699 4.30003 20.5099 8.11003L17.6799 16.6C15.7799 22.31 12.6599 22.31 10.7599 16.6L9.91993 14.08L7.39993 13.24C1.68993 11.34 1.68993 8.23003 7.39993 6.32003Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1101 13.6501L13.6901 10.0601"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="flex justify-center py-7 text-8xl font-bold md:py-10">
        {Math.round(dummyData.main.temp)}&deg;
      </div>
      <div>
        <IconComponent
          weatherCode={dummyData.weather[0].id}
          x={dummyData.sys.pod}
          className="h-9 w-9"
        />
        <div className="font-semibold">{dummyData.weather[0].main}</div>
        <div className="flex gap-2 dark:text-neutral-500">
          <span>H: {Math.round(dummyData.main.temp_max)}&deg;</span>
          <span>L: {Math.round(dummyData.main.temp_min)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}
