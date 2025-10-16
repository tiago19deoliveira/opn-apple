import styled from "styled-components";

interface ImageProductAppleType {
  widthImage?: string;
  marginTop?: string;
}
interface SpamDescriptionProductType {
  marginTop?: string;
  type?:string;
}

interface PurchaseButtonType {
  background: string;
  color: string;
  underline?: boolean;
}

interface OptionMacType{
  selected: boolean
}

export const Header = styled.div`
  height: 48px;
  width: 100%;
  max-height: 44px;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 45px;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextHeader = styled.div`
  font-size: 13px;
  color: #f5f5f7;
  font-family: "MyriadProLight";
  opacity: 0.8;
  cursor: pointer;
  letter-spacing: -0.1em;
`;

export const ProductsOptionsList = styled.div`
  height: 116px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ItemOptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ImageProductApple = styled.img<ImageProductAppleType>`
  width: ${(props) => (props.widthImage ? props.widthImage : "40px")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
`;

export const TextOptionsProductApple = styled.a`
  font-family: MyriadProRegular;
  color: rgba(0, 0, 0, 0.9);
  font-size: 13px;
`;

export const SpamDescriptionProduct = styled.span<SpamDescriptionProductType>`
  font-family: MyriadProRegular;
  color: #f56300;
  font-size: ${(props) => (props.marginTop === "span-new-option" ? "10px" : "17px")};
  font-weight: ${(props) =>
    props.marginTop === "span-new-option" ? "400" : "bold"};
  position: ${(props) =>
    props.marginTop === "span-new-option" ? "absolute" : "static"};
  margin-top: ${(props) => props.marginTop};
`;

export const BlockAppleEducation = styled.div`
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f5f5f7;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 20px;
  letter-spacing: -0.16em;
  
  p{
    font-family: MyriadProRegular;
    font-size: 14px; 
    font-weight: 400;

    a{
     color: #06c;
     text-decoration: none;
    }
     a:hover{
     text-decoration: underline;
     }
`;

export const AppleEducationBlock = styled.div`
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f5f5f7;
`;

export const BannerAria = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  h1 {
    font-size: 56px;
    color: #1d1d1f;
    font-family: MyriadProRegular;
    font-weight: 400;
  }

  h2 {
    font-size: 28px;
    color: #1d1d1f;
    font-family: MyriadProRegular;
    font-weight: 400;
    margin-top: -40px;
  }

  p {
    font-size: 17px;
    color: #1d1d1f;
    font-family: MyriadProLight;
    font-weight: 600;
    margin-top: -2px;
  }
`;

export const PurchaseButton = styled.button<PurchaseButtonType>`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 17px;
  font-family: MyriadProRegular;
  line-height: 1.17648;
  font-weigth: 400;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 980px;
  border: none;
  &:hover {
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  }
`;

export const BannerAreaButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BannerMacPro = styled.div`
  height: 615px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 0;
  h1 {
    font-size: 56px;
    color: white;
    font-family: MyriadProRegular;
    font-weight: bold;
    margin-top: 2px;
  }

  h2 {
    font-size: 28px;
    color: white;
    font-family: MyriadProRegular;
    font-weight: 400;
    margin-top: -5px;
  }

  p {
    font-size: 17px;
    color: white;
    font-family: MyriadProLight;
    font-weight: 600;
    margin-top: -2px;
  }
`;

export const SelectMac = styled.div`
 padding:  100px 40px;
 height: 800px;
 display: flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 h1{
    font-size: 40px;
    color: black;
    font-family: MyriadProRegular;
    font-weight: bold;
    margin-top: 2px;
 }
`;

export const OptionsMac = styled.div`
 height: 40px;
 width: 210px;
 border-bottom: 1px solid #d2d2d7;
 display: flex;
 flex-direction:row;
 justify-content:center;
 align-items:flex-start;
`;

export const OptionMac = styled.div<OptionMacType>`
  color: ${(props) => (props.selected ? '#1d1d1f' : '#6e6e73')};
  font-family: 'MyriadProRegular';
  width: 95px;
  height: 100%;
  border-bottom: 1px solid ${(props) => (props.selected ? '#1d1d1f' : '#6e6e73')};
  font-size: 17px;
`;