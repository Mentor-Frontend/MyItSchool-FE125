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

function App() {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:3001/characters`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  const DataLoading = withListLoading(Store);
  const [storeState, setStoreState] = useState({
    loading: false,
    items: null,
  });


  useEffect(() => {
    setStoreState({ loading: true });
    const apiUrl = `http://localhost:3001/staffs`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((item) => {
        setStoreState({ loading: false, items: item })
        
      });
  }, [setStoreState]);

  

  let [currentItems, setCurrentItems] = useState(storeState.items);
  console.log(currentItems)

  const [basket, setBasket] = useState([]);

  const addToOrder = (item) => {
    let isInArr = false;
    basket.forEach(el => {
      if(el.id === item.id)
      isInArr = true
    })
    if(!isInArr){
      basket.push(item)
      setBasket(basket)
    }
    
  }

  const deleteItem = (id) => {
    setBasket(basket.filter(el => el.id !== id))
    
  }

  const chooseCat = (category) => {
    if(category === 'all'){
      setCurrentItems(storeState.items)
      return
    }
    setCurrentItems(storeState.items.filter(el => el.category === category))
}

let [descriptionItem, setDescriptionItem] = useState(false)

let [fullItem, setFullItem] = useState({})

const onShowItem = (item) => {
  setFullItem(item)
  setDescriptionItem(!descriptionItem)
}





  return (
    <div className="wrapper">
      <Header basket={basket} onDelete={deleteItem} chooseCat={chooseCat} />
      {/* <Categories chooseCat={chooseCat} />
        <div className='App'>
          <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
            <DataLoading onShowItem={onShowItem} isLoading={storeState.loading} items={currentItems} onAdd={addToOrder} />
          </div>
        </div>

        {descriptionItem && <ShowFullItem item={fullItem} onShowItem={onShowItem} onAdd={addToOrder} />}
      <Footer /> */}
      <Routes>
        <Route path='/' element={
        <div className="wrapper">
        {/* <Header /> */}
        <MainPage />
        </div>
        } />
        <Route path='/series' element={
        <div className='App'>
          <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
          </div>
        </div>
        } />
        <Route path='/comics' element={
        <div className='App'>
          <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
          </div>
        </div>
        } />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/store' element={
        <>
        <Categories chooseCat={chooseCat} />
        <div className='App'>
          <div className='repo-container'>
            <DataLoading onShowItem={onShowItem} isLoading={storeState.loading} items={currentItems} onAdd={addToOrder} storeState={storeState} />
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
