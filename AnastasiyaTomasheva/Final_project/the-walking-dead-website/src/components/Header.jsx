import React, { useState } from 'react'
import { BsShop, BsHouses } from "react-icons/bs";
import Order from './Order';
import { Link } from 'react-router-dom';
import RegAndAuth from './RegAndAuth';
import { GiEvilEyes } from "react-icons/gi";
import Menu from './Menu';


const showBasket = (props) => {

    console.log(props)
    let sum = 0
    props.basket.forEach(el => (sum += Number.parseFloat(el.price) * el.count))
    
    return(
        <>
            {props.basket.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} setCount={props.setCount} basket={props.basket} less={props.less} more={props.more} />
            ))}
            <p className='sum'>Итог: {new Intl.NumberFormat().format(sum)} руб.</p>
            <div className='basketOrder'>Оформить заказ</div>
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
    let [burger, setBurger] = useState(false)
    let [burgerOpen, setBurgerOpen] = useState(false)
    let [menu, setMenu] = useState(false)
    const screenWidth = document.documentElement.clientWidth;

    window.addEventListener('resize', () => {

    
    document.documentElement.clientWidth <= 700 ? setBurger(true) : setBurger(false);
})
    let height = 0;
    console.dir(document)
    return (
        <header>
        <div className="intro">
        <div className="video">
        <video className="video_media" src="../../video/0425.mp4" muted autoPlay={"autoplay"} preload="auto" loop poster="../../public/img/banner.jpg" >
        </video>
        </div>
        </div>
        {(burger || screenWidth <= 700) && <GiEvilEyes className='burger' onClick={() => setMenu(!menu)} />}
        {menu && <Menu setMenu={setMenu} />}
            <nav className='menu'>
            <div className='wrapperForMenu'>
                <div className='wrapperForNav'>
                <ul>
                    <li onClick={() => {window.scrollTo({top: height++, left: 0, behavior: 'smooth'})}}><Link to='/'>Главная</Link></li>
                    <li><Link to='/series'>Сериал</Link></li>
                    <li><Link to='/comics'>Комикс</Link></li>
                    <li><Link to='/video'>Видео</Link></li>
                    <li><Link to='/store'>Магазин</Link></li>
                </ul>
                </div>
                <div className='wrapperForIcons'>
                <BsHouses className={`bsHouses ${props.regAndAuth && 'active'}`} onClick={() => props.setRegAndAuth(true)} />
                    {props.regAndAuth && <RegAndAuth login={props.login} setLogin={props.setLogin} signup={props.signup} setSignup={props.setSignup} setRegAndAuth={props.setRegAndAuth}/>}
                    <div className='wrapperForNum'>
                    
                    <BsShop onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopCartButton ${cartOpen && 'active'}`}/>
                    <div className='num'>{props.num}</div>
                    </div>
                </div>
            </div>
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
