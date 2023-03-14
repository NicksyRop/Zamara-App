import React from "react";

const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import Staff from "../Screens/Staff";
import { Create } from "../Screens/Create";
import Details from "../Screens/Details";
import { Update } from "../Screens/Update";

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

      <Stack.Screen
        name="Update"
        component={Update}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Staffstack;
