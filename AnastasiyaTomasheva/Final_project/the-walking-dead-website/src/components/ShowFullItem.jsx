import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import SliderForCart from './SliderForCart';

function ShowFullItem(props) {
    console.log(props.item.img)
    return (
        <div className='fullItem'>
            <div>
                <IoCloseCircle className='closeItem' onClick={() => props.setDescriptionItem(false)} />
                <SliderForCart item={props.item.img} setFullItem={props.setFullItem} />
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <div className='price'><b>{props.item.price} руб.</b>
                <div className='addToCart' onClick={() => props.onAdd(props.item)}>+</div>
                </div>
            </div>
        </div>
    )
}

export default ShowFullItem