import Styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation";
import { SlideLeft } from "../../../utility/animation";
import webdevsvg from "../../assets/webdevsvg.svg";


export const Hero = () => {
  return (
    <>
    <section className={Styles.container} id={Styles.intro}>
      <div className={Styles.content}>
          <motion.h2 variants={SlideRight (0.6)} initial="hidden" animate="visible"  className={Styles.title}>
              Front End React Developer
              <span>
                <img className={Styles.wave} src={ "/images/wave.png" } alt="wave"/>
              </span>
          </motion.h2>
          <motion.p variants={SlideRight (1.0)} initial="hidden" animate="visible" className={Styles.description}>
              Hi, I&apos;m Solaja Emmanuel. A passionate Front end React Developer based in Lagos, Nigeria. 📍
          </motion.p>
          <motion.a variants={SlideRight (1.4)} initial="hidden" animate="visible" href="mailto:emmanueladebola98@gmail.com" className={Styles.contactBtn}>
            <button className={Styles.button}>Contact</button>
          </motion.a>
      </div>
      <motion.div variants={SlideLeft (1.0)} initial="hidden" animate="visible" className={Styles.heroPic}></motion.div>
    </section>
    <div  className={Styles.stack}>
      <motion.p variants={SlideRight(0.1)} initial="hidden" whileInView="visible">Tech Stack</motion.p>
      <div className={Styles.logos}>
        <ul>
            <motion.li variants={SlideRight(0.2)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/html.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.3)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/css.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.4)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/javascript.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.5)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/react.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.6)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/Git.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.7)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/reactbootstrap.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.8)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/tailwind.png" } alt="img"/></motion.li>
            <motion.li variants={SlideRight(0.9)} initial="hidden" whileInView="visible"><img className={Styles.techIcon} src={ "/images/github.png" } alt="img"/></motion.li>
        </ul>
      </div>
    </div>
    <div className={Styles.Main} id="about">
      <section className={Styles.container}>
        <div className={Styles.content}>
          <motion.h2 variants={SlideRight(1.0)} initial="hidden" whileInView="visible" className={Styles.title}>
              <span className={Styles.sap}>Hello, I&apos;m </span>Solaja Emmanuel
          </motion.h2>
          <motion.p variants={SlideRight(1.1)} initial="hidden" whileInView="visible"  className={Styles.description}>
              I&apos;m Front-end React Developer with an interest in creating responsive user friendly websites. 
              My aim is creating high-performance user interfaces with the use of various modern web technologies,i enjoy turning ideas into reality through a neat and maintainable code.
              I am excited to bring my knowledge and experience to a team and contribute to a company&apos;s success.
          </motion.p>
          <motion.a variants={SlideRight(1.2)} initial="hidden" whileInView="visible" href="/resume.pdf" target="_blank" className={Styles.contactBtn}>
              <button className={Styles.button}>View Resume</button>
          </motion.a>
        </div>
        <motion.div variants={SlideRight(1.3)} initial="hidden" whileInView="visible" className={Styles.aPic}>
          <img src={webdevsvg} className={Styles.abtPic} />
        </motion.div>
      </section>
    </div>
    </>
    
  )
}
