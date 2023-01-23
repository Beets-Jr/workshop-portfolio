import { Avatar } from "../Avatar"
import { Skill } from "../Skill"

import javascript from "../../assets/javascript.svg"
import css from "../../assets/css.svg"
import react from "../../assets/react.svg"
import html from "../../assets/html.svg"


import styles from "./styles.module.css"

export function AboutMe() {
  return (
    <section className={styles.section} id='aboutme'>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <Avatar width="165px" height="165px"/>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            Hi, my name is Beets and I enjoy creating things that live on the Internet. 
            My interest in web development started when I joined Beets Jr - where I developed 
            important skills in software building and communication.
          </div>
          <div className={styles.skills}>
            <Skill img={html} progress={90} />
            <Skill img={css} progress={50} />
            <Skill img={javascript} progress={80} />
            <Skill img={react} progress={60} />
          </div>
        </div>
      </div>
    </section>
  )
}