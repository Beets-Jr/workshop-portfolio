import styles from "./styles.module.css"

export function Button({text="button"}) {
  return (
    <button className={styles.button}>{text}</button>
  )
}