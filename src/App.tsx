import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from "./logo.svg";
import "./fonts.css";
import {
  Header,
  ItemHeader,
  TextHeader,
  ProductsOptionsList,
  ItemOptionProduct,
  ImageProductApple,
  TextOptionsProductApple,
  SpamDescriptionProduct,
  BlockAppleEducation,
  AppleEducationBlock,
  BannerAria,
  PurchaseButton,
  BannerAreaButtons,
  BannerMacPro,
} from "./AppStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import iMac from "./assets/images/iMac.svg";
import macAcessories from "./assets/images/macAcessories.svg";
import macBookPro from "./assets/images/macPro.svg";
import macCompare from "./assets/images/macCompare.svg";
import mcDisplays from "./assets/images/macDisplays.svg";
import macMini from "./assets/images/macMini.svg";
import macOs from "./assets/images/macOs.svg";
import mcShop from "./assets/images/macShop.svg";
import mcStudio from "./assets/images/macStudio.svg";
import mcAir from "./assets/images/macbookAir.svg";
import macBook from "./assets/images/macbook.jpeg";
import macPro from "./assets/images/macpro.jpeg";

function App() {
  return (
    <div className="App">
      <Header>
        <ItemHeader>
          <FontAwesomeIcon
            style={{
              marginTop: "5px",
              cursor: "pointer",
              color: "#f5f5f7",
              fontSize: "13px",
            }}
            icon={faApple}
          />
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>iPad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>iPhone</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Entretenimento</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon
            style={{
              cursor: "pointer",
              color: "#f5f5f7",
              fontSize: "18px",
              opacity: ".8",
            }}
            icon={faMagnifyingGlass}
          />
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon
            style={{
              cursor: "pointer",
              color: "#f5f5f7",
              fontSize: "18px",
              opacity: ".8",
            }}
            icon={faBagShopping}
          />
        </ItemHeader>
      </Header>

      <ProductsOptionsList>
        <ItemOptionProduct>
          <ImageProductApple src={mcAir} widthImage="78px" alt="iMac" />
          <TextOptionsProductApple>MacBookAir</TextOptionsProductApple>
          <SpamDescriptionProduct marginTop="78px">Novo</SpamDescriptionProduct>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={iMac} widthImage="40px" alt="iMac" />
          <TextOptionsProductApple>IMac</TextOptionsProductApple>
          <SpamDescriptionProduct>Novo</SpamDescriptionProduct>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={macMini} widthImage="30px" alt="macMini" />
          <TextOptionsProductApple>MacMini</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={mcStudio} widthImage="30px" alt="iMac" />
          <TextOptionsProductApple>MacStudio</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={macAcessories} widthImage="38px" alt="iMac" />
          <TextOptionsProductApple>Mac Acessories</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={macCompare} widthImage="50px" alt="iMac" />
          <TextOptionsProductApple>Mac Compare</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={mcDisplays} widthImage="81px" alt="iMac" />
          <TextOptionsProductApple>MacDisplays</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={macBookPro} widthImage="" alt="iMac" />
          <TextOptionsProductApple>MacBookPro</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={macOs} widthImage="41px" alt="iMac" />
          <TextOptionsProductApple>MacOs</TextOptionsProductApple>
        </ItemOptionProduct>
        <ItemOptionProduct>
          <ImageProductApple src={mcShop} widthImage="120px" alt="iMac" />
          <TextOptionsProductApple>MacShop</TextOptionsProductApple>
        </ItemOptionProduct>
      </ProductsOptionsList>

      <BlockAppleEducation>
        <p>
          economize na compra do macbook air e do macbook pro de 13 polegadas na
          apple store educacional.
          <a
            href="https://www.apple.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar!
            <FontAwesomeIcon style={{ fontSize: 9 }} icon={faChevronRight} />
          </a>
        </p>
      </BlockAppleEducation>

      <BannerAria>
        <SpamDescriptionProduct>Novo teste</SpamDescriptionProduct>
        <h1>MacBook Pro 13 pol</h1>
        <h2>Pro em qualquer lugar</h2>
        <p> A partir de R$15.299</p>
        <BannerAreaButtons>
          <PurchaseButton background="#0071e3" color="white">
            Comprar
          </PurchaseButton>
          <PurchaseButton
            background="transparent"
            underline={true}
            color="#0071e3"
          >
            Saiba Mais{" "}
            <FontAwesomeIcon
              style={{ fontSize: 11, marginLeft: 5 }}
              icon={faChevronRight}
            />
          </PurchaseButton>
        </BannerAreaButtons>

        <ImageProductApple src={macBook} widthImage="450px" marginTop="100px" />
      </BannerAria>

      <BannerMacPro>
        <SpamDescriptionProduct marginTop="28px">
          Novo teste
        </SpamDescriptionProduct>
        <h1>MacBook Air</h1>
        <h2>Livre, leve, voa</h2>
        <p> A partir de R$1300,99</p>

        <BannerAreaButtons>
          <PurchaseButton background="#0071e3" color="white">
            Comprar
          </PurchaseButton>
          <PurchaseButton
            background="transparent"
            underline={true}
            color="#0071e3"
          >
            Saiba Mais{" "}
            <FontAwesomeIcon
              style={{ fontSize: 11, marginLeft: 5 }}
              icon={faChevronRight}
            />
          </PurchaseButton>
        </BannerAreaButtons>

        <ImageProductApple src={macPro} widthImage="850px" marginTop="15px" />
      </BannerMacPro>
    </div>
  );
}

export default App;
