import PropTypes from "prop-types";
import React from "react";
import { ButtonStyled, TextButtonStyled } from "./styles";

export default function Button({
  text,
  textColor,
  backgroundColor,
  handler,
  disabled,
  width,
  icon,
}) {
  Button.defaultProps = {
    text: "",
    textColor: "",
    backgroundColor: "",
    handler: () => {},
    disabled: false,
    width: null,
  };

  Button.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
  };

  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      onPress={() => handler()}
      disabled={disabled}
      width={width}
    >
      <TextButtonStyled disabled={disabled} textColor={textColor}>
        {text}
      </TextButtonStyled>
    </ButtonStyled>
  );
}
