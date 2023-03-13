import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
import StaffListItem from "../Components/StaffListItem";

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
      "https://crudcrud.com/api/9646572eccdf4c6eba38801c25044175/zamara",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          setStaff(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (id) => {
    //open details page for delete or update
    navigation.navigate("Details");
  };

  const handleNavigate = () => {
    navigation.navigate("Create");
  };

  return (
    <View style={styles.default}>
      <View stye={styles.create}>
        <Text style={{ color: "#22c55e", textAlign: "center", fontSize: 15 }}>
          Staff Member List
        </Text>
      </View>

      <View stye={styles.list}>
        {staff ? (
          <View>
            <View style={styles.row}>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Number</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Name</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Email</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Department</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Salary</Text>
              </View>
            </View>

            <FlatList
              data={staff}
              renderItem={({ item }) => (
                <StaffListItem
                  {...item}
                  key={item.ssalary}
                  onClick={(id) => handleClick(item._id)}
                />
              )}
              keyExtractor={(item) => item.id}
            />

            <ButtonComponent text="Add Staff" onClick={handleNavigate} />
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

    justifyContent: "flex-end",
  },

  list: {
    width: Dimensions.get("window").width - 10,
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  columnHeader: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
  create: {
    marginBottom: 10,
    width: Dimensions.get("window").width / 2 - 10,
  },
});
export default Staff;
