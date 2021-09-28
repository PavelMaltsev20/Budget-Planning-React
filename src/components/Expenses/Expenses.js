import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpenseFilter.js";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./List/ExpensesList";

function Expenses(props) {
  const expenses = props.expenses;

  const [filterState, setFilterState] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterState({ year: selectedYear });
  };

  const filteredData = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterState.year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterState.year}
          onChangeHandler={filterChangeHandler}
        />
        <ExpensesList items={filteredData} />
      </Card>
    </div>
  );
}

export default Expenses;
