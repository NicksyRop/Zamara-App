import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { Input, Box, Button } from "native-base";
import ButtonComponent from "../Components/ButtonComponent";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onUsernameChange = (text) => {
    setUsername(text);
  };

  const onPasswordChange = (text) => {
    setPassword(text);
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("id", value.toString());
      console.log(value);
    } catch (e) {
      // saving error

      console.log("failed to save id");
    }
  };
  const Login = () => {
    console.log("login function");

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "rshawe2",
        password: "OWsTbMUgFc",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.id == null) {
          //store id using asynch storage
        } else {
          console.log("Logged in");
          storeData(result.id);
          // redirect to dashboard
          navigation.navigate("Dashboard");
        }
      });
  };

  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#002851",
        height: Dimensions.get("window").height,
      }}
    >
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
              placeholder="Enter Username"
              onChangeText={(text) => onUsernameChange(text)}
            />
          </View>

          <View style={{ marginBottom: 15 }}>
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
              placeholder="Enter Password"
              onChangeText={(text) => onPasswordChange(text)}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <ButtonComponent text="Login" onClick={Login} />
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
    marginTop: Dimensions.get("window").height / 6,
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
