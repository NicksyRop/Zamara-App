import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import ButtonComponent from "../Components/ButtonComponent";

const Staff = ({ navigation }) => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = () => {
    var raw = "";

    var requestOptions = {
      method: "GET",
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://crudcrud.com/api/9646572eccdf4c6eba38801c25044175/unicorns",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setStaff(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.default}>
      <View stye={styles.create}>
        <ButtonComponent
          text="Create Staff"
          onClick={navigation.navigate("Create")}
        />
      </View>

      <View stye={styles.list}>
        {staff ? (
          <View>
            <Text>List Goes Here</Text>
          </View>
        ) : (
          <Text>No staff click Button above to Add</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    width: Dimensions.get("window").width / 2,
    justifyContent: "flex-end",
  },
});
export default Staff;
