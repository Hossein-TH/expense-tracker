import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpensesScreen from "./Screens/AllExpensesScreen";
import RecentExpensesScreen from "./Screens/RecentExpensesScreen";
import ManageExpenseScreen from "./Screens/ManageExpenseScreen";
import { GlobalStyles } from "./Constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./Components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton icon="add" size={24} color={tintColor} onPress={() => {}}/>
        ),
      }}
    >
      <BottomTabs.Screen
        name={"Recent Expenses"}
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expense",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={"All Expenses"}
        component={AllExpensesScreen}
        options={{
          title: "AllExpenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"ExpensesOverview"}
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"ManageExpense"}
            component={ManageExpenseScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
