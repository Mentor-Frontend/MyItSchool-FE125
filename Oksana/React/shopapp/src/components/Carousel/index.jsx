import React from "react";
import { Carousel } from "react-responsive-carousel";
import ContainerStyled from "../../styledComponents/Container";
import { useLoaderData } from 'react-router-dom';
import CarouselItem from "./CarouselItem";

export default function CarouselImg() {
    const data = useLoaderData();
//    console.log(data); 

   return (
   <ContainerStyled> 
    <Carousel>
        {data.map((product, i) => <CarouselItem product={product} key={`${product.id}`} />)}
    </Carousel>
    </ContainerStyled>
    );
};