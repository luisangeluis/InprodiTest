import { useParams } from "react-router-dom";

//Redux
import { useGetUserWeatherQuery } from "../redux/services/weatherApi";
import { useAppSelector } from "../redux/hooks";

//Styles
import styles from "./UserPage.module.css";
import DailyWeather from "../components/organisms/DailyWeather/DailyWeather";


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
          <img src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`}></img>
          <p>City: {data.timezone }</p>
          <p>Temperature: {data.current.temp}</p>
          <p>Humidity: {data.current.humidity}</p>
          <p>Wind speed: {data.current.wind_speed}</p>
          <p>Weather: {data.current.weather[0].main}</p>
          <p>Description: {data.current.weather[0].description}</p>
        </div>
      )
    }
  }

  return(
    <section className={styles.userPage}>
      <h2>User weather</h2>
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