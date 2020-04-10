import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  width: 80%;
  height: 58px;
  margin: 10px;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const TextButtonStyled = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ textColor }) => textColor};
`;
