import ExpensesItem from "./ExpenseItem.js";
import Card from "./Card.js";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses ">
      <ExpensesItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpensesItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpensesItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpensesItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
