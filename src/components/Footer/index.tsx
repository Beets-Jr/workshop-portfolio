import { Avatar } from "../Avatar"

import { BsLinkedin, BsGithub } from "react-icons/bs"

import styles from "./styles.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.personInfo}>
        <Avatar />
        <span>&copy; Beets Jr 2023</span>
      </div>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>beetsjr@email.com</p>
        <p>+55 12 1234 - 1234</p>
      </div>
      <div className={styles.socials}>
        <a href="">
          <BsLinkedin />
        </a>
        <a href="">
          <BsGithub />
        </a>
      </div>
    </footer>
  )
}