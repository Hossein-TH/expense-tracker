import { useContext } from "react";
import ExpenseOutput from "../Components/ExpenceOutput/ExpenseOutput";
import { ExpensesContext } from "../Store/expenses-context";

function AllExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpenseOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText="No registered expenses found!"
    />
  );
}

export default AllExpensesScreen;
