import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ContinentsList from "../Components/ContinentsList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContinentsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
