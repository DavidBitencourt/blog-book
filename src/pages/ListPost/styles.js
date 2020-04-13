import styled from "styled-components/native";

export const BoxConteinerStyled = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ModalStyled = styled.Modal`
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

export const BoxHeaderStyled = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 50px;
`;

export const FlatListStyled = styled.FlatList`
  width: 100%;
  height: 70%;
  margin-top: 15px;
`;

export const BoxPostStyled = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PostContentStyled = styled.View`
  margin: 23px;
`;

export const PostContentTextStyled = styled.View`
  width: 100%;
`;

export const BoxActionsStyled = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const BoxButtonsStyled = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-top: 5px;
`;

export const ButtonActionStyled = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  background-color: #eb8a75;
  border-radius: 50px;
`;

export const TextActionStyled = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
`;

export const TitleTextStyled = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 23px;
  color: #4f4f4f;
  text-align: left;
`;

export const TextDateStyled = styled.Text`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #2c2929;
  text-align: left;
  padding-left: 16px;
  margin-bottom: 28px;
  opacity: 0.4;
`;

export const TextNameStyled = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #be7667;
  text-align: left;
  padding-left: 16px;
  margin-top: 10px;
`;

export const TextStyled = styled.Text`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #4f4f4f;
  text-align: left;
  padding-left: 16px;
  margin-top: 10px;
`;

export const TextExitStyled = styled.Text`
  color: #eb8a75;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding-right: 5px;
`;
