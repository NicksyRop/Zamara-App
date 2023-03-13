import React from "react";
import Staff from "../Screens/Staff";

const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../Screens/Details";
import { Create } from "../Screens/Create";

function Staffstack() {
  return (
    <Stack.Navigator>
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

      <Stack.Screen
        name="Detail"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Staffstack;
