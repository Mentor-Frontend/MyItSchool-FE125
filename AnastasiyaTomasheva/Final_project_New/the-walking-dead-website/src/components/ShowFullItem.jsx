import React from 'react'

function ShowFullItem(props) {
    console.log(props.item)
    return (
        <div className='fullItem'>
            <div>
                <img src={props.item.img[0]} onClick={() => props.onShowItem(props.item)} />
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