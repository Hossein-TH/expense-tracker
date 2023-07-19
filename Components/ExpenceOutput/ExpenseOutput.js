import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-7-14"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2023-6-14"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-7-10"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2023-7-12"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2023-7-5"),
  },
];

function ExpenseOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpenseOutput;
