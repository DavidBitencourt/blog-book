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
  ButtonActionStyled,
  FlatListStyled,
  PostContentStyled,
  PostContentTextStyled,
  TextActionStyled,
  TextDateStyled,
  TextExitStyled,
  TextNameStyled,
  TextStyled,
  TitleTextStyled,
} from "./styles";

export default function ListPost() {
  const route = useRoute();
  const user = route.params.user;
  const [postList, setPostList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [postEdit, setPostEdit] = useState(null);
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
        text: postsFake[index].text,
      };
      array.push(post);
    }
    setPostList(array);
  }

  function deletePost(postRemove) {
    setPostList(postList.filter((item) => item.id !== postRemove.id));
  }

  async function changeListPost(dataPost) {
    let index = await postList.findIndex((item) => {
      return item.id === dataPost.id;
    });
    if (index !== -1) {
      setPostList([
        (postList[index].text = dataPost.text),
        (postList[index].date = moment(new Date()).format("LLLL")),
        ...postList,
      ]);
    } else {
      setPostList([dataPost, ...postList]);
    }
  }

  useEffect(() => {
    if (!modalVisible) setPostEdit(null);
  }, [modalVisible]);

  useEffect(() => {
    listPosts();
  }, []);

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
          <TextExitStyled action>Sair</TextExitStyled>
          <MaterialIcons name="exit-to-app" size={22} color="#eb8a75" />
        </TouchableOpacity>
      </BoxHeaderStyled>
      <BoxPostStyled>
        <FlatListStyled
          data={postList}
          keyExtractor={(post) => post.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: post }) => (
            <>
              {post.id && (
                <PostContentStyled>
                  <TextDateStyled>{post.date}</TextDateStyled>
                  <PostContentTextStyled
                    style={{ borderLeftWidth: 3, borderLeftColor: "#BE7667" }}
                  >
                    <TextNameStyled>{post.name}</TextNameStyled>
                    <TextStyled>{post.text}</TextStyled>
                    {post.idUser === user.id && (
                      <BoxActionsStyled>
                        <ButtonActionStyled
                          onPress={() => {
                            deletePost(post);
                          }}
                        >
                          <TextActionStyled action>excluir</TextActionStyled>
                          <MaterialIcons
                            name="delete"
                            size={18}
                            color="#ffffff"
                          />
                        </ButtonActionStyled>
                        <ButtonActionStyled
                          onPress={() => {
                            setPostEdit({ ...post });
                            setModalVisible(true);
                          }}
                        >
                          <TextActionStyled action>editar</TextActionStyled>
                          <MaterialIcons
                            name="edit"
                            size={18}
                            color="#ffffff"
                          />
                        </ButtonActionStyled>
                      </BoxActionsStyled>
                    )}
                  </PostContentTextStyled>
                </PostContentStyled>
              )}
            </>
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
        changeListPost(newPost);
      }}
      postEdit={postEdit}
    />
  );
}
