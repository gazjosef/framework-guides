import { IconContext } from "react-icons";
import { iconConverter } from "../iconConverter";

const Future = ({ futureForecast }) => {
  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);

    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    let time = hour + ":" + min;

    return time;
  };

  // DISPLAY FUTURE DATA
  const displayHour = futureForecast.map((hour, index) => {
    return (
      <div
        key={index}
        className="hour | bg-sky-500 w-[35px] h-[70px] p-[5px] border-solid rounded-[10px] | flex flex-col items-center justify-between | text-[9px] text-white"
      >
        <div>{timeConverter(hour.dt)}</div>

        <IconContext.Provider value={{ className: "text-[30px]" }}>
          {iconConverter(hour.weather[0].icon)}
        </IconContext.Provider>

        <div>{JSON.stringify(hour.main.temp - 273.15).slice(0, 2)}&#8451;</div>
      </div>
    );
  });
  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      <div className="daily__header | ">
        <h1>Next 5 Hours</h1>
      </div>
      <div className="daily__hours | flex items-center justify-between">
        {displayHour}
      </div>
    </div>
  );
};

export default Future;
