import React from 'react'
import { BsTrash3Fill } from "react-icons/bs";

export default function Order(props) {
    return (
        <div className='item'>
            <img src={props.item.img[0]} />
            <h2>{props.item.name}</h2>
            <div className='price'><b>{props.item.price} руб.</b></div>
            <BsTrash3Fill className='deleteIcon' onClick={() => props.onDelete(props.item.id)} />
        </div>
    )
}
