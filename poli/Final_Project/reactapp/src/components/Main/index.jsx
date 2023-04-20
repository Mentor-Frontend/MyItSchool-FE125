import MainStyled from "../../styledComponents/Main";
import FirstSection from "../../styledComponents/Main/firstSection";
import MainWindow from "../../styledComponents/Main/firstSection/MainWindow";
import MainWindowText from "../../styledComponents/Main/firstSection/MainWindow/MainWindowText";
import H6 from "../../styledComponents/Main/firstSection/Text/H6";
import H2 from "../../styledComponents/Main/firstSection/Text/H2";
import P from "../../styledComponents/Main/firstSection/Text/P";
import WindowButton from "../../styledComponents/Main/firstSection/MainWindow/Button";
import MainLinkStyled from "../../styledComponents/Main/firstSection/MainWindow/Button/Link";
import SecondSection from "../../styledComponents/Main/secondSection";
import IconContainer from "../../styledComponents/Main/secondSection/IconContainer";
import ImgSecond from "../../styledComponents/Main/secondSection/ImgSecond";
import authentic from "../Main/img/authentic.png";
import support from "../Main/img/support.svg";
import delivery from "../Main/img/delivery.svg";
import InIcon from "../../styledComponents/Main/secondSection/InIcon";
import IconText from "../../styledComponents/Main/secondSection/IconText";
import H5 from "../../styledComponents/Main/secondSection/IconText/H5";
import PIcon from "../../styledComponents/Main/secondSection/IconText/PIcon";
import ThirdSection from "../../styledComponents/Main/thirdSection";
import Cat from "../../styledComponents/Main/thirdSection/Cat";
import catCircle from "../../components/Main/img/cat_circle.png"
import cat from "../Main/img/cat.png";
import Circle from "../../styledComponents/Main/thirdSection/Circle/circle";
import ThirdContainer from "../../styledComponents/Main/thirdSection/Container";
import H3 from "../../styledComponents/Main/thirdSection/Text/H3";
import FourthSection from "../../styledComponents/Main/fourthSection";
import MainCarousel from "../MainCarousel";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <MainStyled>
      <FirstSection>
        <MainWindow>
          <MainWindowText>
            <H6>New Arrival</H6>
            <H2>Discover Our New Collection</H2>
            <P>
              Our furniture is made from selected and best quality materials
              that are suitable for your dream home
            </P>

            <Link to={"/products"}>
              <WindowButton>
                <MainLinkStyled>BUY NOW</MainLinkStyled>
              </WindowButton>
            </Link>
          </MainWindowText>
        </MainWindow>
      </FirstSection>

      <SecondSection>
        <IconContainer>
          <InIcon>
            <ImgSecond src={delivery} alt="delivery" />
            <IconText>
              <H5>Free Delivery</H5>
              <PIcon>We're on our way!</PIcon>
            </IconText>
          </InIcon>
          <InIcon>
            <ImgSecond src={support} alt="support" />
            <IconText>
              <H5>Support 24/7</H5>
              <PIcon>Write to us</PIcon>
            </IconText>
          </InIcon>
          <InIcon>
            <ImgSecond src={authentic} alt="authentic" />
            <IconText>
              <H5>100% Authentic</H5>
              <PIcon>100% quality</PIcon>
            </IconText>
          </InIcon>
        </IconContainer>
      </SecondSection>

      <ThirdSection>
          <ThirdContainer>
            <H3>Beautify Your Space</H3>
            <P className="third">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </P>
          </ThirdContainer>
          <Cat src={cat} alt="cat"></Cat>
          <Circle src={catCircle} alt="circle"></Circle>
      </ThirdSection>

      <FourthSection>
        <div className="fourthContainer">
          <H3>Inspiration Collection</H3>
          <MainCarousel />
        </div>
      </FourthSection>
    </MainStyled>
  );
}
