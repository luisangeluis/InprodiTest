import { Link } from "react-router-dom";

const UserPage=()=>{

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