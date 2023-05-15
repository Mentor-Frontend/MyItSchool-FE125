import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import getProducts from './actions/getProducts';
import getProduct  from '../src/actions/getProduct'
import Layout from './components/Layout';
import Products from './components/Products';
import Promo from './components/Promo';
import ProductCard from './components/Product/ProductCard';

import './App.css';
import CartView from './components/Cart/CartView';
import AboutUs from './components/AboutUs';
import { Contact } from './components/Contact';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = {<Layout />} >
    {/* <Route index element={<Promo />} />   */}

    <Route path='/' >
     <Route index element={<Promo />} loader={getProducts}/>  
     </Route>

     <Route path="/products">
				<Route
					index
					element={<Products heading='Побалуйте себя!' />}
					loader={getProducts} 
				/>
				<Route path=":id" element={<ProductCard />} loader={getProduct}/>
			</Route>

     <Route path='/gallery' >
     <Route index element={<AboutUs />} />  
     </Route>

     <Route path='/contacts' >
     <Route index element={<Contact />} />  
     </Route>

     <Route path='/cart' >
     <Route index element={<CartView />} />  
     </Route>


  </Route>
));


function App() {
   return <RouterProvider router={router} />
}

export default App;