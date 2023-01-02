import { ProgressBar } from "../ProgressBar"

import styles from "./styles.module.css"

interface skillProps {
  img: string
  progress: number
}

export function Skill({img, progress}: skillProps) {
  return (
    <div className={styles.skill}>
      <img src={img}/>
      <div className={styles.progress}>
        <ProgressBar progress={progress} />
        {/* <div className={styles.barBall}>
        </div> */}
      </div>
    </div>
  )
}