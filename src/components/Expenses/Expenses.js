import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpenseFilter.js";
import ExpensesItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import { useState } from "react";

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
        {filteredData.length === 0 && <p> No expenses found</p>}
        {filteredData.length > 0 &&
          filteredData.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
