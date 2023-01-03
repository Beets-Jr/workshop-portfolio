import styles from "./styles.module.css"

interface cardProps {
  image: string;
  title: string;
  description: string;
}

export function Card({image, title, description}: cardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt="image about a skill" />
      <h2>{title}</h2>
      <div className={styles.description}>{description}</div>
    </div>
  )
}