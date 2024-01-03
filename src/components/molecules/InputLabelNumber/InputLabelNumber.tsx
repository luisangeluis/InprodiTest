
//Styles 
import styles from "./InputLabelNumber.module.css";

type InputLabelNumberAttributes={
  register:any;
  label:string;
  id:string;
  placeholder:string
  defaultValue:number
}


const InputLabelNumber:React.FC<InputLabelNumberAttributes> = ({register,label,id,placeholder}) => {
  return (
    <section className={styles.inputSection} >
      <label htmlFor={id}>{label}</label>
      <br />
      <input type="text" id={id} placeholder={placeholder} {...register}/>
    </section>
  )
}

export default InputLabelNumber
