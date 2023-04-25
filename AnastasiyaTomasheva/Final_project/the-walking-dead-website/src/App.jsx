import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import Store from "./components/Store";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import NotFoundPage from "./components/NotFoundPage";
import VideoPage from "./components/VideoPage";
import ListComics from "./components/ListComics";
import RegAndAuth from "./components/RegAndAuth";

function App() {

  let [count, setCount] = useState(1)

  let [login, setLogin] = useState(true)
  let [signup, setSignup] = useState()

  const ListLoading = withListLoading(List);

  const DataLoading = withListLoading(Store);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

const [errorStore, setErrorStore] = useState(null);
  const [isLoadedStore, setIsLoadedStore] = useState(false);
  const [itemsStore, setItemsStore] = useState([]);
  console.log(itemsStore)
  useEffect(() => {
    fetch("http://localhost:3001/staffs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoadedStore(true);
          setItemsStore(result);
        },
        (errorStore) => {
          setIsLoadedStore(true);
          setErrorStore(errorStore);
        }
      )
  }, [])

  let [currentItems, setCurrentItems] = useState();
  let [num, setNum] = useState(0);
  console.log(currentItems)

  const [basket, setBasket] = useState([]);
  console.log(basket)

  const addToOrder = (item) => {
    let isInArr = false;
    console.log(basket)
    basket.forEach(el => {
      if(el.id === item.id)
      isInArr = true
    })
    if(!isInArr){
      // basket.push(item)
      setBasket([...basket, item])
      localStorage.setItem('cart', JSON.stringify(itemsStore))
      setNum(++num)
    }
    
  }

const less = (id) => {
  console.log(basket.id)
  // if(basket.count > 1){
    basket.map((product) => {
      console.log(id)
      if(product.id === id && product.count > 1){
        // if()
        setCount(--product.count)
        setNum(--num)
        console.log(id)
      } else return product
    })
  }

const more = (id) => {
  console.log(basket.id)
  // if(basket.count > 1){
    basket.map((product) => {
      console.log(id)
      if(product.id === id){
        setCount(++product.count)
        setNum(++num)
        console.log(id)
      } else return product
    })
  }

  const deleteItem = (id) => {
    setBasket(basket.filter(el => el.id !== id))
    basket.filter(el => {
      if(el.id === id){
        setNum(num - el.count)
      }
    })
  }

  const chooseCat = (category) => {
    if(category === 'all'){
      setCurrentItems(itemsStore)
      return
    }
    setCurrentItems(itemsStore.filter(el => el.category === category))
}

let [descriptionItem, setDescriptionItem] = useState(false)

let [fullItem, setFullItem] = useState({})

const onShowItem = (item) => {
  setFullItem(item)
  setDescriptionItem(!descriptionItem)
}

let [regAndAuth, setRegAndAuth] = useState(false)


console.log(itemsStore)


  return (
    <div className="wrapper">
      <Header basket={basket} onDelete={deleteItem} chooseCat={chooseCat} setRegAndAuth={setRegAndAuth} regAndAuth={regAndAuth} setCount={setCount} less={less} more={more} login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} num={num} setNum={setNum} />
      <Routes>
        <Route path='/' element={
        <div className="wrapper">
        <MainPage />
        </div>
        } />
        <Route path='/series' element={
        <div className='App'>
          <div className='repo-container'>
            <ListLoading repos={items} error={error} isLoaded={isLoaded} items={items} />
          </div>
        </div>
        } />
        <Route path='/comics' element={
        <div className='App'>
          <div className='repo-container'>
            <ListComics repos={items} error={error} isLoaded={isLoaded} items={items} />
          </div>
        </div>
        } />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/store' element={
        <>
        <Categories chooseCat={chooseCat} />
        <div className='App'>
          <div className='repo-container'>
            <DataLoading error={errorStore} onShowItem={onShowItem} isLoaded={isLoadedStore} items={currentItems} itemsStore={itemsStore} onAdd={addToOrder} num={num} setNum={setNum} />
          </div>
        </div>
        </>
        } />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      {descriptionItem && <ShowFullItem item={fullItem} onShowItem={onShowItem} onAdd={addToOrder} />}
      <Footer />
    </div>
  );

  
}

export default App;
