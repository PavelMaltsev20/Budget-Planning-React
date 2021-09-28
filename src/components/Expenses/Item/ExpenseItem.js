import ExpenseDate from "../Date/ExpenseDate.js";
import Card from "../../UI/Card.js";
import "./ExpenseItem.css";

function ExpensesItem(props) {
  const onClickHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div>$ {props.amount}</div>
        <button
          className="expense-item__button"
          onClick={() => onClickHandler()}
        >
          :
        </button>
      </Card>
    </li>
  );
}

export default ExpensesItem;
