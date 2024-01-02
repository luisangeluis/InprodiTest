//Redux
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUserForm } from "../redux/slices/UserFormSlice";
// import { resetUsers } from "../redux/slices/userSlice";
//Styles
import styles from "./HomePage.module.css";

//Componentes
import UserCard from "../components/molecules/UserCard/UserCard";
import Modal from "../components/organisms/Modal/Modal";
import UserForm from "../components/molecules/UserForm/UserForm";
// import { useEffect } from "react";

const Home=()=>{
  const users = useAppSelector(state=>state.user);
  const userForm = useAppSelector(state=>state.userForm);
  const dispatch = useAppDispatch();

  const setOpenForm =(value:boolean)=> dispatch(setUserForm({openForm:value,name:"",lat:undefined,lon:undefined}))
  
  // useEffect(()=>{
  //   dispatch(resetUsers());
  // },[])

  return(
    <section className={styles.home}>
      <h2>Users</h2>
      <section className={styles.usersSection}>
        {
          users.map((user,i)=><UserCard user={user} key={i}/>)
        }
      </section>
      <div className={styles.btnSection}>
        <button className={styles.btnNewUser} onClick={()=>setOpenForm(true)}>New user</button>
      </div>
      {
        userForm.openForm &&
          <Modal setStateFunction={setOpenForm}>
            <UserForm />
          </Modal>
      }
    </section>
    )
}

export default Home