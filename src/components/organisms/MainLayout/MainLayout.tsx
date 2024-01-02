import { Outlet } from 'react-router-dom'
//Styles
import styles from "./MainLayout.module.css";

//Components
import Header from '../../molecules/Header/Header';

const MainLayout = () => {
  return (
    <section className={styles.mainLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </section>
  )
}

export default MainLayout;
