import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Login from "./src/Screens/Login";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#164e63" alignItems="center" justifyContent="center">
        <Login />
      </Box>
    </NativeBaseProvider>
  );
}
