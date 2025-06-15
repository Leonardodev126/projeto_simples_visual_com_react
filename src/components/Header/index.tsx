import styles from "./styles.module.css"

type HeaderContent = {
    content: string;
}

export function Header({ content }: HeaderContent) {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>{content}</h1>
        </header>
    )
}