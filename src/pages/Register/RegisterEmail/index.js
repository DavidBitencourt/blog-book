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

export default function RegisterEmail() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const registerEmailContent = (
    <BoxConteinerStyled>
      <TextStyled>
        Agora, insira{" "}
        <TextStyled style={{ fontWeight: "bold" }}>seu e-mail</TextStyled>
      </TextStyled>
      <BoxInputStyled>
        <InputStyled
          label="email"
          value={email}
          handler={(text) => setEmail(text)}
        />
      </BoxInputStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            navigation.navigate("RegisterPassword");
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={registerEmailContent} />;
}
