import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../Constants/Styles";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import IconButton from "../Components/UI/IconButton";
import Button from "../Components/UI/Button";
import { ExpensesContext } from "../Store/expenses-context";
import ExpenseForm from "../Components/ManageExpense/ExpenseForm";

function ManageExpenseScreen({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const canselHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "Test2",
        amount: 39.99,
        date: new Date("2023-7-25"),
      });
    } else {
      expenseCtx.addExpense({
        description: "Test",
        amount: 29.99,
        date: new Date("2023-7-27"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={canselHandler}>
          Cansel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpenseScreen;
