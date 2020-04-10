import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import InputStyled from "../../../components/InputStyled";
import {
  BoxButtonsStyled,
  BoxConteinerStyled,
  BoxInputStyled,
  TextStyled,
} from "./styles";

export default function RegisterName() {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const registerNameContent = (
    <BoxConteinerStyled>
      <TextStyled>
        Para começar, escreva{" "}
        <TextStyled style={{ fontWeight: "bold" }}>seu nome</TextStyled>
      </TextStyled>
      <BoxInputStyled>
        <InputStyled
          label="nome"
          value={name}
          handler={(text) => setName(text)}
        />
      </BoxInputStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            navigation.navigate("RegisterEmail");
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={registerNameContent} />;
}
