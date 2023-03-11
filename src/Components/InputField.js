import React from "react";
import { Input, Box } from "native-base";

const InputField = ({ placeholder }) => {
  return (
    <Input
      shadow={2}
      _light={{
        bg: "coolGray.100",
        _hover: {
          bg: "coolGray.200",
        },
        _focus: {
          bg: "coolGray.200:alpha.70",
        },
      }}
      _dark={{
        bg: "coolGray.800",
        _hover: {
          bg: "coolGray.900",
        },
        _focus: {
          bg: "coolGray.900:alpha.70",
        },
      }}
      placeholder={placeholder}
    />
  );
};

export default InputField;
