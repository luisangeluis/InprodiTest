//Redux
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addUser } from "../redux/slices/userSlice";

//Styles
import styles from "./HomePage.module.css";

//Componentes
import UserCard from "../components/molecules/UserCard/UserCard";

const Home=()=>{
  const users = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();
  // const { data, error, isLoading, isFetching } = useGetUserWeatherQuery({lat:20.6668200,lon:-103.3918200,appid:"3ee700bd71331ae8fc1b34c4ed89d489"});

  console.log({users});

  
  
  
  
  const handlerClick =()=>{
    const newUser = {name:"angel"};
    dispatch(addUser(newUser));

  }
  
  return(
    <section className={styles.home}>
      <h1>home</h1>

      <section className={styles.userSection}>
        {
          users.map((user,i)=><UserCard user={user} key={i}/>)
        }
      </section>
      {/* <ul>
        <li><Link to="/user/1">User</Link></li>
      </ul>
      <button onClick={handlerClick}>Add a user</button> */}
    </section>
    )
}

export default Home