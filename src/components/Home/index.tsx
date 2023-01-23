import { Card } from "../Card";

import styles from "./styles.module.css";

import pincel from "../../assets/pincel.svg";
import homeimage from "../../assets/homeimage.png"

import { BsLinkedin, BsGithub } from "react-icons/bs"


export function Home() {
  return (
    <section className={styles.section} id='home'>
      <div className={styles.content}>
        <div className={styles.titles}>
          <h1>Hello, I’m <br/> Beets Junior</h1>
          <p>I am a programmer and I have what you need to achieve success!</p>
        </div>
        <div className={styles.image}>
          <img className={styles.img} src={homeimage} />
        </div>
        <div className={styles.socials}>
          <a href="">
            <BsLinkedin />
          </a>
          <a href="">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className={styles.mainSkills}>
        <Card
          image={pincel}
          title="UI/UX Desing"
          description="Cras ultrices pharetra porta. 
                        Aliquam erat volutpat."
        />
        <Card
          image={pincel}
          title="UI/UX Desing"
          description="Cras ultrices pharetra porta. 
                        Aliquam erat volutpat."
        />
        <Card
          image={pincel}
          title="UI/UX Desing"
          description="Cras ultrices pharetra porta. 
                        Aliquam erat volutpat."
        />
      </div>
    </section>
  );
}
