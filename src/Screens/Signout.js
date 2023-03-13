import React from "react";
import {
  StyleSheet,
  Text,
  BackHandler,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNExitApp from "react-native-exit-app";

const Signout = ({ navigation }) => {
  const Logout = () => {
    AsyncStorage.clear();
    console.log("cleared");
    navigation.navigate("Login");
    BackHandler.exitApp();
  };
  return (
    <View style={styles.default}>
      <View>
        <Image
          source={require("../images/profile.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.btn}>
          <ButtonComponent text="Logout" onClick={Logout} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2,
  },

  btn: {
    width: Dimensions.get("window").width / 2 - 20,
    marginTop: 10,
  },

  default: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Signout;
