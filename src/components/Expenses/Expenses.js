import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpenseFilter.js";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./List/ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart.js";

function Expenses(props) {
  const [filterState, setFilterState] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilterState(selectedYear);
  };

  const filteredData = props.expenses.filter((expense) => {
    return expense.date.getFullYear() + "" === filterState;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterState}
          onChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredData} />
        <ExpensesList items={filteredData} onDelete={props.onDeleteExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
