import React, { useEffect, useState } from 'react'
import { BsShop } from "react-icons/bs";
import Order from './Order';
import { Link } from 'react-router-dom';

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
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/series'>Сериал</Link></li>
                    <li><Link to='/comics'>Комикс</Link></li>
                    <li><Link to='/video'>Видео</Link></li>
                    <li onClick={() => props.chooseCat('all')} ><Link to='/store'>Магазин</Link></li>
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
