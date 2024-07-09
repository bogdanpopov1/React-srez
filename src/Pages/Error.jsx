import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export function Error() {
    return (
        <>
            <div className={styles.error}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.description}>Страница не найдена :(</p>
                <Link to={'/'}>
                    <button className={styles.btn}>Перейти на главную страницу</button>
                </Link>
            </div>
        </>
    )
}