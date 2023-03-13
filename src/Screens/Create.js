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
import RNSmtpMailer from "react-native-smtp-mailer";

export const Create = ({ navigation }) => {
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

  const CreateStaff = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      snumber: "HSHHS",
      sname: "nickson",
      semail: "nicksonkipkorir25@gmail.com",
      sdepartment: "Tech",
      ssalary: 20000,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://crudcrud.com/api/9646572eccdf4c6eba38801c25044175/zamara",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log(result);

          navigation.navigate("List");
          //send Email
          RNSmtpMailer.sendMail({
            mailhost: "smtp.smtpbucket.com",
            port: 8025,
            ssl: false,
            username: "your_username",
            password: "your_password",
            from: "nicksonkipkorir25@gmailcom",
            recipients: "kipkorirnickson45@gmail.com",
            subject: "Profile Notification #Created",
            htmlBody:
              "<h1>Greeting {name}, we are glad to inform you that your staff profile has been created</h1>",
          })
            .then(() => {
              console.log("Email sent successfully");
            })
            .catch((error) => {
              console.error("Error sending email:", error);
            });
        }
      })
      .catch((error) => console.log("error", error));
  };
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

      <View>
        <ButtonComponent text="Create Staff" onClick={CreateStaff} />
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
});
