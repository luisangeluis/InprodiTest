import { WeatherCharacteristicsDaily } from "../../../../types";
//Styles
import styles from "./DailyWeatherCard.module.css";

const DailyWeatherCard:React.FC<WeatherCharacteristicsDaily>=({temp,humidity,wind_speed,weather})=>{
    console.log(temp);
    
    return(
       <article className={styles.DailyWeatherCard}>
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}></img>
        <div className={styles.body}>
            <h3>Temperature</h3>
            <p>Max: {temp?.max}</p>
            <p>Min: {temp?.min}</p>
            <p>{humidity}</p>
            <p>Humidity:{humidity}</p>
            <p>Wind speed{wind_speed}</p>
        </div>

       </article> 
    )
}

export default DailyWeatherCard;