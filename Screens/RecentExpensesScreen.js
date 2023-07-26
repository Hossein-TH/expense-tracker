import ExpenseOutput from "../Components/ExpenceOutput/ExpenseOutput";
import {useContext} from "react";
import {ExpensesContext} from "../Store/expenses-context";
import {getDateMinusDays} from "../Util/Date";

function RecentExpensesScreen() {
    const expensesCtx = useContext(ExpensesContext);
    const recentExpense = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today , 7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    })


    return <ExpenseOutput expenses={recentExpense} expensesPeriod="Last 7 Days"/>;
}

export default RecentExpensesScreen;
