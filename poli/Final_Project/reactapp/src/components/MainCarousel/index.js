import { Carousel } from "react-bootstrap";
import CContainer from "../../styledComponents/Main/fourthSection/CContainer";
import Img from "../../styledComponents/Main/fourthSection/Img";
import p1 from "../Main/img/p1.jpg";
import p2 from "../Main/img/p2.jpg";
import p3 from "../Main/img/p3.jpg";
import p4 from "../Main/img/p4.jpg";
import p5 from "../Main/img/p5.jpg";
import p6 from "../Main/img/p6.jpg";
import p7 from "../Main/img/p7.jpg";
import p8 from "../Main/img/p8.jpg";

export default function MainCarousel() {
  return (
    <CContainer>
      <Carousel>
        <Carousel.Item>
          <Img src={p1} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p2} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p3} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p4} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p5} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p6} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p7} alt="Furniture" />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={p8} alt="Furniture" />
        </Carousel.Item>
      </Carousel>
    </CContainer>
  );
}
