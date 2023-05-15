import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink
} from '../../styledComponents/Footer';
import ContainerStyled from "../../styledComponents/Container";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <ContainerStyled>
      <FooterWrap>
         
           <SocialMedia>
             <SocialMediaWrap>
             <img  width={200} src={logo} alt=""/>
          
            <SocialIcons>
               <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink href='https://www.youtube.com/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              
              <SocialIconLink href='https://twitter.com/?lang=ru' target='_blank'  aria-label='Twitter' >
                <FaTwitter />
              </SocialIconLink>
              
              <SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            
             </SocialIcons>
             </SocialMediaWrap>
          </SocialMedia>
        
      </FooterWrap>
      </ContainerStyled>
  );
};

export default Footer;