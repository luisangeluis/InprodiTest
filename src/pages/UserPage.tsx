import { Link } from "react-router-dom";
import { useGetUserWeatherQuery } from "../redux/services/weatherApi";

const UserPage=()=>{
  const { data, error, isLoading, isFetching } = useGetUserWeatherQuery({lat:20.6668200,lon:-103.3918200,appid:"3ee700bd71331ae8fc1b34c4ed89d489"});
    
    return(
        <>
        <h1>user page</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        </>
    )
}

export default UserPage;