import type React from "react"
import styles from "./styles.module.css"

type Container = {
    children: React.ReactNode;
}

export function Container({ children }: Container) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}