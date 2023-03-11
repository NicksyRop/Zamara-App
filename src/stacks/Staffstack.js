import React from "react";
import Staff from "../Screens/Staff";

const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import { Create } from "../Screens/Create";

function Staffstack() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={Staff}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create"
        component={Create}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Staffstack;
