import promo from '../../img/promo.jpg';
import Image from '../../components/Image';
import ContainerStyled from "../../styledComponents/Container";
import { PromoStyled,PromoSpan,PromoDiv } from '../../styledComponents/Promo';
import styled, { keyframes } from 'styled-components';
import { rotateInUpRight } from 'react-animations';
import PromoSchoose from '../PromoSchoose';
import { useLoaderData } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
const height='600px';
const RotateInUpRight = styled.div`animation: 2s ${keyframes`${rotateInUpRight}`}`;

export default function Promo() {
    const data = useLoaderData();
    const handleDragStart = (e) => e.preventDefault();
    // const handleClickImg = (id) =>   

    const items = [];
    data.map((product, i) => {
        items.push(<NavLink to={'/products/'+String(product.id)}><img style={{ height: "200px", width: "300px", cursor:'pointer' }} className="item" src={product.img} onDragStart={handleDragStart} role="presentation" /></NavLink>)
    })

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        900: { items: 3 },
        1200: { items: 4 },
    };
    
    return (
        <>
         <ContainerStyled>
            <PromoStyled>
                <Image sendUrl={promo} height={height} />
                <RotateInUpRight>
                <PromoDiv><PromoSpan>Незабываемый вкус и прекрасное место</PromoSpan> </PromoDiv>
                </RotateInUpRight>
            </PromoStyled>  
            
            <PromoSchoose />  
            
            <AliceCarousel 
             style={{ backgroundColor: '#efdbcf',  textAlign: 'center' }}
             autoPlayInterval={2000}
             autoPlayDirection="rtl"
             autoPlay={true}
             responsive={responsive} 
             showSlideInfo='true'
             mouseTracking
             items={items} 
             controlsStrategy="alternate" />
                      
         </ContainerStyled>
        </> 
    );
}