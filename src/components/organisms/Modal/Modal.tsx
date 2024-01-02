import { ReactNode } from "react";
import styles from "./Modal.module.css";

type Props={
  children:ReactNode;
  // setStateFunction:React.Dispatch<React.SetStateAction<boolean>>
  setStateFunction:(value:boolean)=>void
}

const Modal: React.FC<Props>=({children, setStateFunction})=>{
  
  return(
    <article className={styles.modal }>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button onClick={()=>setStateFunction(false)}>Cerrar</button>
        </div>

        {children}
      </div>
    </article>
  )
}

export default Modal;