import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addUser } from "../redux/slices/userSlice";

const Home=()=>{
  const users = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();
  console.log({users});

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