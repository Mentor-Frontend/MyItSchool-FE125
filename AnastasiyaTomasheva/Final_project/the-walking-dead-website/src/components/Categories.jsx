import React from 'react'
import { useState } from 'react'

function Categories(props) {

    let [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'Все товары',
        },
        {
            key: 'tshirt',
            name: 'Футболки',
        },
        { 
            
            key: 'backpack',
            name: 'Рюкзаки',
        },
        {
            key: 'mask',
            name: 'Защитные маски',
        },
        {
            key: 'pillow',
            name: 'Подушки',
        },
        {
            key: 'canvas',
            name: 'Холсты',
        },
        {
            key: 'plaid',
            name: 'Пледы',
        },
    ])
    console.log(props)
    return (
        <>
    <div className='categories'>
        {categories.map(el => (
        <div key={el.key} onClick={() => props.chooseCat(el.key)}>{el.name}</div>
        ))}
    </div>
    <div className='store-form'>
            <form className='search-form'>
                <input 
                    type='text'
                    placeholder='Поиск товара'
                    className='search-input'
                    onChange={(event) => props.setValueSearch(event.target.value)}
                    onClick={() => props.setSearchField(true)} 
                    />
            </form>
        </div>
    </>
    )
}

export default Categories