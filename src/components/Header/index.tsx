import { Avatar } from "../Avatar"
import { Button } from "../Button"
import styles from "./styles.module.css"

export function Header() {
  return (
    <header className={styles.header}>
        <Avatar />
        <ul className={styles.ul}>
          <li className={`${styles.li} ${styles.active}`}><a>Home</a></li>
          <li className={styles.li}><a>About Me</a></li>
          <li className={styles.li}><a>Projects</a></li>
        </ul>
        <Button text="Hire me" />
    </header>
  )
}