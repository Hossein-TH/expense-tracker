import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../UI/Input";

function ExpenseForm() {
  const amountChangeHandler = () => {};

  return (
    <View style={styles.container}>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
        }}
      />
      <Input label="Description" textInputConfig={{
          multiline: true,
          // autoCorrect: false,
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ExpenseForm;
