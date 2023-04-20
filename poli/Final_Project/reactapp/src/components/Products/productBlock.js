import React from "react";
import { Link } from "react-router-dom";
import ProductWrapper from "../../styledComponents/Products/productWrapper";
import ProductImage from "../../styledComponents/Products/productImage";
import TitleAndPrice from "../../styledComponents/Products/titleAndPrice";
import Title from "../../styledComponents/Products/title";
import Price from "../../styledComponents/Products/price";
import ButtonWrapper from "../../styledComponents/Products/buttonWrapper";
import ViewMoreButton from "../../styledComponents/Products/viewMoreButton";

export default function ProductBlock({ title, price, image, id }) {
  return (
    <ProductWrapper>
      <div>
        <ProductImage src={image} alt="furniture" />

        <TitleAndPrice>
          <Title className="title">{title}</Title>
          <Price className="price">${price}</Price>
        </TitleAndPrice>

        <ButtonWrapper>
          <Link to={`/products/${id}`}>
            <ViewMoreButton>VIEW MORE</ViewMoreButton>
          </Link>
        </ButtonWrapper>
      </div>
    </ProductWrapper>
  );
}
