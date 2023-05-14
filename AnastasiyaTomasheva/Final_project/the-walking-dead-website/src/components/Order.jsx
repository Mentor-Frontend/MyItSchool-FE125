import React from 'react'
import { BsTrash3Fill } from "react-icons/bs";
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";

export default function Order(props) {
    console.log(props)
    const cart = localStorage.getItem('cart')
    return (
        
        <div className='item'>
            <img src={props.item.img[0]} />
            <h2>{props.item.name}</h2>
            <div className='price'><b>{props.item.price} руб.</b></div>
            <div className='count'>
                <TiMinusOutline className='calc' onClick={() => props.less(props.item.id)} />
                <div className='countOfItem'>{props.item.count}</div>
                <TiPlusOutline className='calc' onClick={() => props.more(props.item.id)} />
            </div>
            
            <BsTrash3Fill className='deleteIcon' onClick={() => props.onDelete(props.item.id)} />
        </div>
        
    )
}
