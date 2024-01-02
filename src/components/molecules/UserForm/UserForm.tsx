import { SubmitHandler, useForm } from "react-hook-form";

//Redux
import { User, addUser, deleteUser, updateUser } from "../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

//Styles
import styles from "./UserForm.module.css";

//Components
import InputLabelNumber from "../InputLabelNumber/InputLabelNumber"
import InputLabelText from "../InputLabelText/InputLabelText"

interface IFormInput {
  name: string;
  lat: number;
  lon: number;
}

const UserForm = () => {
  const dispatch=useAppDispatch();
  const users = useAppSelector(state=>state.user);
  const userForm = useAppSelector(state=>state.userForm);
  const {register,handleSubmit,formState:{errors}} = useForm<IFormInput>({
    defaultValues:{
      name: userForm.name ? userForm.name : "",
      lat: userForm.lat ? userForm.lat : undefined,
      lon: userForm.lon ? userForm.lon : undefined
    }
  });

  const onSubmit:SubmitHandler<IFormInput> = data => userForm.id ? 
    updateAUser(userForm.id,data):  createUser(data);
  
  const createUser =(data:Partial<User>)=>{
    const newUserId = users[users.length-1].id+1;
    const {name,lat,lon} = data;
    const newUser = {id:newUserId,name,lat,lon};
    dispatch(addUser(newUser));
  }
  
  const updateAUser =(userId:number,newData:Partial<User>)=>{
    const index = users.findIndex((user:User)=>user.id===userId);
    
    if(index)
      dispatch(updateUser({index,newData}));
  }
  
  
  return (
    <form className={styles.userForm} onSubmit={handleSubmit(onSubmit)}> 
      <InputLabelText register={register("name",{required:"Type a name",
        maxLength:{value:150,message:"Name must have less than 150 characters"}})} id="name" 
        label="name" placeholder="Type a name" defaultValue={userForm.name && userForm.name}/>
      {errors.name && errors.name?.message}
      <InputLabelNumber id={"lat"} placeholder={"Type a latitude"} label="lat" register={register("lat",
        {required:"Type a value between -90 and 90",min:-90, max:90})} defaultValue={userForm.lat && userForm.lat}/>
      {errors.lat && <p>{errors.lat?.message}</p>}
      {errors.lat?.type==="min" || errors.lat?.type==="max" && <p>{"Type a value between -90 and 90"}</p>}
      <InputLabelNumber id={"lon"} placeholder={"Type a longitud"} label="lon" register={register("lon",
      {required:"Type a value between -180 and 180",min:-180, max:180})} defaultValue={userForm.lon && userForm.lon}/>
      {errors.lon && <p>{errors.lon?.message}</p>}
      {errors.lon?.type==="min" || errors.lon?.type==="max" && <p>{"Type a value between -180 and 180"}</p>}
      <input type="submit" value="New user"/>
    </form>
  )
}

export default UserForm
