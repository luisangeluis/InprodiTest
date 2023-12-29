//Styles
import styles from "./UserCard.module.css";
//types
import type{ User } from "../../../redux/slices/userSlice"


const UserCard: React.FC<{ user: User }>=({ user })=>{
    
    return(
        <article className={styles.userCard}>
            <h2>{user.name}</h2>
            <h2>{user.lat} - {user.lon}</h2>
        </article>
    )
}

export default UserCard;