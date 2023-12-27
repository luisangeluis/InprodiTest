import { Link } from "react-router-dom"

const Home=()=>{
  return(
    <>
      <h1>home</h1>
      <ul>
        <li><Link to="/user/1">User</Link></li>
      </ul>
    </>
    )
}

export default Home