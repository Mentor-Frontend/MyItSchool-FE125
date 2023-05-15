import styled from 'styled-components';
import productBack from '../../img/productBack.jpg'

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  background-image: url(${productBack}) ;
  background-size: cover;
  background-attachment: fixed;  
  background-repeat: no-repeat;
  align-content: center;
  align-items: center;
  padding: 50px 10px 50px 10px;
  `;

export const ProductImg = styled.img`
  display: block;
  max-width: 450px;
  padding: 5px 5px 5px 5px ;
  border-radius: 20px;
  @media (max-width: 570px) {
    max-width: 300px;
  }  
`;

export const ProductHeading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
  color: beige;
`;

export const ProductTitle = styled.h2`
  font-size: 20px;
 text-align: center;
  margin-bottom: 10px;
  color: white;
  text-transform: capitalize;

`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 10px;
  margin: 0 5px 0 5px;
  line-height: 100%;
  color: beige;
`;

export const ProductPrice = styled.p`
   font-size: 2rem;
  color: #501515;
`;