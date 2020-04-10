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

export default function LoginEmail() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const loginEmailContent = (
    <BoxConteinerStyled>
      <TextStyled>
        Digite seu{" "}
        <TextStyled style={{ fontWeight: "bold" }}>e-mail</TextStyled>
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
            navigation.navigate("LoginPassword");
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={loginEmailContent} />;
}
