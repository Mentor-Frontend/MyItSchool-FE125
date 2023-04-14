import React, { useEffect, useState } from 'react'
import { BsShop } from "react-icons/bs";
import Order from './Order';

const showBasket = (props) => {
    let sum = 0
    props.basket.forEach(el => sum += Number.parseFloat(el.price))
    return(
        <>
            {props.basket.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='sum'>Итог: {new Intl.NumberFormat().format(sum)} руб.</p>
        </>
    )
}

const showNothing = (props) => {
    return(
        <div className='empty'>
            <h2>Кажется, ходячие схватили вашего посыльного. Корзина пуста</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div className='banner'></div>
            <nav className='menu'>
                <ul>
                    <li>Сериал</li>
                    <li>Комикс</li>
                    <li>Видео</li>
                    <li>Магазин</li>
                    <BsShop onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopCartButton ${cartOpen && 'active'}`}/>
                </ul>

                {cartOpen && (
                    <div className='shopCart'>
                        {props.basket.length > 0 ? 
                            showBasket(props) : showNothing()}
                    </div>
                )}
                
            </nav>
            
        </header>
    )
}
