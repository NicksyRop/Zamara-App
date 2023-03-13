import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const StaffListItem = ({ item, onClick }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}></View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text}>
            {item ? <Text>{item.snumber}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {item ? <Text>{item.sname}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {item ? <Text>{item.snumber}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {item ? <Text>{item.sdepartment}</Text> : <Text></Text>}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>
            {" "}
            {item ? <Text>{item.ssalary}</Text> : <Text></Text>}
          </Text>
        </View>
      </View>
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
