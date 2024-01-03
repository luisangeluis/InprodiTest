import { WeatherCharacteristicsDaily } from "../../../types";
//Styles
import styles from "./DailyWeatherCard.module.css";

const DailyWeatherCard:React.FC<WeatherCharacteristicsDaily>=({temp,humidity,wind_speed,weather})=>{
    
    return(
        <article className={styles.dailyWeatherCard}>
            <div className={styles.dailyWeatherBody}>

                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}></img>
            </div>
            <div className={styles.footer}>
                <h3>Temperature</h3>
                <p>Max: {temp.max}</p>
                <p>Min: {temp.min}</p>
                <p>Humidity:{humidity}</p>
                <p>Wind speed{wind_speed}</p>
            </div>

        </article> 
    )
}

export default DailyWeatherCard;