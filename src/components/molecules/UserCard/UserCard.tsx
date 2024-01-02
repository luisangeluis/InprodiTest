import { useNavigate } from "react-router-dom";

//Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUserForm } from "../../../redux/slices/UserFormSlice";
import{ deleteUser, type User } from "../../../redux/slices/userSlice"

//Styles
import styles from "./UserCard.module.css";


const UserCard: React.FC<{ user: User }>=({ user })=>{
    const navigate = useNavigate();
    const handlerClick=()=>{
        navigate(`/user/${user.id}`);
    }
    const dispatch = useAppDispatch();
    const users = useAppSelector(state=>state.user);


    const updateUser = (userData:User,e:React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();
        dispatch(setUserForm({...userData,openForm:true}))
    }

    const deleteAUser =(userId:number,e:React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();
        const index = users.findIndex(user=>user.id ===userId);
    
        if(index)
          dispatch(deleteUser(index));
    }
        
    return(
        <article className={styles.userCard}>
                <button className={styles.mainBtn} onClick={handlerClick}>
            <div className={styles.cardBody}>
                    <p>Id: {user.id}</p>
                    <h3>{user.name}</h3>
                    <p>Lat: {user.lat}</p>
                    <p>Lon: {user.lon}</p>
            </div>
            <div className={styles.btnSection}>
                <button onClick={(e)=>updateUser(user,e)}>Update</button>
                <button onClick={(e)=>deleteAUser(user.id,e)}>Delete</button>
            </div>
                </button>
        </article>
    )
}

export default UserCard;