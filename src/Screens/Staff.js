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
