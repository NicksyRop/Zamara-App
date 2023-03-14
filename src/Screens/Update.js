import { Input } from "native-base";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  StatusBar,
} from "react-native";
import ButtonComponent from "../Components/ButtonComponent";

export const Update = ({ route, navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [department, setDepartment] = useState();
  const [salary, setSalary] = useState();
  const { itemId, setItemId } = useState();

  console.log("id is", route.params.user_id);

  useEffect(() => {
    const fetchuser = () => {
      var raw = "";

      var requestOptions = {
        method: "GET",
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://crudcrud.com/api/6be8d16398434da1ad0e5e0adbb4d34b/zamara/" +
          route.params.user_id,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result !== null) {
            setDepartment(result.sdepartment);
            setEmail(result.semail);
            setName(result.sname);
            setSalary(result.ssalary);
            setNumber(result.snumber);
          }
        })
        .catch((error) =>
          console.log("error", "The fetch did not work" + error)
        );
    };

    fetchuser();
  }, []);

  const onNamechange = (value) => {
    setName(value);
  };

  const onEmailchange = (value) => {
    setEmail(value);
  };
  const onDepartmentchange = (value) => {
    setDepartment(value);
  };
  const onNumberchange = (value) => {
    setNumber(value);
  };
  const onSalarychange = (value) => {
    setSalary(value);
  };

  const sendEmail = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "http://44.192.129.72:8080/full-stack-0.0.1-SNAPSHOT/sendmail?subject=Profile Notification %23Edited&name=" +
        name,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        if (result == "success") {
          console.log("mail sent");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const deleteUser = () => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      "https://crudcrud.com/api/6be8d16398434da1ad0e5e0adbb4d34b/zamara/" +
        route.params.user_id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        sendEmail();
        navigation.navigate("List");
      })
      .catch((error) => console.log("error", error));
  };

  const UpdateStaff = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      snumber: number,
      sname: name,
      semail: email,
      sdepartment: department,
      ssalary: salary,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://crudcrud.com/api/6be8d16398434da1ad0e5e0adbb4d34b/zamara/" +
        route.params.user_id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        sendEmail();
        console.log("successfully updated");

        navigation.navigate("List");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={styles.parent}>
      <View style={styles.field}>
        <Text>Staff Number</Text>

        <Input value={number} onChangeText={(value) => onNumberchange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Staff Name</Text>

        <Input value={name} onChangeText={(value) => onNamechange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Staff Email</Text>

        <Input value={email} onChangeText={(value) => onEmailchange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Department </Text>

        <Input
          value={department}
          onChangeText={(value) => onDepartmentchange(value)}
        />
      </View>
      <View style={styles.field}>
        <Text>Salary</Text>

        <Input value={salary} onChangeText={(value) => onSalarychange(value)} />
      </View>

      <View style={styles.btns}>
        <View style={{ marginRight: 10 }}>
          <ButtonComponent text="Update" onClick={UpdateStaff} />
        </View>

        <View>
          <ButtonComponent text="Delete" onClick={deleteUser} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
  field: {
    width: Dimensions.get("window").width - 30,
    marginBottom: 10,
    justifyContent: "center",
    marginLeft: 15,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 3,
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
  },
});
