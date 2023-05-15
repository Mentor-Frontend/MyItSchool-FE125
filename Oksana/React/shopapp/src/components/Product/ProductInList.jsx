import { NavLink } from "react-router-dom";
import { useState } from "react"
import { useDispatch } from 'react-redux'
import {
   ProductTitleInList,
   ProductCardInList,
   ProductImgInList,
   ProductInfoInList,
   ProductDescInList,
   ProductPriceInList,
   Quantity,
   Counter
} from '../../styledComponents/Products';
import { addCartProduct } from '../../actions/reducer/index';
import { ButtonBuy } from "../../styledComponents/ButtonBuy";


export default function ProductInList( {product} ) {
  const dispatch = useDispatch()
	const [count, setCount] = useState(0);
  
  
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    if (!count || count < 2) return 
    setCount(count - 1)
  }
  const handleAddToCart = () => {
    if (!count) {
    } else {
      dispatch(addCartProduct({...product, count}))
    }
    setCount(count)
  }

  const handleInputChange = (e) => setCount(e.target.value)

  return (
     <>
     <ProductCardInList>

       <NavLink to={String(product.id)}>
         <ProductImgInList src={product.img} alt='' />
      </NavLink>        
       <ProductInfoInList>  
          <ProductTitleInList>{product.name}</ProductTitleInList>
          <ProductDescInList>{product.desc}</ProductDescInList>
          <ProductPriceInList>{product.price} руб.</ProductPriceInList>
       </ProductInfoInList>
  
        <Quantity>
            <Counter>
                <button onClick={handleDecrement}>-</button>
                <input type="text" value={count} onChange={handleInputChange} />
                <button onClick={handleIncrement}>+</button>
            </Counter>
        </Quantity> 

        <ButtonBuy onClick={handleAddToCart}>Купить</ButtonBuy>



     </ProductCardInList>
       
     </> 
      );
};

