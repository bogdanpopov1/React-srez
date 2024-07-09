import { Link } from "react-router-dom";
import styles from './Footer.module.css'

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <Link to={'/'} className={styles.logo}>SAFQ</Link>
                    <p>2024. Все права защищены</p>
                </div>
            </footer>
        </>
    )
}