import React, { useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import {
   Quantity,
   Counter
} from '../../styledComponents/Products';
import {
  ProductTitle,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductWrapper,
} from '../../styledComponents/Product';

import { ButtonBuy } from "../../styledComponents/ButtonBuy";

import { addCartProduct } from '../../actions/reducer/index';
import ContainerStyled from "../../styledComponents/Container";

export default function ProductCard() {
  const dispatch = useDispatch()

	const { id } = useParams();
	const products = useLoaderData(id);
  let product = products[0];
  
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
      <ContainerStyled>
        <ProductWrapper>
            <ProductImg src={product.img} alt='' />
            <div> 
             <ProductInfo>  
             <ProductTitle>{product.name}</ProductTitle>
             <ProductDesc>{product.desc}</ProductDesc>
             <ProductPrice>{product.price} руб.</ProductPrice>
             </ProductInfo>
  
             <Quantity>
                <Counter>
                <button onClick={handleDecrement}>-</button>
                <input type="text" value={count} onChange={handleInputChange} />
                <button onClick={handleIncrement}>+</button>
                </Counter>
            </Quantity> 
            <ButtonBuy onClick={handleAddToCart}>Купить</ButtonBuy>
            </div>
         </ProductWrapper>
      </ContainerStyled>
    </>
  )
}

