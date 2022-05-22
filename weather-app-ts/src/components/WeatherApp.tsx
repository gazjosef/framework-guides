import React, { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiNightPartlyCloudy,
  WiCloud,
  WiDayCloudy,
  WiNightCloudy,
  WiRain,
  WiDayShowers,
  WiNightShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

const API_KEY = "4a64ed09d073cdac231c53e1a3b62181";

export default function WeatherApp() {
  // Get Weather State
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [feelslike, setFeelslike] = useState();
  const [icon, setIcon] = useState();
  const [temperature, setTemperature] = useState(0);
  const [time, setTime] = useState();

  const [degrees, setDegrees] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [wind, setWind] = useState();

  // Get Five Hour Forecast
  const [fiveHour, setFiveHour] = useState([]);

  useEffect(() => {
    const getWeather = async (event: any) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=${API_KEY}&units=metric`
      );

      const data = await api_call.json();

      console.log("Get Weather Data", data);

      setCity(data.name);
      setCountry(data.sys.country);

      setDate(data.dt);
      setDegrees(data.wind.deg);
      setDescription(data.weather[0].description);
      setFeelslike(data.main.feels_like);
      setHumidity(data.main.humidity);
      setIcon(iconConverter(data.weather[0].icon));
      setPressure(data.main.pressure);
      setTemperature(Math.floor(data.main.temp));
      setTime(data.dt);
      setWind(data.wind.speed);
    };
    getWeather();
  }, []);

  const iconConverter = (icon: string) => {
    const convertIcon = {
      "01d": <WiDaySunny />,
      "02d": <WiDaySunnyOvercast />,
      "03d": <WiCloud />,
      "04d": <WiDayCloudy />,
      "09d": <WiRain />,
      "10d": <WiDayShowers />,
      "11d": <WiThunderstorm />,
      "13d": <WiSnow />,
      "50d": <WiFog />,
      "01n": <WiNightClear />,
      "02n": <WiNightPartlyCloudy />,
      "03n": <WiCloud />,
      "04n": <WiNightCloudy />,
      "09n": <WiRain />,
      "10n": <WiNightShowers />,
      "11n": <WiThunderstorm />,
      "13n": <WiSnow />,
      "50n": <WiFog />,
    };
    return convertIcon[icon];
  };

  const dateConverter = (UNIX_timestamp: any) => {
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

  const timeConverter = (UNIX_timestamp: number) => {
    let a = new Date(UNIX_timestamp * 1000);

    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    // let sec = a.getSeconds();
    let time = hour + ":" + min;

    return time;
  };

  const directionConverter = (degrees: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;

    direction = Math.round(direction);

    direction = (direction + 8) % 8;

    return directions[direction];
  };
}
