import styles from "./styles.module.css";

export function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Projeto 1</h2>
        <p>Descrição do Projeto 1</p>
      </div>

      <div className={styles.box}>
        <h2>Projeto 2</h2>
        <p>Descrição do Projeto 2</p>
      </div>

      <div className={styles.box}>
        <h2>Projeto 3</h2>
        <p>Descrição do Projeto 3</p>
      </div>
    </div>
  );
}
