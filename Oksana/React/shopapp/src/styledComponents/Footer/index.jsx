import styled from 'styled-components';
import { Link } from 'react-router-dom';
import footerBack from '../../img/footerBack.jpg'

const FooterWrap = styled.div`
  /* background: rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: auto;
  max-width: 1280px;
  background-image: url(${footerBack}) ;
  background-size: cover;
  /* background-attachment: fixed;   */
  background-repeat: no-repeat;
  height: 150px;
  padding-left: 40px;
  `;

const SocialMedia = styled.section`
  max-width: 1280px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px auto 0 auto;
  padding-right: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: bold;
  
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: white;
  font-size: 24px;
`;

export { SocialIconLink,SocialIcons,SocialLogo, SocialMediaWrap, SocialMedia, FooterWrap,   }