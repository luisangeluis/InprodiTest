//Styles
import styles from "./InputLabelText.module.css";

//Components

type InputLabelTextAttributes={
  register:any;
  label:string;
  id:string;
  placeholder:string
  defaultValue:string
}

// const InputLabelText:React.FC<InputLabelTextAttributes> = ({htmlFor,id,title,placeholder,required}) => {
const InputLabelText:React.FC<InputLabelTextAttributes> = ({register,label,id,placeholder}) => {
  return (
    <section className={styles.inputSection}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input type="text" id={id} placeholder={placeholder} {...register}/>
    </section>
  )
}

export default InputLabelText
