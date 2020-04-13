import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { v4 } from "react-native-uuid";
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
  const route = useRoute();
  const name = route.params.name;
  const email = route.params.email;
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usersStorage, setUsersStorage] = useState([]);
  let getUsersStorage;

  async function getUsers() {
    getUsersStorage = await AsyncStorage.getItem("users");
    getUsersStorage && setUsersStorage(JSON.parse(getUsersStorage));
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function registerUser() {
    if (name && email && password && !errorMessage) {
      if (password.length <= 5)
        return setErrorMessage("digite uma senha com pelo menos 6 caracteres");
      const id = v4();
      let newUser = { id, name, email, password };
      usersStorage.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(usersStorage));
      navigation.navigate("EndRegistration");
    } else {
      setErrorMessage("verifique e confirme as senhas para finalizar");
    }
  }

  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setErrorMessage("senha diferente da anterior");
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage("");
    }
  }, [password, confirmPassword]);

  const registerPasswordContent = (
    <BoxConteinerStyled>
      <TextStyled>
        Para finalizar, crie e confirme{" "}
        <TextStyled style={{ fontWeight: "bold" }}>
          sua senha de no mínimo 6 dígitos
        </TextStyled>
      </TextStyled>
      <BoxInputStyled>
        <InputStyled
          label="sua senha"
          value={password}
          handler={(text) => setPassword(text)}
          secureTextEntry
        />
        <InputStyled
          label="confirme a senha"
          value={confirmPassword}
          handler={(text) => setConfirmPassword(text)}
          margin={40}
          secureTextEntry
          errorMessage={errorMessage}
        />
      </BoxInputStyled>
      <BoxButtonsStyled errorMessage={errorMessage}>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            registerUser();
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={registerPasswordContent} />;
}
