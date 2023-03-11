import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Welcome() {
  const [userId, setId] = useState();

  const [user, setUser] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");

      if (value !== null) {
        console.log(value);
        setId(Number(value));
        fethUser();
      }
    } catch (e) {
      // error reading value

      console.log("no id was found");
    }
  };

  useEffect(() => {
    //fetch the id from storage
    getData();
  }, []);

  const fethUser = () => {
    fetch("https://dummyjson.com/users/{userId}")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      })
      .then(() => {
        console.log(user.lastName);
      });
  };

  return (
    <View style={styles.parent}>
      <View>
        <Text style={styles.text}>
          Welcome
          {user ? (
            <Text style={{ fontWeight: "bold" }}>
              {user.firstName} {user.lastName}{" "}
            </Text>
          ) : (
            <Text> </Text>
          )}{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>Your profile details is as below:</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Age:
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.age}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Gender:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.gender}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Email:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.email}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Phone:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.phone}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Birth Date:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.birthDate}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Blood Group:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.bloodGroup}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Height:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.height}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Weight:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.weight}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Eye Color:{" "}
          {user ? (
            <Text style={{ fontWeight: "bold" }}>{user.eyeColor}</Text>
          ) : (
            <Text> </Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 15,
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    fontSize: 20,
  },
});

export default Welcome;
