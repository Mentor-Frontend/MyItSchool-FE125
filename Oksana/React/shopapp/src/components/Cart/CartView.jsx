import React, { useEffect } from 'react'

import { Link, NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
  getCartProducts,
  getTotalAmount,
  removeCartItem,
  getCartCount,
  increment,
  decrement
} from '../../actions/reducer/index'
import ContainerStyled from '../../styledComponents/Container'
import { Counter, Quantity } from '../../styledComponents/Products'
import { StyledTable } from '../../styledComponents/Cart/cartView'

export default function CartView() {
  const dispatch = useDispatch()
  const { cartItems, totalCount, totalAmount  } = useSelector(
    (state) => state.cart,
  )
  let totalAmountPrint=String(totalAmount.toFixed(2));


  useEffect(() => {
    dispatch(getCartProducts())
    dispatch(getTotalAmount())
    dispatch(getCartCount())

  }, [dispatch])

return (
  <ContainerStyled>
        
       <StyledTable>
          <thead>
            <tr>
              <th>Продукт</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Сумма</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {cartItems !== undefined &&
              cartItems.length > 0 &&
              cartItems.map((product, index) => {
                let summa=String((product.price*product.quantity).toFixed(2));
                
                return (
                  <tr key={product.id}>
                    <td>
                      <div>
                      <NavLink className='productName' to={'/products/'+String(product.id)}>
                         <img src={product.img} alt={product.name} />
                         <span className='productNameSpan'>{product.name}</span>
                       </NavLink>  
                       </div>
                    </td>

                    <td>
                      <Quantity>
                        <Counter>
                        <button
                          onClick={() => {
                            dispatch(decrement(product.id))
                            dispatch(getTotalAmount())
                            dispatch(getCartCount())
                           
                          }}
                        > - 
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => {
                            dispatch(increment(product.id))
                            dispatch(getTotalAmount())
                            dispatch(getCartCount())
                         
                          }}
                        > + 
                        </button>
                        </Counter>
                        </Quantity>
                    </td>
                    <td>
                      <strong>{product.price} руб.</strong>
                    </td>
                    <td>
                     <strong>{summa} руб.</strong>
                    </td>
                    <td>
                      <button
                        id='close'
                         onClick={() => {
                          dispatch(removeCartItem(product.id))
                          dispatch(getTotalAmount())
                          dispatch(getCartCount())
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>

          <tfoot>
          <tr>
              <td>ИТОГО</td>
              <td>{totalCount}</td>
              <td></td>
              <td>{totalAmountPrint} руб.</td>
              <td></td>
          </tr> 
          </tfoot>
          </StyledTable>

    </ContainerStyled> 
)}