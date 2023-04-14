import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import Store from "./components/Store";

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
      .then((items) => {
        setStoreState({ loading: false, items: items });
      });
  }, [setStoreState]);

  
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

  return (
    <div className="wrapper">
      <Header basket={basket} onDelete={deleteItem} />
        <div className='App'>
          <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
            <DataLoading isLoading={storeState.loading} items={storeState.items} onAdd={addToOrder}/>
          </div>
        </div>
      <Footer />
      
    </div>
    
  );

  
}

export default App;
