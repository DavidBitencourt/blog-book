import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage } from "react-native";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import InputStyled from "../../../components/InputStyled";
import {
  BoxButtonsStyled,
  BoxConteinerStyled,
  BoxInputStyled,
  TextStyled,
} from "./styles";

export default function LoginPassword() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const route = useRoute();
  const email = route.params.email;

  async function getUsers() {
    let usersStorage = await AsyncStorage.getItem("users");
    usersStorage = JSON.parse(usersStorage);
    setUsers(usersStorage);
  }

  useEffect(() => {
    setPassword("");
    getUsers();
  }, []);

  async function login() {
    if (users) {
      let user = await users.find((user) => {
        return user.email === email && user.password === password;
      });
      if (user) {
        navigation.navigate("ListPost", { user });
      } else {
        Alert.alert("Usuário inválido, verifique os dados e tente novamente.");
        navigation.navigate("Home");
      }
    } else {
      Alert.alert("Para começar, faça o seu cadastro!");
      navigation.navigate("Home");
    }
  }

  const loginPasswordContent = (
    <BoxConteinerStyled>
      <TextStyled>
        Agora, insira{" "}
        <TextStyled style={{ fontWeight: "bold" }}>sua senha</TextStyled>
      </TextStyled>
      <BoxInputStyled>
        <InputStyled
          label="senha"
          value={password}
          handler={(text) => setPassword(text)}
          secureTextEntry
        />
      </BoxInputStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            login();
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={loginPasswordContent} />;
}
