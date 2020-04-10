import { useNavigation } from "@react-navigation/native";
import React from "react";
import logo from "../../assets/image/logo.png";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { BoxButtonsStyled, LogoStyled, TextStyled } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const homeContent = (
    <>
      <LogoStyled source={logo} />
      <TextStyled>
        Este é o nosso blog, para compartilhar ideias e curiosidades
      </TextStyled>
      <BoxButtonsStyled>
        <Button
          text="Fazer Login"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            navigation.navigate("LoginEmail");
          }}
        />
        <Button
          text="Cadastrar-se"
          textColor="#eb8a75"
          backgroundColor="#ffffff"
          handler={() => {
            navigation.navigate("RegisterName");
          }}
        />
      </BoxButtonsStyled>
    </>
  );

  return <Container container={homeContent} />;
}
