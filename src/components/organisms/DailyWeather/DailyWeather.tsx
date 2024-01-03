import React from 'react';

//Types
import type { WeatherCharacteristicsDaily } from "../../../../types";

//Styles
import styles from "./DailyWeather.module.css";

//Components
import DailyWeatherCard from '../../molecules/DailyWeatherCard/DailyWeathterCard';

type DailyData={
    daily:WeatherCharacteristicsDaily[]
}

const DailyWeather:React.FC<DailyData>=({daily})=>{

    return(
        <section className={styles.dailyWeather}>

            {
                daily.length && daily.map((e,i)=><DailyWeatherCard key={i} temp={e.temp} humidity={e.humidity} wind_speed={e.wind_speed}
                     weather={e.weather}/> )
            }
        </section>
    )
}

export default DailyWeather;