import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContainerStyled from '../../styledComponents/Container';
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsHeading
} from '../../styledComponents/Products';
import ProductInList from '../Product/ProductInList';

import { useSelector, useDispatch } from 'react-redux';
import {  setFilter } from '../../actions/reducer/index';



const Products = ({ heading }) => {

const dispatch = useDispatch()
const data = useLoaderData();

const { filter } = useSelector((state) => state.cart);

const buttonsData = [
    { name: 'Coffee', label: 'Кофе' },
    { name: 'Sweet', label: 'Сладости' },
    { name: 'Beens', label: 'Зерна' },
    { name: '', label: 'Откл.' }
];

const onFilterSelect = (name) => {
  dispatch(setFilter(name));
};

let dataFilter=data;

if (filter!=='') {
  console.log(filter);
   dataFilter = data.filter(elem => elem.cat=== String(filter))
}

const setSchoose =(name)=>{
  if (name==filter) {
    return 'setSchoose' ;
  } else {
    return '' ;
  }
}

const buttons = buttonsData.map(({ name, label }) => {
   return (
      <a
          key={name}
          id={setSchoose(name)}
          className = 'btn-filter'
          onClick={() => onFilterSelect(name)}>
          {label}
      </a>
  )
})


  return (
    <ContainerStyled>
    <ProductsContainer>
       <ProductsHeading>{heading}</ProductsHeading>

       <div className = 'btns-filter'>
          {buttons}
        </div>

        <ProductsWrapper>
        {dataFilter.map((product, i) => <ProductInList product={product} key={`${product.id}`} />)}
      </ProductsWrapper>
     </ProductsContainer>
    </ContainerStyled>
  );
};

export default Products;