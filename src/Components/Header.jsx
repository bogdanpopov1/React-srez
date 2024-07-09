import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import styles from "./Header.module.css"

export function Header() {
    const [cartModal, setCartModal] = useContext(AppContext)
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.row}>
                        <Link to={'/'} className={styles.logo}>SAFQ</Link>
                        <ul className={styles.menu}>
                            <li><Link to={'/'}>Главная</Link></li>
                            <li><Link to={'/catalog'}>Каталог</Link></li>
                        </ul>
                        <button onClick={() => setCartModal(true)}>Корзина</button>
                    </div>
                </div>
            </header>
        </>
    )
}