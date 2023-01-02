
import styles from "./styles.module.css"

export function Projects() {
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.content}>
        <div className={styles.project}>
          <img
            src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="Image about project"
          />
          <div className={styles.info}>
            <h3>Project 1</h3>
            <p>
              Cras ultrices pharetra porta. Aliquam erat volutpat. Sed ac
              hendrerit erat. Duis viverra vel leo eget efficitur. Nullam eu
              elit sapien. Nulla porttitor porttitor sapien dignissim rhoncus.
              Quisque eu auctor nulla. Suspendisse consequat mi augue, et rutrum
              odio imperdiet in.
            </p>
            <button className={styles.button}>More Info</button>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="Image about project"
          />
          <div className={styles.info}>
            <h3>Project 2</h3>
            <p>
              Cras ultrices pharetra porta. Aliquam erat volutpat. Sed ac
              hendrerit erat. Duis viverra vel leo eget efficitur. Nullam eu
              elit sapien. Nulla porttitor porttitor sapien dignissim rhoncus.
              Quisque eu auctor nulla. Suspendisse consequat mi augue, et rutrum
              odio imperdiet in.
            </p>
            <button className={styles.button}>More Info</button>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="Image about project"
          />
          <div className={styles.info}>
            <h3>Project 3</h3>
            <p>
              Cras ultrices pharetra porta. Aliquam erat volutpat. Sed ac
              hendrerit erat. Duis viverra vel leo eget efficitur. Nullam eu
              elit sapien. Nulla porttitor porttitor sapien dignissim rhoncus.
              Quisque eu auctor nulla. Suspendisse consequat mi augue, et rutrum
              odio imperdiet in.
            </p>
            <button className={styles.button}>More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
}