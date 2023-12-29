import { useNavigate } from "react-router-dom";
//Styles
import styles from "./UserCard.module.css";
//types
import type{ User } from "../../../redux/slices/userSlice"

const UserCard: React.FC<{ user: User }>=({ user })=>{
  const navigate = useNavigate();


    const handlerClick=()=>{
        console.log("click");
        navigate(`/user/${user.id}`);
        
    }
    
    return(
        <article className={styles.userCard}>
            <button className={styles.mainBtn} onClick={handlerClick}>

            <h2>{user.name}</h2>
            <h2>{user.lat} - {user.lon}</h2>
            </button>
        </article>
    )
}

export default UserCard;