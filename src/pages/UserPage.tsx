import { useParams } from "react-router-dom";

//Redux
import { useGetUserWeatherQuery } from "../redux/services/weatherApi";
import { useAppSelector } from "../redux/hooks";

//Styles
import styles from "./UserPage.module.css";
import DailyWeather from "../components/organisms/DailyWeather/DailyWeather";
import convertToDate from "../utils/convertToDate";


const UserPage=()=>{
  const {id} = useParams();
  const users = useAppSelector(state=>state.user);
  const user = users.find((user)=>user.id===Number(id))
  const { data, error, isLoading } = useGetUserWeatherQuery(user);
  console.log(data);
  const getData =()=>{
    if(isLoading) return <h3>Loading weather...</h3>

    if(error) {
      if("message" in error) return <h3>{error.message}</h3>
      else return <h3>An error occurred</h3>
    }

    if(data){
      return(
        <div className={styles.weatherInfo}>
          <h3 style={{color:"#ffffff"}}>{`${convertToDate(data.current.dt)}`}</h3>
          <img src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`}></img>
          <p>City: <b>{data.timezone }</b></p>
          <p>Temperature: <b>{data.current.temp}</b></p>
          <p>Humidity: <b>{data.current.humidity}%</b></p>
          <p>Wind speed: <b>{data.current.wind_speed} m/s</b></p>
          <p>Weather: <b>{data.current.weather[0].main}</b></p>
          <p>Detail weather: <b>{data.current.weather[0].description}</b></p>
        </div>
      )
    }
  }

  return(
    <section className={styles.userPage}>
      <h2 className={styles.title}>User weather</h2>
      <article className={styles.userDetail}>
        {!user?.id ? 
          <h2>User doesn't exist</h2> :
          (
            <>
              <div className={styles.userInfo}>
                <h2>User with id: {user.id}</h2>
                <h2>Name: {user.name}</h2>
              </div>
              {getData()}           
            </>
          )
        }
      </article>
      {data && <DailyWeather daily={data.daily}/>}
    </section>
  )
}

export default UserPage;