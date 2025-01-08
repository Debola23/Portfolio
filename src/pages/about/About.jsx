import { Navbar } from "../../components/Navbar/Navbar";
import webdevsvg from "../../assets/webdevsvg.svg";
import Styles from "./About.module.css";

export const About = () => {
  return (
    <>
      <Navbar/>
        <div className={Styles.Main}>
            <section className={Styles.container}>
              <div className={Styles.content}>
                <h2 className={Styles.title}>
                   <span className={Styles.sap}>Hello, I&apos;m </span>Solaja Emmanuel
                </h2>
                <p className={Styles.description}>
                    I&apos;m Front-end React Developer with an interest in creating responsive user friendly websites. 
                    My aim is creating high-performance user interfaces with the use of various modern web technologies,i enjoy turning ideas into reality through a neat and maintainable code.
                    I am excited to bring my knowledge and experience to a team and contribute to a company&apos;s success.
                </p>
                <a href="#" className={Styles.contactBtn}>
                <button className={Styles.button}>View Resume</button>
                </a>
              </div>
              <div className={Styles.heroPic}>
               <img src={webdevsvg} className={Styles.heroPic} />
              </div>
        </section>
      </div>
     
    </>
  )
}
