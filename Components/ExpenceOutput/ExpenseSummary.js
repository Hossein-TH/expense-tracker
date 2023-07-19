import { Text, View } from "react-native";

function ExpenseSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpenseSummary;
