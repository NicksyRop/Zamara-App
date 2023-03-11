import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import "react-native-gesture-handler";
import Login from "./src/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/stacks/Dashboard";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
