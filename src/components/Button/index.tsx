import styles from "./styles.module.css"

type Mensagem = {
    children: string;
}

export function Button({ children }: Mensagem) {
    return (
        <div className={styles.container}>
            <button className={styles.button}>{children}</button>
        </div>
    )
}

