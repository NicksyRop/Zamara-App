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

const Drawer = createDrawerNavigator();

function Dashboard() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Main}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Staff"
        component={Settings}
        options={{
          drawerIcon: () => <Ionicons name="settings-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Continents"
        component={Settings}
        options={{
          drawerIcon: () => <Ionicons name="settings-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Sighn Out"
        component={Settings}
        options={{
          drawerIcon: () => <Ionicons name="settings-outline" size={22} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default Dashboard;
