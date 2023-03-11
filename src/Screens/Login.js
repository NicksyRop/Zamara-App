import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Input, Box, Button } from "native-base";
import InputField from "../Components/InputField";
import ButtonComponent from "../Components/ButtonComponent";

function Login() {
  return (
    <View>
      <View style={styles.top}>
        <Image
          source={require("../images/zamara.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomview}>
          <View style={{ marginBottom: 15, marginTop: 20 }}>
            <InputField placeholder="Enter username" />
          </View>

          <View style={{ marginBottom: 15 }}>
            <InputField placeholder="Enter Password" />
          </View>
          <View style={{ marginBottom: 15 }}>
          <ButtonComponent text="Login" />
          </View>

         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#6ee7b7",
  },

  top: {
    flexDirection: "column",
    height: Dimensions.get("window").height / 4,
    alignContent: "center",
    alignItems: "center",
  },
  bottom: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
  },

  bottomview: {
    flexDirection: "column",
    width: Dimensions.get("window").width - 50,
    margin: "auto",
  },

  image: {
    height: 40,
  },
});

export default Login;
