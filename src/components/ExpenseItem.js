import expenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";

function ExpensesItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
    </Card>
  );
}

export default ExpensesItem;
