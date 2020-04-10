import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import { BoxButtonsStyled, BoxConteinerStyled, TextStyled } from "./styles";

export default function EndRegistration() {
  const navigation = useNavigation();

  const endRegistrationContent = (
    <BoxConteinerStyled>
      <TextStyled>Parabéns, seu cadastro foi concluído com sucesso</TextStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            navigation.navigate("Home");
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={endRegistrationContent} />;
}
