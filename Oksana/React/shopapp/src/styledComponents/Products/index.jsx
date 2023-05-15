import styled from 'styled-components';
import promo from '../../img/background.jpg';


export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  gap: 10px;
  background-image: url(${promo}) ;
  background-size: cover;
  background-attachment: fixed;  
  background-repeat: no-repeat;
  top: -20px;  
  z-index :2 ;

  .btns-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
  }

.btn-filter {
    margin: 5px;
    cursor: pointer;
    color: #e7d8d8;
    text-decoration: underline;
    font-size: 1.2rem;
  }
  #setSchoose {
    font-weight: 800;
  }

  `;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  z-index :0 ;
  `;

export const ProductCardInList = styled.div`
  margin: 10px 10px 10px 10px;
  width: 310px;
  border: 0.1rem solid #42210286;
   border-radius: 20px;
  background-color: #b4a39999;
  display: grid;
  justify-items: center;
    align-items: end;
    justify-content: space-around;
    align-content: space-between;

  &:hover{
    box-shadow: 0px 10px 20px 5px rgba(252, 239, 239, 0.5);
    
  }
`;

export const ProductImgInList = styled.img`
  height: 270px;
  max-width: 300px;
  padding: 5px 5px 5px 5px ;
  border-radius: 20px;
`;

export const ProductsHeading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
  color: beige;
`;

export const ProductTitleInList = styled.h2`
  font-size: 20px;
 text-align: center;
  margin-bottom: 10px;
  color: white;
  text-transform: capitalize;

`;

export const ProductInfoInList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;

export const ProductDescInList = styled.p`
  margin-bottom: 10px;
  margin: 0 5px 0 5px;
  line-height: 100%;
  color: beige;
`;

export const ProductPriceInList = styled.p`
   font-size: 2rem;
  color: #501515;
`;


export const Quantity = styled.div`
  display: block;
  text-align: center;
`

export const Counter = styled.div`
  display: inline-block;
  box-shadow: 0 0 2px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 0.25rem;
  overflow: hidden;
  margin: 0.3rem 0 1rem 0;
  justify-content: center;  
  button {
    color: #333;
    width: 1.7rem;
  }

  input {
    min-width: 2.3rem;
  }
  
  * {
    width: 2rem;
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 0;
    text-align: center;
  }

  @media (max-width: 567px) {
    display: flex;
    flex-wrap: nowrap;
     }  

`


