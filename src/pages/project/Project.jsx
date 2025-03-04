import { Navbar } from "../../components/Navbar/Navbar"
import Styles from "./Project.module.css";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation";
import { SlideLeft } from "../../../utility/animation";

export const Project = () => {
  return (
   <>
   <Navbar/>
        <div className={Styles.Main}>
            <section className={Styles.container}>
              <div className={Styles.content}>
               
                <motion.p variants={SlideRight (0.8)} initial="hidden" animate="visible" className={Styles.description}>
                  I enjoy experimenting and building things that I find personally interesting or useful.
                  Every project here showcases my ability to create user experiences with modern web technologies
                  From interactive UIs to complex API integrations, my focus is on delivering scalable and maintainable code.
                  (scroll to see projects)
                </motion.p>
                <motion.a variants={SlideRight (1.0)} initial="hidden" animate="visible" href="https://github.com/Debola23" target="_blank" className={Styles.contactBtn}>
                  <button className={Styles.button}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                    </svg>
                    <p className={Styles.text}>Github</p>
                  </button>
                </motion.a>
              </div>
            <motion.div variants={SlideLeft (0.9)} initial="hidden" animate="visible" className={Styles.project}>
              <ul>
              <li className={Styles.projectList}>
                    <div className={Styles.projectBox}>
                    <img className={Styles.projectPic} src={ "/images/power.png" } alt=""/>
                    <p className={Styles.projectDescription}>
                      <div className={Styles.p1}>
                        Power Sets
                      </div>
                      <div className={Styles.p2}>
                        React  <img className={Styles.plus} src="/images/plus.png" alt="" />  Tailwind
                      </div>
                      <div className={Styles.p3}>
                        A fully functional Gym website with a modern design.
                      </div>
                      <div className={Styles.p4}>
                        <a href="https://github.com/Debola23/Power-Set" target="_blank" className={Styles.projectLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                          </svg>
                        </a>
                        <a href="https://power-set-omega.vercel.app/" target="_blank" className={Styles.projectLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                            <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                    </p>
                    </div>
                  </li>
                <li className={Styles.projectList}>
                    <div className={Styles.projectBox}>
                    <img className={Styles.projectPic} src={ "/images/coin.png" } alt=""/>
                    <p className={Styles.projectDescription}>
                      <div className={Styles.p1}>
                        Coin Tracker
                      </div>
                      <div className={Styles.p2}>
                        This is a Crypto tracker website with an Api implementation.
                      </div>
                      <div className={Styles.p3}>
                        React
                      </div>
                      <div className={Styles.p4}>
                        <a href="https://github.com/Debola23/Coins" target="_blank" className={Styles.projectLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                          </svg>
                        </a>
                        <a href="https://coins-red.vercel.app/" target="_blank" className={Styles.projectLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                            <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                    </p>
                    </div>
                  </li>
                  <li className={Styles.projectList}>
                    <div className={Styles.projectBox}>
                    <img className={Styles.projectPic} src={ "/images/riverstore.png" } alt=""/>
                    <p className={Styles.projectDescription}>
                      <div className={Styles.p1}>
                        River Store
                      </div>
                      <div className={Styles.p2}>
                        This is an E-commerce website with a modern design.
                      </div>
                      <div className={Styles.p3}>
                        React <img className={Styles.plus} src="/images/plus.png" alt="" /> React Bootstrap
                      </div>
                      <div className={Styles.p4}>
                        <a href="https://github.com/Debola23/river-store" target="_blank" className={Styles.projectLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                          </svg>
                        </a>
                        <a href="https://river-store-woad.vercel.app/" target="_blank" className={Styles.projectLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                            <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                          </svg>
                        </a>
                      </div>
                    </p>
                    </div>
                  </li>
                  <li className={Styles.projectList}>
                      <div className={Styles.projectBox}>
                      <img className={Styles.projectPic} src={ "/images/todo.png" } alt=""/>
                      <p className={Styles.projectDescription}>
                        <div className={Styles.p1}>
                          Todo List
                        </div>
                        <div className={Styles.p2}>
                          This is a Todo list app with standard functionality.
                        </div>
                        <div className={Styles.p3}>
                          React
                        </div>
                        <div className={Styles.p4}>
                          <a href="https://github.com/Debola23/todo" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                            </svg>
                          </a>
                          <a href="https://todo-five-gilt-41.vercel.app/" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                              <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                            </svg>
                          </a>
                        </div>
                      </p>
                      </div>
                    </li>
                    <li className={Styles.projectList}>
                      <div className={Styles.projectBox}>
                      <img className={Styles.projectPic} src={ "/images/homes.png" } alt=""/>
                      <p className={Styles.projectDescription}>
                        <div className={Styles.p1}>
                          Homes
                        </div>
                        <div className={Styles.p2}>
                          This is a Real-Estate site with a simple and neat user interface.
                        </div>
                        <div className={Styles.p3}>
                          React
                        </div>
                        <div className={Styles.p4}>
                          <a href="https://github.com/Debola23/real-estate" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                            </svg>
                          </a>
                          <a href="https://real-estate-mhek.vercel.app/" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                              <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                            </svg>
                          </a>
                        </div>
                      </p>
                      </div>
                    </li>
                    <li className={Styles.projectList}>
                      <div className={Styles.projectBox}>
                      <img className={Styles.projectPic} src={ "/images/photobox.png" } alt=""/>
                      <p className={Styles.projectDescription}>
                        <div className={Styles.p1}>
                          Photobox
                        </div>
                        <div className={Styles.p2}>
                          Various HD pictures in a photo gallery website. Simple and friendly user interface.
                        </div>
                        <div className={Styles.p3}>
                          React <img className={Styles.plus} src="/images/plus.png" alt="" /> Tailwind
                        </div>
                        <div className={Styles.p4}>
                          <a href="https://github.com/Debola23/photobox" target="_blank"  className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                            </svg>
                          </a>
                          <a href="https://photobox-git-main-emmanueladebola98-gmailcoms-projects.vercel.app/" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                              <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                            </svg>
                          </a>
                        </div>
                      </p>
                      </div>
                    </li>
                    <li className={Styles.projectList}>
                      <div className={Styles.projectBox}>
                      <img className={Styles.projectPic} src={ "/images/shopbox.png" } alt=""/>
                      <p className={Styles.projectDescription}>
                        <div className={Styles.p1}>
                          Shopbox
                        </div>
                        <div className={Styles.p2}>
                          Ecommerce website with a modern design
                        </div>
                        <div className={Styles.p3}>
                          Html <img className={Styles.plus} src="/images/plus.png" alt="" /> Bootstrab <img className={Styles.plus} src="/images/plus.png" alt="" /> Javascript
                        </div>
                        <div className={Styles.p4}>
                          <a href="https://github.com/Debola23/Shopbox" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                            </svg>
                          </a>
                          <a href="https://shopbox.vercel.app/" target="_blank" className={Styles.projectLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                              <path  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                            </svg>
                          </a>
                        </div>
                      </p>
                      </div>
                    </li>
              </ul>
            </motion.div>
        </section>
      </div>
   </>
  )
}
