import styled from "styled-components/native";

export const ContainerMainStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background-color: ${({ modalVisible }) =>
    modalVisible ? "rgba(0, 0, 0, 1)" : "rgba(89, 145, 108, 1)"};
  opacity: ${({ modalVisible }) => (modalVisible ? 0.3 : 1)};
`;

export const BoxContentMainStyled = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  background-color: "rgba(111, 160, 134, 1)";
`;

export const BoxContentStyled = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const ModalStyled = styled.Modal`
  align-items: center;
  justify-content: center;
  background-color: blue;
`;
