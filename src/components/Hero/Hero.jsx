import Styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h2 className={Styles.title}>
                Front End React Developer
                <img className={Styles.wave} src={ "/images/wave.png" } alt="wave"/>
            </h2>
            <p className={Styles.description}>
                Hi, I&apos;m Solaja Emmanuel. A passionate Front end React Developer based in Lagos, Nigeria. 📍
            </p>
            <a href="mailto:emmanueladebola98@gmail.com" className={Styles.contactBtn}>
            <button className={Styles.button}>Contact</button>
            </a>
        </div>
        <div className={Styles.heroPic}></div>
          <div className={Styles.stack}>
          <p>Tech Stack</p>
          <div className={Styles.logos}>
              <ul>
                  <li><img className={Styles.techIcon} src={ "/images/html.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/css.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/javascript.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/react.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/Git.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/reactbootstrap.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/tailwind.png" } alt="img"/></li>
                  <li><img className={Styles.techIcon} src={ "/images/github.png" } alt="img"/></li>
              </ul>
          </div>
        </div>
    </section>
  )
}
