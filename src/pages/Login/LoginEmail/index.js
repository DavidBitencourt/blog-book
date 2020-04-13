import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState("");

  function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      navigation.navigate("LoginPassword", { email });
    } else {
      setErrorMessage("Digite um e-mail válido.");
    }
  }

  useEffect(() => {
    setErrorMessage("");
  }, [email]);

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
          errorMessage={errorMessage}
        />
      </BoxInputStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            checkEmail();
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={loginEmailContent} />;
}
