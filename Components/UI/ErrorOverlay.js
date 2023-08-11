import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../Constants/Styles";
import Button from "./Button";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    color: 'white',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold",
  },
});

export default ErrorOverlay;
