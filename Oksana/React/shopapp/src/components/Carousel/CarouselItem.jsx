import React from "react";

export default function CarouselItem({product}) {
    console.log(product);
 
   return (
   
             <img alt="" src={product.img} />
            
   ); 
};