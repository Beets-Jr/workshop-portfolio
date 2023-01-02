import styles from "./styles.module.css"

interface progressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: progressBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.filler} style={{width: `${progress}%`}}>
        <span className={styles.label}>{`${progress}%`}</span>
      </div>
    </div>
  )
}