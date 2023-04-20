import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

import LoadingContainer from "../../styledComponents/ProductPage/LoadingContainer";
import LoadingSpin from "../../styledComponents/ProductPage/LoadingSpin";
import ProductContainer from "../../styledComponents/ProductPage/productContainer";
import LeftPartContainer from "../../styledComponents/ProductPage/LeftPart/LeftPartContainer";
import RightPartContainer from "../../styledComponents/ProductPage/RightPart/RightPartContainer";
import PageNameContainer from "../../styledComponents/ProductPage/LeftPart/PageNameContainer";
import BackButton from "../../styledComponents/ProductPage/LeftPart/BackButton";
import NameAndTitle from "../../styledComponents/ProductPage/LeftPart/NameAndTitle";
import CathegoryName from "../../styledComponents/ProductPage/LeftPart/CathegoryName";
import TitlePage from "../../styledComponents/ProductPage/LeftPart/TitlePage";
import MainContainer from "../../styledComponents/ProductPage/LeftPart/MainContainer";
import ProductTitle from "../../styledComponents/ProductPage/LeftPart/ProductTitle";
import ProductPrice from "../../styledComponents/ProductPage/LeftPart/ProductPrice";
import Description from "../../styledComponents/ProductPage/LeftPart/Description";
import CounterAndAddWrapper from "../../styledComponents/ProductPage/LeftPart/CounterAndAddWrapper";
import AddButton from "../../styledComponents/ProductPage/LeftPart/AddButton";
import CarouselContainer from "../../styledComponents/ProductPage/LeftPart/Carousel/CarouselContainer";
import ProductImage from "../../styledComponents/ProductPage/RightPart/ProductImage";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const [loadingProduct, setLoadingProduct] = React.useState(false);
  const { title, image, price, cathegoryName } = product;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      image,
      price,
      cathegoryName,
    };
    dispatch(addItem(item));
  };

  React.useEffect(() => {
    const getProduct = async () => {
      setLoadingProduct(true);
      const res = await fetch(
        `https://6421d95e34d6cd4ebd7d49cd.mockapi.io/furniture/furniture/${id}`
      );
      setProduct(await res.json());
      setLoadingProduct(false);
    };
    window.scrollTo(0, 0);
    getProduct();
  }, [id]);

  const LoadingProcess = () => {
    return (
      <>
        <LoadingContainer>
          <LoadingSpin></LoadingSpin>
        </LoadingContainer>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <PageNameContainer>
          <Link to={"/products"}>
            <BackButton>
              <ion-icon name="arrow-back"></ion-icon>
            </BackButton>
          </Link>
          <NameAndTitle>
            <CathegoryName>{product.cathegoryName}</CathegoryName>
            <TitlePage>/ {product.title}</TitlePage>
          </NameAndTitle>
        </PageNameContainer>
        <ProductContainer>
          <LeftPartContainer>
            <MainContainer>
              <div>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
              </div>
              <Description>{product.description}</Description>

              <CounterAndAddWrapper>
                <AddButton onClick={onClickAdd}>Add To Cart </AddButton>
              </CounterAndAddWrapper>

              <div>
                <Description>
                  Free 3-5 day shipping • Tool-free assembly • 30-day trial
                </Description>
              </div>
            </MainContainer>
          </LeftPartContainer>

          <RightPartContainer>
            <CarouselContainer>
              <Carousel>
                <Carousel.Item>
                  <ProductImage src={product.image} alt="Furniture" />
                </Carousel.Item>

                <Carousel.Item>
                  <ProductImage src={product.secondImage} alt="Furniture" />
                </Carousel.Item>

                <Carousel.Item>
                  <ProductImage src={product.thirdImage} alt="Furniture" />
                </Carousel.Item>

                <Carousel.Item>
                  <ProductImage src={product.fourthImage} alt="Furniture" />
                </Carousel.Item>
              </Carousel>
            </CarouselContainer>
          </RightPartContainer>
        </ProductContainer>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loadingProduct ? <LoadingProcess /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
