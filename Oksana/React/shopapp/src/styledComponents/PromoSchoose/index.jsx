import styled from "styled-components";

export const PromoSchooseStyled = styled.div `
display: flex;
flex-wrap: wrap;
margin: 5px  10px 20px 5px;
padding: 10px 10px 50px 10px;

.PromoBlock {
    max-width: 400px;
    height: 100px;
    display: flex;  
    padding: 10px 0 10px 0;
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
    margin: 10px 0 10px 0;
    &:hover{
    box-shadow: 0px 10px 20px 5px rgba(168, 145, 145, 0.5);
   
  }
  
}

.PromoBlock img {
    max-width: 110px;
    border-radius:15px;
    padding:5px;
}

.PromoBlock div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 3px;
}

span:first-child {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
}

span:last-child {
   font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

.FirstImg {
 background-color:  #FFE484;
}

.SecondImg {
 background-color:  #AAFF83;
}

.ThirdImg {
 background-color:  #FF8E8E;
}

`

export const PromoSchoosesSpanStyled = styled.div `
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    max-width: 400px;
    height: 110px;
     display: flex;
     padding-left: 20px;
p {
    margin: auto;
}

`

