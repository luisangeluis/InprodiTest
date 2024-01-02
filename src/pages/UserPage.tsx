import { useParams } from "react-router-dom";

//Redux
import { useGetUserWeatherQuery } from "../redux/services/weatherApi";
import { useAppSelector } from "../redux/hooks";

//Styles
import styles from "./UserPage.module.css";


const UserPage=()=>{
  const {id} = useParams();
  const users = useAppSelector(state=>state.user);
  const user = users.find((user)=>user.id===Number(id))
  const { data, error, isLoading } = useGetUserWeatherQuery(user);
  console.log(data);
  return(
    <section className={styles.userPage}>
      <article className={styles.userInfo}>
        <h2>User data</h2>
        {
          !user?.id ? 
            <h2>No user</h2> :
            (
              <>
                <h2>User with id: {user.id}</h2>
                <h2>Name: {user.name}</h2>
                            
              </>
            )
        }
        {
          !data ? 
            <p>No data</p> :
            (
              <>
                <p>City: {data.timezone }</p>
                <p>Temperature: {data.current.temp}</p>
                <p>Humidity: {data.current.humidity}</p>
                <p>Wind speed: {data.current.wind_speed}</p>
                <img src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`}></img>
              </>
            )
        }
      </article>
    </section>
    )
}

export default UserPage;