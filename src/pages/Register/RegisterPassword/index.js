import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage } from "react-native";
import { v1 } from "react-native-uuid";
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
  const [disabled, setDisabled] = useState(false);
  const [usersStorage, setUsersStorage] = useState([]);
  let getUsersStorage;

  async function getUsers() {
    getUsersStorage = await AsyncStorage.getItem("users");
    getUsersStorage && setUsersStorage(JSON.parse(getUsersStorage));
    console.log(JSON.parse(getUsersStorage), "usersStorage");
  }

  useEffect(() => {
    getUsers();
  }, []);

  const visibilityPassword = (
    <MaterialIcons name="visibility" size={32} color="#4F4F4F" />
  );

  const visibilityOffPassword = (
    <MaterialIcons name="visibility-off" size={32} color="#4F4F4F" />
  );
  async function registerUser() {
    if (name && email && password && !errorMessage) {
      const id = v1();
      let newUser = { id, name, email, password };
      usersStorage.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(usersStorage));
      navigation.navigate("EndRegistration");
    } else {
      await Alert.alert(
        "Erro ao cadastrar, verifique os dados e tente novamente."
      );
      navigation.navigate("Home");
    }
  }

  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setErrorMessage("senha diferente da anterior");
      } else {
        setDisabled(false);
        setErrorMessage("");
      }
    } else {
      setDisabled(false);
      setErrorMessage("");
    }
  }, [password, confirmPassword]);

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
          secureTextEntry
          //   icon={visibilityPassword}
        />
        <InputStyled
          label="confirme a senha"
          value={confirmPassword}
          handler={(text) => setConfirmPassword(text)}
          margin={40}
          secureTextEntry
          //   icon={visibilityOffPassword}
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
          disabled={disabled}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={registerPasswordContent} />;
}
