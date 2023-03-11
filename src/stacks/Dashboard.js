import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import Welcome from "../Screens/Welcome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Continents } from "../Screens/Continents";
import Signout from "../Screens/Signout";
import Staffstack from "./Staffstack";

const Drawer = createDrawerNavigator();

function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName="Welcome">
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Staff" component={Staffstack} />
      <Drawer.Screen name="Continents" component={Continents} />
      <Drawer.Screen name="Sign Out" component={Signout} />
    </Drawer.Navigator>
  );
}

export default Dashboard;
