import ExpenseOutput from "../Components/ExpenceOutput/ExpenseOutput";
import { useContext,useEffect,useState } from "react";
import { ExpensesContext } from "../Store/expenses-context";
import { getDateMinusDays } from "../Util/Date";
import {fetchExpenses} from "../Util/http";
import LoadingOverlay from "../Components/UI/LoadingOverlay";

function RecentExpensesScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses () {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses)
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay/>
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
