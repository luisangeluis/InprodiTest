import { Outlet } from 'react-router-dom'
//Styles
import styles from "./MainLayout.module.css";

//Components
import Header from '../../molecules/Header/Header';
import Footer from '../../molecules/Footer/Footer';

const MainLayout = () => {
  return (
    <section className={styles.mainLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}

export default MainLayout;
