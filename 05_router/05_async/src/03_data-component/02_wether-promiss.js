//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}
import React, { useEffect, useState } from "react";


const Weather = () => {
    const [position, setPosition] = useState({});
    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState({});
    const [wind, setWind] = useState({});

    useEffect(() => {
        new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((currentPosition) => {
              setPosition({
                longitude: currentPosition.coords.longitude,
                latitude: currentPosition.coords.latitude,
              });
              resolve(currentPosition.coords);
            });
        })
    .then(coords => {
      const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=kr`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data.weather[0]);
        setCityName(data.name);
        setWind(data.wind);
      });
  }, []);

  return (
    <>
      <h2> 오늘의 날씨</h2>
      <h4> {`경도: ${position.longitude} 위도: ${position.latitude}`}</h4>
      <h4> {`조회 도시: ${cityName}`}</h4>
      <h4> {`날씨: ${weather.main} 날씨 설명: ${weather.description}`}</h4>
      <h4> {`풍량: ${wind.deg} 풍속: ${wind.speed}`}</h4>
    </>
  );
};

export default Weather;
