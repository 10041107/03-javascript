import React, { useEffect, useState } from "react";

const ResultBod = ({setImgUrl}) => {
    const [emojiname, setEmojiName] = useState('');

    const onchangeHander = (e) => {
        setEmojiName(e.target.value);
    }
    const onClickHandler = (e) =>{
        fetch("https://api.github.com/emojis")
        .then(r=>)
    }
}




const Weather2 = () => {
    const [position, setPosition] = useState({});
    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState({});
    const [wind, setWind] = useState({});

    const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc'; 

    const getPosition = () => {
        return(
            new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((currentPosition) => {
                    setPosition({
                      longitude: currentPosition.coords.longitude,
                      latitude: currentPosition.coords.latitude,
                    });
                    resolve(currentPosition.coords);
                  });
              })
        );
    }

    const getWeather = (coords) => {
        return(
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=kr`)
            .then(response => response.json())
        );
    }

    useEffect(() => {
        async function setData(){
            const currentPosition = await getPosition();
            const result = await getWeather(currentPosition);
            setCityName(result.name); 
            setWeather(result.weather[0]); 
            setWind(result.wind); 
        }
        setData();
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

export default Weather2;


switch(weather) {
    case 'Clear': imojiName = 'sunny'; break;
    case 'Rain': imojiName = 'umbrella'; break;
    case 'Thunderstom': imojiName = 'cloud_with_lightning_and_rain'; break;
    case 'Drizzle': imojiName = 'cloud_with_rain'; break;
    case 'Snow': imojiName = 'snowman'; break;
    case 'Clouds': imojiName = 'cloud'; break;
    case 'Atmosphere': imojiName = 'airplane';
}