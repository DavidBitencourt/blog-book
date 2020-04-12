import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  width: ${({ width }) => (width ? width : 80)}%;
  height: 48px;
  margin: 10px;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const TextButtonStyled = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ textColor }) => textColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
