import React from 'react'
import { Link } from 'react-router-dom'

function Menu(props) {
    return (
        <div className='wrapperForNavBurger'>
                <ul>
                    <li onClick={() => props.setMenu(false)}><Link to='/'>Главная</Link></li>
                    <li onClick={() => props.setMenu(false)}><Link to='/series'>Сериал</Link></li>
                    <li onClick={() => props.setMenu(false)}><Link to='/comics'>Комикс</Link></li>
                    <li onClick={() => props.setMenu(false)}><Link to='/video'>Видео</Link></li>
                    <li onClick={() => props.setMenu(false)}><Link to='/store'>Магазин</Link></li>
                </ul>
        </div>
    )
}

export default Menu