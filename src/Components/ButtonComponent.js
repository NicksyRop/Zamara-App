import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.button}>
        <Text style={{ color: "#fff" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#22c55e",
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    fontSize: 40,
    padding: 10,
  },
});

export default ButtonComponent;
