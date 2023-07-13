import { StatusBar } from 'expo-status-bar';;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpensesScreen from "./Screens/AllExpensesScreen";
import RecentExpensesScreen from "./Screens/RecentExpensesScreen";
import ManageExpenseScreen from "./Screens/ManageExpenseScreen";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


const ExpenseOverview = () => {
  return (
      <BottomTabs.Navigator>
          <BottomTabs.Screen name={'Recent Expenses'} component={RecentExpensesScreen}/>
          <BottomTabs.Screen name={'All Expenses'} component={AllExpensesScreen}/>
      </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={'ExpensesOverview'} component={ExpenseOverview} />
              <Stack.Screen name={'ManageExpense'} component={ManageExpenseScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
