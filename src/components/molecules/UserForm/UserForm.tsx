import { SubmitHandler, useForm } from "react-hook-form";

//Redux
import { User, addUser, updateUser } from "../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUserForm } from "../../../redux/slices/UserFormSlice";

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

  const onSubmit:SubmitHandler<IFormInput> = data => {
    userForm.id ? 
      updateAUser(userForm.id,data) : 
      createUser(data);
    
    dispatch(setUserForm({openForm:false,id:0,name:"",lat:undefined,lon:undefined}))
  }
  
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
        label="Name" placeholder="Type a name" defaultValue={userForm.name && userForm.name}/>
      {errors.name && <p className={styles.alert}>{errors.name?.message}</p>}
      <InputLabelNumber id={"lat"} placeholder={"Type a latitude"} label="Latitude"
        register={register("lat", {required:"Type a value between -90 and 90",
        pattern:{value:/^(-?(90(\.0{1,6})?)|(-?([0-8]?\d(\.\d{1,6})?)))$/,message:"Type a valid value"} })} 
        defaultValue={userForm.lat && userForm.lat}/>
      {errors.lat && <p className={styles.alert}>{errors.lat?.message}</p>}
      {errors.lat?.type==="min" || errors.lat?.type==="max" && <p className={styles.alert}>{"Type a value between -90 and 90"}</p>}
      <InputLabelNumber id={"lon"} placeholder={"Type a longitud"} label="Longitude" register={register("lon",
        {required:"Type a value between -180 and 180",
        pattern:{value:/^(-?(180(\.0{1,6})?)|(-?((1[0-7]\d|\d{1,2})(\.\d{1,6})?)))$/,
        message:"Type a valid number"}})} defaultValue={userForm.lon && userForm.lon}/>
      {errors.lon && <p className={styles.alert}>{errors.lon?.message}</p>}
      {errors.lon?.type==="min" || errors.lon?.type==="max" && <p className={styles.alert}>{"Type a value between -180 and 180"}</p>}
      <input type="submit" value={userForm.id ? "Update user" : "Create user"} />
    </form>
  )
}

export default UserForm
