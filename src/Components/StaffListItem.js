import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const StaffListItem = ({
  onClick,
  name,
  salary,
  department,
  number,
  email,
}) => {
  console.log(name);
  return (
    <View style={styles.table}>
      <View style={styles.row}></View>
      <TouchableOpacity style={styles.row} onPress={onClick}>
        <View style={styles.column}>
          <Text style={styles.text}>
            {number ? <Text>{number}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {name ? <Text>{name}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {email ? <Text>{email}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {department ? <Text>{department}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {salary ? <Text>{salary}</Text> : <Text></Text>}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
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

  table: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  column: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 10,
  },
});

export default StaffListItem;
