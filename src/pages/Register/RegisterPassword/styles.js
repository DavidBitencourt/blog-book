import styled from "styled-components/native";

export const BoxConteinerStyled = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const BoxInputStyled = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60%;
  margin-top: 37px;
`;

export const BoxButtonsStyled = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin-top: ${({ errorMessage }) => (errorMessage ? 87.7 : 95)}%; */
`;

export const TextStyled = styled.Text`
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 300;
  font-size: 23px;
  line-height: 30px;
  color: #eb8a75;
  text-align: center;
  margin-top: 50px;
`;
