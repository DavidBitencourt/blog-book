import PropTypes from "prop-types";
import React from "react";
import { ButtonStyled, TextButtonStyled } from "./styles";

export default function Button({ text, textColor, backgroundColor, handler }) {
  Button.defaultProps = {
    text: "",
    textColor: "",
    backgroundColor: "",
    handler: () => {},
  };

  Button.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    handler: PropTypes.func,
  };

  return (
    <ButtonStyled backgroundColor={backgroundColor} onPress={() => handler()}>
      <TextButtonStyled textColor={textColor}>{text}</TextButtonStyled>
    </ButtonStyled>
  );
}
