import PropTypes from "prop-types";
import React from "react";
import { Input } from "react-native-elements";
import { BoxInputStyled } from "./styles";
export default function InputStyled({
  value,
  handler,
  label,
  errorMessage,
  margin,
  secureTextEntry,
  multiline,
}) {
  InputStyled.defaultProps = {
    value: "",
    label: "",
    errorMessage: "",
    handler: () => {},
    value: "",
    secureTextEntry: false,
    margin: 0,
    multiline: false,
  };

  InputStyled.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    handler: PropTypes.func,
    value: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    margin: PropTypes.number,
    multiline: PropTypes.bool,
  };

  return (
    <BoxInputStyled style={{ marginTop: margin }}>
      <Input
        placeholderTextColor={"#4F4F4F"}
        errorStyle={{ color: "red", fontSize: 17 }}
        errorMessage={errorMessage}
        label={label}
        inputStyle={{
          borderBottomWidth: 3,
          borderBottomColor: "#eb8a75",
          padding: 15,
          width: 100,
          color: "#4F4F4F",
        }}
        value={value}
        labelStyle={{ color: "#eb8a75" }}
        onChangeText={(text) => {
          handler(text);
        }}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />
    </BoxInputStyled>
  );
}
