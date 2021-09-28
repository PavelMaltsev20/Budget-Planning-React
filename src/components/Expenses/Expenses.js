import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpenseFilter.js";
import ExpensesItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;

  const [filterState, setFilterState] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilterState({ year: selectedYear });

    console.log(filterState.year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterState}
          onChangeHandler={filterChangeHandler}
        />

        {expenses.map((expense) => (
          <ExpensesItem
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
