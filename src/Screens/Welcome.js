import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import Dashboard from "../stacks/Dashboard";
import Login from "./Login";

function Welcome() {
  const [userId, setId] = useState();

  const [user, setUser] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");

      if (value !== null) {
        setId(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    //fetch the id from storage
    getData();
    //then fetch user
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser[result];
      });
  });
  return <View>{user != null ? <Dashboard /> : <Login />}</View>;
}

export default Welcome;
