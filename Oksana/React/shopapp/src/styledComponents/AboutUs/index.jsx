import styled from "styled-components";
import aboutImg1 from '../../img/aboutImg1.jpg';
import aboutImg2 from '../../img/aboutImg2.png';
import aboutEll2 from '../../img/aboutEll2.png';
import aboutEll4 from '../../img/aboutEll4.png';
import aboutGridImg1 from '../../img/aboutGridImg1.png';
import aboutGridImg2 from '../../img/aboutGridImg2.png';
import aboutGridImg3 from '../../img/aboutGridImg3.png';
import aboutGridImg4 from '../../img/aboutGridImg4.png';
import aboutGridImg5 from '../../img/aboutGridImg5.png';
import aboutGridImg6 from '../../img/aboutGridImg6.png';




export const AboutUsStyled = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 5px  10px 20px 5px;
    padding: 10px 10px 50px 10px;
    max-width: 300px;
    @media (max-width: 900px) {
        max-width: 600px;
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
`
    
export const AboutUsBlockStyled = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 5px  10px 20px 5px;
    padding: 10px 10px 50px 10px;
    justify-content: space-around;
    align-items: center;

    .aboutBlock {
        position: relative;
    }

    .aboutImg1 {
        background-image: url(${aboutImg1});
        width: 500px;
        height: 300px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
       } 
    .aboutImg2 {
        position: absolute;
        background-image: url(${aboutImg2});
        width: 150px;
        height: 150px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        top: -50px;
        right: -50px;
       }
    .aboutEll2 {
        position: absolute;
        background-image: url(${aboutEll2});
        width: 500px;
        height: 500px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        top: -100px;
        right: -100px;
        z-index: -1;
       }
    .aboutEll3 {
        position: absolute;
        background-image: url(${aboutEll2});
        width: 500px;
        height: 500px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        top: -100px;
        left: -150px;
        z-index: -1;
       }
    .aboutEll4 {
        position: absolute;
        background-image: url(${aboutEll4});
        width: 250px;
        height: 250px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        top: -60px;
        right: 13px;
        z-index: -1;
       }
    .aboutEll5 {
        position: absolute;
        background-image: url(${aboutEll4});
        width: 150px;
        height: 150px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        bottom: -30px;
        left: -40px;
        z-index: -1;
       }
`
   
export const AboutGridStyled = styled.div `
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 60px);
  grid-template-areas:
    "A C E" 
    "A C E"
    "A D E"
    "A D E"
    "A D E"
    "B D F"
    "B D F";
   margin-bottom: 20px;

   @media (max-width: 1200px) {
    grid-template-areas:
    "A C E" 
    "A C E"
    "A D E"
    "A D E"
    "B D F"
    "B D F"
    "B D F";
    }
    @media (max-width: 900px) {
     grid-template-columns: repeat(2, 1fr);
     grid-template-rows: repeat(12, 50px); 
        grid-template-areas:
    "A C" 
    "A C"
    "A D"
    "A D"
    "B D"
    "B D"

    "E D"
    "E F"
    "E F"
    "E F"
    "E F"
    "E F" 
    ;
    }
    
    @media (max-width: 600px) {
        gap: 10px;
        grid-template-columns: repeat(1, 1fr);
     grid-template-rows: repeat(15, 40px); 
        grid-template-areas:
    "A" 
    "A"
    "A"
    "A"
    "A"
    "A"
    "C"
    "C"
    "C"
    "C"
    "D"
    "D" 
    "D" 
    "D" 
    "D" 
    ;    
    }
   
  .aboutGridImg1 {
        background-image: url(${aboutGridImg1});
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        grid-area: A ;
        
       } 

    .aboutGridImg2 {
        background-image: url(${aboutGridImg2});
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        grid-area: B ;
             } 
    .aboutGridImg3 {
        background-image: url(${aboutGridImg3});
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        grid-area: C ;
    
    } 
    .aboutGridImg4 {
        background-image: url(${aboutGridImg4});
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
         grid-area: D ;
       } 
    .aboutGridImg5 {
        background-image: url(${aboutGridImg5});
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
           grid-area: E ;
       }   
    .aboutGridImg6 {
        background-image: url(${aboutGridImg6});
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        grid-area: F ;
       }       

`
