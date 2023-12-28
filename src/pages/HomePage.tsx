import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addUser } from "../redux/slices/userSlice";
import { useGetUserWeatherQuery } from "../redux/services/weatherApi";

const Home=()=>{
  const users = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();
  const { data, error, isLoading, isFetching } = useGetUserWeatherQuery({lat:90,lon:180,appid:"4214c6fe0c0be71f13084263dd5761b1"});

  console.log({users});
  console.log(data);
  
  
  
  const handlerClick =()=>{
    const newUser = {name:"angel"};
    dispatch(addUser(newUser));

  }
  
  return(
    <>
      <h1>home</h1>
      <ul>
        <li><Link to="/user/1">User</Link></li>
      </ul>
      <button onClick={handlerClick}>Add a user</button>
    </>
    )
}

export default Home