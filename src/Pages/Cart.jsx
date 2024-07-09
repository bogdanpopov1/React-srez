import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styles from './Cart.module.css'

export function Cart() {

    const [cartModal, setCartModal] = useContext(AppContext)

    return (
        <>
            <div className={`${styles.cart} cartModal`} onClick={(event) => {
                if (!event.target.closest('.cartModal__content'))
                    setCartModal(false)
            }}>

                <div className={`${styles.cartModal} cartModal__content`}>
                    <div className={styles.cartModalHeader}>
                        <h2>Корзина</h2>
                        <button onClick={() => setCartModal(false)}>⨉</button>
                    </div>

                    <div className={styles.cartModalList}>
                        <div className={styles.cartModalItem}>
                            <div className={styles.cartModalItemContent}>
                                <h3>Товар 1</h3>
                                <p>50$</p>
                            </div>
                            <button>⨉</button>
                        </div>
                        <div className={styles.cartModalItem}>
                            <div className={styles.cartModalItemContent}>
                                <h3>Товар 2</h3>
                                <p>50$</p>
                            </div>
                            <button>⨉</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}