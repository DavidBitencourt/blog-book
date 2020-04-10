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

export default function RegisterPassword() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registerUser() {
    if (name && email && password) {
      const id = v1();
      await AsyncStorage.setItem(
        "registers",
        JSON.stringify([{ id: id, name, email, password }])
      );
      let registers = await AsyncStorage.getItem("registers");
      const items = JSON.parse(registers);
      await alert("Cadastro realizado com sucesso!");
      navigation.goBack();
    } else {
      alert("Para se cadastrar, preencha todos os dados.");
    }
  }

  const registerPasswordContent = (
    <BoxConteinerStyled>
      <TextStyled>
        Para finalizar, crie e confirme{" "}
        <TextStyled style={{ fontWeight: "bold" }}>
          sua senha de 6 dígitos
        </TextStyled>
      </TextStyled>
      <BoxInputStyled>
        <InputStyled
          label="sua senha"
          value={password}
          handler={(text) => setPassword(text)}
        />
        <InputStyled
          label="confirme a senha"
          value={confirmPassword}
          handler={(text) => setConfirmPassword(text)}
          margin={40}
        />
      </BoxInputStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            navigation.navigate("EndRegistration");
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={registerPasswordContent} />;
}
