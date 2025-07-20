import styled from "styled-components";

interface ImageProductAppleType {
  widthImage?: string;
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
  heigth: 116px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: "red";
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
`;

export const TextOptionsProductApple = styled.a`
  font-family: MyriadProRegular;
  color: rgba(0, 0, 0, 0.9);
  font-size: 13px;
`;

export const SpamDescriptionProduct = styled.span`
  font-family: MyriadProRegular;
  color: #f56300;
  font-size: 10px;
  font-weigth: 400;
  position: absolute;
  margin-top: 76px;
`;

export const BlockAppleEducation = styled.div`
  heigth: 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f5f5f7;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 20px;
  letter-spacing: -0.16em;

  p {
    font-size: 14px;
    font-family: MyriadProRegular;
    font-weigth: 400;

    a {
      color: #06c;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
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
