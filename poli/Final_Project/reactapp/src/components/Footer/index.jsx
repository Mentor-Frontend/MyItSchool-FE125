import FooterFullWrapper from "../../styledComponents/Footer/footerWrapper";
import FooterWrapper from "../../styledComponents/Footer/wrapper";
import logoFooter from "./img/logo.png";
import ImageLogo from "../../styledComponents/Footer/imageLogo";
import IconLi from "../../styledComponents/Footer/iconLi";
import IconA from "../../styledComponents/Footer/iconA";
import H6Footer from "../../styledComponents/Footer/H6Footer";
import PagesLi from "../../styledComponents/Footer/pagesLi";

export default function Footer() {
  return (
    <>
      <FooterFullWrapper>
        <FooterWrapper>
          <div>
            <ImageLogo src={logoFooter} width="250px" alt="logo" />
            <div>
              <ul>
                <IconLi>
                  <IconA href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </IconA>
                </IconLi>
                <IconLi>
                  <IconA href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </IconA>
                </IconLi>
                <IconLi>
                  <IconA href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </IconA>
                </IconLi>
                <IconLi>
                  <IconA href="#">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </IconA>
                </IconLi>
              </ul>
            </div>
          </div>
          <div>
            <H6Footer>Working Hours</H6Footer>
            <ul>
              <PagesLi>
                <p>Mon-Fri: 09.00am - 19.00pm</p>
              </PagesLi>
              <PagesLi>
                <p>Saturday: 10.00am - 18.00pm</p>
              </PagesLi>
              <PagesLi>
                <p>Sunday: We are closed</p>
              </PagesLi>
            </ul>
          </div>

          <div>
            <H6Footer>Contact Us</H6Footer>
            <ul>
              <PagesLi>45 Tooring High SL London SA17 United kingdoom</PagesLi>
              <PagesLi>018123456789</PagesLi>
              <PagesLi>cozyfurniture@gmail.com</PagesLi>
            </ul>
          </div>
        </FooterWrapper>
      </FooterFullWrapper>
    </>
  );
}
