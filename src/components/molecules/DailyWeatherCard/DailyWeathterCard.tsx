import { WeatherCharacteristicsDaily } from "../../../types";
import convertToDate from "../../../utils/convertToDate";
//Styles
import styles from "./DailyWeatherCard.module.css";

const DailyWeatherCard:React.FC<WeatherCharacteristicsDaily>=({temp,humidity,wind_speed,weather,dt})=>{
    
    return(
        <article className={styles.dailyWeatherCard}>
            <div className={styles.dailyWeatherBody}>
                <h3 style={{color:"#ffffff"}}>{`${convertToDate(dt)}`}</h3>
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}></img>
            </div>
            <div className={styles.footer}>
                <h3>Temperature</h3>
                <p>Max: <b>{temp.max}</b></p>
                <p>Min: <b>{temp.min}</b></p>
                <p>Humidity: <b>{humidity}%</b></p>
                <p>Wind speed <b>{wind_speed} m/s</b></p>
            </div>

        </article> 
    )
}

export default DailyWeatherCard;