import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Holidays",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expensesArray, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpensesHandler = (idForDelete) => {
    setExpenses((prevExpenses) => {
      const expenses = prevExpenses.filter(
        (current) => current.id !== idForDelete
      );
      return expenses;
    });
  };

  return (
    <div className="App-header">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={expensesArray}
        onDeleteExpense={deleteExpensesHandler}
      />
    </div>
  );
}

export default App;
