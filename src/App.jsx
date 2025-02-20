import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
      <div className={styles.Body}>
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default App
