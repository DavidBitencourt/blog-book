import React from "react";
import {
  BoxContentMainStyled,
  BoxContentStyled,
  ContainerMainStyled,
} from "./styles";

export default function Container({ container }) {
  return (
    <ContainerMainStyled>
      <BoxContentMainStyled
        style={{ borderTopEndRadius: "50%", borderTopStartRadius: "50%" }}
      >
        <BoxContentStyled
          style={{ borderTopEndRadius: "50%", borderTopStartRadius: "50%" }}
        >
          {container}
        </BoxContentStyled>
      </BoxContentMainStyled>
    </ContainerMainStyled>
  );
}
