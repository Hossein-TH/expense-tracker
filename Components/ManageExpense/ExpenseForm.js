import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../Util/Date";

function ExpenseForm(props) {
  const { onCansel, onSubmit, title, submitButtonLabel, defaultValues } = props;
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description.toString() : "",
  });
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values!");
      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCansel}>
          Cansel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 35,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;
