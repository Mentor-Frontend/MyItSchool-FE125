import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import Store from "./components/Store";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import NotFoundPage from "./components/NotFoundPage";
import VideoPage from "./components/VideoPage";
import ListComics from "./components/ListComics";
import BtnUp from "./components/BtnUp";
import Search from "./components/Search";


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

  const [valueSearch, setValueSearch] = useState('');

  let [currentItems, setCurrentItems] = useState();
  let [num, setNum] = useState(0);
  

  const [basket, setBasket] = useState([]);
  

  const addToOrder = (item) => {
    let isInArr = false;
    
    basket.forEach(el => {
      if(el.id === item.id)
      isInArr = true
    })
    if(!isInArr){
      setBasket([...basket, item])
      localStorage.setItem('cart', JSON.stringify(itemsStore))
      setNum(++num)
    }
    
  }

const less = (id) => {
  console.log(basket.id)
    basket.map((product) => {
      
      if(product.id === id && product.count > 1){
        setCount(--product.count)
        setNum(--num)
        
      } else return product
    })
  }

const more = (id) => {
  
    basket.map((product) => {
      
      if(product.id === id){
        setCount(++product.count)
        setNum(++num)
        
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
  setDescriptionItem(true)
}

let [regAndAuth, setRegAndAuth] = useState(false)

const [showBtn, setShowBtn] = useState(false);

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 400 ? setShowBtn(true) : setShowBtn(false);
})

const [searchField, setSearchField] = useState(false)


const [footer, setFooter] = useState(true);
const [header, setHeader] = useState(true)


  return (
    <div className="wrapper">
      {header && <Header basket={basket} onDelete={deleteItem} chooseCat={chooseCat} setRegAndAuth={setRegAndAuth} regAndAuth={regAndAuth} setCount={setCount} less={less} more={more} login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} num={num} setNum={setNum} />}
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
        <Categories chooseCat={chooseCat} searchField={searchField} setSearchField={setSearchField} valueSearch={valueSearch} setValueSearch={setValueSearch} />
        {searchField && <Search onShowItem={onShowItem} storeState={itemsStore} valueSearch={valueSearch} setValueSearch={setValueSearch} searchField={searchField} setSearchField={setSearchField} />}
        <div className='App'>
          <div className='repo-container'>
            <DataLoading error={errorStore} onShowItem={onShowItem} isLoaded={isLoadedStore} items={currentItems} itemsStore={itemsStore} onAdd={addToOrder} num={num} setNum={setNum} />
          </div>
        </div>
        </>
        } />
        <Route path='/*' element={<NotFoundPage setHeader={setHeader} setFooter={setFooter} />}  />
      </Routes>

      {descriptionItem && <ShowFullItem item={fullItem} onShowItem={onShowItem} onAdd={addToOrder} setDescriptionItem={setDescriptionItem} setFullItem={setFullItem}/>}
      {footer && <Footer />}
      {showBtn && <BtnUp showBtn={showBtn} setShowBtn={setShowBtn} />}
    </div>
  );

}

export default App;
