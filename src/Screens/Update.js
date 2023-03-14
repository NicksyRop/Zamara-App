import { Input } from "native-base";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import ButtonComponent from "../Components/ButtonComponent";

export const Update = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [department, setDepartment] = useState();
  const [salary, setSalary] = useState();

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

  console.log(salary);
  console.log(number);
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

  const deleteUser = () => {};

  const UpdateStaff = () => {};
  return (
    <View style={styles.parent}>
      <View style={styles.field}>
        <Text>Staff Number</Text>

        <Input onChangeText={(value) => onNumberchange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Staff Name</Text>

        <Input onChangeText={(value) => onNamechange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Staff Email</Text>

        <Input onChangeText={(value) => onEmailchange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Department </Text>

        <Input onChangeText={(value) => onDepartmentchange(value)} />
      </View>
      <View style={styles.field}>
        <Text>Salary</Text>

        <Input onChangeText={(value) => onSalarychange(value)} />
      </View>

      <View style={styles.btns}>
        <ButtonComponent text="Update" onClick={UpdateStaff} />
        <ButtonComponent text="Delete" onClick={deleteUser} />
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
  },
});
