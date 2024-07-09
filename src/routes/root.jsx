import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { AppContext } from '../context/AppContext';
import { Cart } from '../Pages/Cart';

export function Root() {
    const [cartModal, setCartModal] = useState(false)
    return (
        <>
            <AppContext.Provider value={[cartModal, setCartModal]}>
                <div className="wrapper">
                    {cartModal ? <Cart /> : ''}
                    <Header />
                    <main className="main">
                        <div className="container">
                            <Outlet />
                        </div>
                    </main>
                    <Footer />
                </div>
            </AppContext.Provider>
        </>
    )
}