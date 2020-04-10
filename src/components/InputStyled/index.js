import PropTypes from "prop-types";
import React from "react";
import { Input } from "react-native-elements";
import { BoxInputStyled } from "./styles";
export default function InputStyled({
  value,
  handler,
  label,
  error,
  margin,
  secureTextEntry,
}) {
  InputStyled.defaultProps = {
    value: "",
    label: "",
    error: "",
    handler: () => {},
    value: "",
    secureTextEntry: false,
    margin: 0,
  };

  InputStyled.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    handler: PropTypes.func,
    value: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    margin: PropTypes.number,
  };

  return (
    <BoxInputStyled style={{ marginTop: margin }}>
      <Input
        placeholderTextColor={"#4F4F4F"}
        errorStyle={{ color: "red" }}
        errorMessage={error}
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
      />
    </BoxInputStyled>
  );
}
