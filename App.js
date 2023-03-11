import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Login from "./src/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box
          flex={1}
          bg="#164e63"
          alignItems="center"
          justifyContent="center"
          sytle={{ marginTop: StatusBar.currentHeight }}
        >
          <Login />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
