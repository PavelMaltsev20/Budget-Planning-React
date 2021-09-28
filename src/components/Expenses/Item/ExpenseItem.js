import React, { useState } from "react";
import ExpenseDate from "../Date/ExpenseDate.js";
import Card from "../../UI/Card.js";
import "./ExpenseItem.css";

function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    //todo
    //add options to change item
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div>$ {props.amount}</div>
        <button className="expense-item__button" onClick={clickHandler}>
          :
        </button>
      </Card>
    </li>
  );
}

export default ExpensesItem;
