import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://expense-tracker-39410-default-rtdb.firebaseio.com/expenses.json",
    expenseData,
  );
};
