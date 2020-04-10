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

export default function LoginPassword() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  //   async function getUsers() {
  //     let registers = await AsyncStorage.getItem("registers");
  //     registers = JSON.parse(registers);
  //     setUsers(registers);
  //   }

  //   useEffect(() => {
  //     setEmail("");
  //     setPassword("");
  //     getUsers();
  //     // AsyncStorage.clear();
  //   }, []);

  //   useEffect(() => {
  //     console.log(users, "users");
  //   }, [users]);

  //   async function login() {
  //     if (users) {
  //       users.map((user) => {
  //         if (user.email === email && user.password === password) {
  //           navigation.navigate("ListPost", { user });
  //         } else {
  //           alert("Usuário inválido");
  //         }
  //       });
  //     } else {
  //       await alert("Para fazer login faça o seu cadastro");
  //       navigation.navigate("Register");
  //     }
  //   }

  const loginEmailContent = (
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
        />
      </BoxInputStyled>
      <BoxButtonsStyled>
        <Button
          text="continuar"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            navigation.navigate("ListPost");
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return <Container container={loginEmailContent} />;
}
