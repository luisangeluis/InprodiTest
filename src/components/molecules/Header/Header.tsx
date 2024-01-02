import { Link } from "react-router-dom";

//Styles
import styles from "./Header.module.css";

const Header=()=>{

  return(
    <header className={styles.header}>
        <Link to="/" >
          <h1>Weather App</h1>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;