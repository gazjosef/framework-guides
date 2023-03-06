import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";

const Current = ({
  city,
  country,
  icon,
  date,
  time,
  description,
  feelslike,
  temperature,
  degrees,
  wind,
  humidity,
  pressure,
}) => {
  const dateConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = a.getDate();
    let date = day + " " + month + " " + year;

    return date;
  };

  const directionConverter = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;
    direction = Math.round(direction, 0);
    direction = (direction + 8) % 8;

    return directions[direction];
  };

  return (
    <div className="current | bg-sky-500 h-[250px] w-full border-solid rounded-[10px] | overflow-hidden | text-slate-50">
      {/* MAIN WINDOW */}
      <section className="current__main | h-[170px] p-[15px]">
        <div className="main__time">
          <IconContext.Provider value={{ className: "main__icon" }}>
            {icon}
          </IconContext.Provider>

          <span>
            <h2>
              {city}, {country}
            </h2>
          </span>
        </div>

        <div className="main__description">
          <h2>
            {dateConverter(date)}
            {time}
          </h2>
          <span>
            <h2>{temperature}&#8451;</h2>
          </span>
          <h2>{description}</h2>
        </div>
      </section>
      {/* SECONDARY WINDOW */}
      <section className="current__secondary"></section>
    </div>
  );
};

export default Current;
