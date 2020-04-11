import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { v1 } from "react-native-uuid";
import Button from "../../components/Button";
import Container from "../../components/Container";
import postsFake from "../../data/postsFake.json";
import {
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
    "Texto de teste para os meus postsTexto de teste para os meus postsTexto de teste para os meus postsTexto de teste para os meus postsTexto de teste para os meus postsTexto de teste para os meus posts"
  );
  const [postList, setPostList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  async function listPosts() {
    let array = [];
    for (let index = 0; index < 10; index++) {
      let id = v1();
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

  useEffect(() => {
    listPosts();
  }, []);

  const listPostContent = (
    <BoxConteinerStyled>
      <BoxHeaderStyled>
        <TitleTextStyled>Feed Boticário </TitleTextStyled>
        <Feather name="more-horizontal" size={32} color="#4f4f4f" />
      </BoxHeaderStyled>
      <BoxPostStyled>
        <FlatListStyled
          data={postList}
          keyExtractor={(post) => String(post.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: post }) => (
            <PostContentStyled>
              <TextDateStyled>{post.date}</TextDateStyled>
              <PostContentTextStyled
                style={{ borderLeftWidth: 3, borderLeftColor: "#BE7667" }}
              >
                <TextNameStyled>{post.name}</TextNameStyled>
                <TextStyled>{post.text}</TextStyled>
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
      container={listPostContent}
      modalVisible={modalVisible}
      modalChangeStatus={(status) => setModalVisible(status)}
    />
  );
}
