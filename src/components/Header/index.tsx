import { Avatar } from "../Avatar"
import { Button } from "../Button"
import styles from "./styles.module.css"

export function Header() {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <header className={styles.header}>
        <Avatar />
        <ul className={styles.ul}>
          <li onClick={() => scrollTo('home')} className={`${styles.li} ${styles.active}`}><a>Home</a></li>
          <li onClick={() => scrollTo('aboutme')} className={styles.li}><a>About Me</a></li>
          <li onClick={() => scrollTo('projects')} className={styles.li}><a>Projects</a></li>
        </ul>
        <Button text="Hire me" />
    </header>
  )
}