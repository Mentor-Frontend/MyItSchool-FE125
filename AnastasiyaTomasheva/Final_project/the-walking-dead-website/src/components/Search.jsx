import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoCloseCircle } from "react-icons/io5";

function Search(props) {

    const [itemsSearch, setItemsSearch] = useState([])
    const getItems = () => {
        axios.get('http://localhost:3001/staffs')
        .then((response) => {
            setItemsSearch(response.data)
        })
    }
    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className='wrapper-for-search'>
        <IoCloseCircle className='closeItem' onClick={() => props.setSearchField(false)} />
            <div className='search-head'>
            {
                itemsSearch.filter(item => item.name.toLowerCase().includes(props.valueSearch.toLowerCase())).map((item, id) => {
                    return (
        <div key={id} className='item'>
            <img src={item.img[0]} onClick={() => props.onShowItem(item)} />
            <h2>{item.name}</h2>
            <b>{item.price} руб.</b>
            </div>
        
    )
            })
            }
            </div>
        </div>
    )
}

export default Search