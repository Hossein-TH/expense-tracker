import ExpenseOutput from "../Components/ExpenceOutput/ExpenseOutput";
import { useContext,useEffect } from "react";
import { ExpensesContext } from "../Store/expenses-context";
import { getDateMinusDays } from "../Util/Date";
import {getExpenses} from "../Util/http";

function RecentExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses () {
      const expenses = await getExpenses();
    }
  }, []);


  const recentExpense = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpenseOutput
      expenses={recentExpense}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpensesScreen;
