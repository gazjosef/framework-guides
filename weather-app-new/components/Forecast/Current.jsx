import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";
import { iconConverter } from "../iconConverter";

const Current = ({ currentForecast, city, country }) => {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date(time);
  const options = { month: "long", day: "numeric" };

  const directionConverter = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;
    direction = Math.round(direction, 0);
    direction = (direction + 8) % 8;

    return directions[direction];
  };

  return (
    <div className="current | bg-sky-500 h-[250px] w-full border-solid rounded-[10px] overflow-hidden | text-slate-50">
      {/* MAIN WINDOW */}
      <section className="h-[170px] p-[15px] | grid grid-cols-2	">
        <div>
          <IconContext.Provider
            value={{
              className: "font-semibold	text-[100px] text-white",
            }}
          >
            {iconConverter(currentForecast.weather[0].icon)}
          </IconContext.Provider>

          <span className="text-center uppercase">
            <h2 className="font-semibold	text-[14px] text text-center">
              {city}, {country}
            </h2>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center | text-[14px] text-center">
          <h2>{time && currentDate.toLocaleTimeString()}</h2>
          <h2>{time && currentDate.toLocaleDateString(undefined, options)}</h2>
          <span className="text-[25px]">
            <h2>{Math.floor(currentForecast.main.temp)}&#8451;</h2>
          </span>
          <h2>{currentForecast.weather[0].description}</h2>
        </div>
      </section>
      {/* SECONDARY WINDOW */}
      <section className="h-[40px] border-t-[1px] border-solid | flex">
        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaWind fontSize="1.5rem" />
          </div>
          <div>
            <div>{directionConverter(currentForecast.wind.deg)} Wind</div>
            <div>{currentForecast.wind.speed} km/h</div>
          </div>
        </section>

        <section className="w-full | flex items-center justify-center">
          <section className="mr-[15px]">
            <FaThermometerHalf fontSize="1.5rem" />
          </section>
          <div>
            <div>Feels Like</div>
            <div>{currentForecast.main.feels_like}&#8451;</div>
          </div>
        </section>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex">
        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaWater fontSize="1.5rem" />
          </div>
          <div>
            <div>Humidity</div>
            <div>{currentForecast.main.humidity} %</div>
          </div>
        </section>

        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaChartLine fontSize="1.5rem" />
          </div>
          <div>
            <div>Pressure</div>
            <div>{currentForecast.main.pressure} hPa</div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Current;
