import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { v4 } from "react-native-uuid";
import Button from "../../components/Button";
import Container from "../../components/Container";
import postsFake from "../../data/postsFake.json";
import {
  BoxActionsStyled,
  BoxButtonsStyled,
  BoxConteinerStyled,
  BoxHeaderStyled,
  BoxPostStyled,
  FlatListStyled,
  PostContentStyled,
  PostContentTextStyled,
  TextDateStyled,
  TextNameStyled,
  TextStyled,
  TitleTextStyled,
} from "./styles";

export default function ListPost() {
  const route = useRoute();
  const user = route.params.user;
  const [text, setText] = useState(
    "Galera, gostaria de compartilhar com todos que a campanha lançada em agosto está o maior sucesso! A participação de todos foi fundamental para este sucesso. Hoje teremos uma pesquisa, quem puder participar vai colaborar muito!"
  );
  const [postList, setPostList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textPostEdit, setTextPostEdit] = useState("");
  const navigation = useNavigation();

  async function listPosts() {
    let array = [];
    for (let index = 0; index < 10; index++) {
      let id = v4();
      let post = {
        id,
        idUser: id,
        name: postsFake[index].name,
        date: moment(new Date()).format("LLLL"),
        text,
      };
      array.push(post);
    }
    setPostList(array);
  }

  function deletePost(postRemove) {
    let index = postList.findIndex((index) => {
      return index.id === postRemove.id;
    });
    setPostList(postList.slice(index + 1));
  }

  useEffect(() => {
    listPosts();
  }, []);

  useEffect(() => {
    console.log(postList, "postList");

    // if (postList) {
    //   setPostList(
    //     postList.sort((a, b) => {
    //       return (
    //         moment(new Date(b.date)).format("YYYY-MM-DD") -
    //         moment(new Date(a.date)).format("YYYY-MM-DD")
    //       );
    //     })
    //   );
    // }
  }, [postList]);

  const listPostContent = (
    <BoxConteinerStyled>
      <BoxHeaderStyled>
        <TitleTextStyled>Feed Boticário </TitleTextStyled>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <TextStyled action>Sair</TextStyled>
          <MaterialIcons name="exit-to-app" size={25} color="#4f4f4f" />
        </TouchableOpacity>
      </BoxHeaderStyled>
      <BoxPostStyled>
        <FlatListStyled
          data={postList}
          keyExtractor={(post) => post.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: post }) => (
            <PostContentStyled>
              <TextDateStyled>{post.date}</TextDateStyled>
              <PostContentTextStyled
                style={{ borderLeftWidth: 3, borderLeftColor: "#BE7667" }}
              >
                <TextNameStyled>{post.name}</TextNameStyled>
                <TextStyled>{post.text}</TextStyled>
                {/* {post.idUser === user.id && ( */}
                <BoxActionsStyled>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingTop: 10,
                    }}
                    onPress={() => {
                      deletePost(post);
                    }}
                  >
                    <TextStyled action>excluir</TextStyled>
                    <MaterialIcons name="delete" size={23} color="#4f4f4f" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingTop: 10,
                    }}
                    onPress={() => {
                      setTextPostEdit(post.text);
                      setModalVisible(true);
                    }}
                  >
                    <TextStyled action>editar</TextStyled>
                    <MaterialIcons name="edit" size={23} color="#4f4f4f" />
                  </TouchableOpacity>
                </BoxActionsStyled>
                {/* // )} */}
              </PostContentTextStyled>
            </PostContentStyled>
          )}
        />
      </BoxPostStyled>
      <BoxButtonsStyled>
        <Button
          text="escrever mensagem"
          textColor="#ffffff"
          backgroundColor="#eb8a75"
          handler={() => {
            setModalVisible(true);
          }}
        />
      </BoxButtonsStyled>
    </BoxConteinerStyled>
  );

  return (
    <Container
      data={user}
      container={listPostContent}
      modalVisible={modalVisible}
      modalChangeStatus={(status) => setModalVisible(status)}
      newPost={(newPost) => {
        setPostList([newPost, ...postList]);
      }}
      textPostEdit={textPostEdit}
    />
  );
}
