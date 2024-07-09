import styles from "./Home.module.css"
import { useEffect, useState } from "react"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://646bafb47d3c1cae4ce42749.mockapi.io/products')
            .then(response => response.json())
            .then((data) => {
                setProducts(data);
            })
    })

    return (
        <>
            <div className={styles.home}>
                <div>
                    <Swiper
                        className={styles.slider}
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className={styles.banner}>
                                <img src="/images/slider/slide1.jpg" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.banner}>
                                <img src="/images/slider/slide1.jpg" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.banner}>
                                <img src="/images/slider/slide1.jpg" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <h1>Товары для дома</h1>
                <div className={styles.products}>
                    <div className={styles.products__list}>
                        {
                            products.map((product) => {
                                return (
                                    <div key={product.id} className={styles.products__item}>
                                        <div className={styles.products__item__header}>
                                            <h2>{product.name}</h2>
                                        </div>
                                        <div className={styles.products__item__footer}>
                                            <h3 className={styles.products__item__price}>1000 $</h3>
                                            <button>Добавить в корзину</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}