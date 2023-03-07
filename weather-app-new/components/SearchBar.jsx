import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    console.log("Get Weather Data", data);
    console.log("clicked");

    setData(data);

    setCity(data.name);
    setCountry(data.sys.country);

    const api_call2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
    );
    const fiveHourData = await api_call2.json();
    console.log("Get Hour Data", fiveHourData.list.slice(0, 5));

    setFiveHour(fiveHourData.list.slice(0, 5));
  };

  return (
    <form
      onSubmit={getWeather}
      className="weather-app__title | bg-sky-500 border-2 border-solid rounded-[5px] w-full | flex items-center overflow-hidden"
    >
      <input
        type="text"
        name="city"
        placeholder="E.g Sydney.."
        className="w-full p-[6px]"
      />
      <input
        type="text"
        name="country"
        placeholder="E.g AU.."
        className="w-full p-[6px]"
      />
      <button type="submit">
        <IconContext.Provider
          value={{ className: "h-[15px] w-[25px] text-white" }}
        >
          <FaSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default SearchBar;
