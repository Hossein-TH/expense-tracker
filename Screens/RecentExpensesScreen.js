import ExpenseOutput from "../Components/ExpenceOutput/ExpenseOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../Store/expenses-context";
import { getDateMinusDays } from "../Util/Date";
import { fetchExpenses } from "../Util/http";
import LoadingOverlay from "../Components/UI/LoadingOverlay";
import ErrorOverlay from "../Components/UI/ErrorOverlay";

function RecentExpensesScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
