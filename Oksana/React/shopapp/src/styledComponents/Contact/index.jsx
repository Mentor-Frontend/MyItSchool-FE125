import styled from "styled-components";

export const ContactWrapper = styled.form`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 0px auto 0;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  position: relative;
  background-image: linear-gradient(to right, black, #646363);
	opacity: 0.95;

  .gradient {
	position: absolute;
	top: 0px;      
	right: 0px;   
	background: transparent;
  @media (max-width: 900px) {
       display: none;
    }
  }

  .checkbox  {
  margin  : 10px ;
  color: white;
  padding: 5px;
  text-align  : left;
}
`;

export const ContactHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  color: white;
  padding-left: 32px;
`;

export const ContactHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

export const ContactBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const ContactFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  text-align: left;
  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: left;
  }
`;

export const ContactInput = styled.input`
  padding: 7px 0;
  width: 70%;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  cursor: pointer;
  &:focus {
    border-bottom-color: #f1bfd1;
    outline: 0;
  }
`;

export const ContactButton = styled.button`
  display: block;
  width: 40%;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: rgba(236, 27, 27, 0.712);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const ContactLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;
