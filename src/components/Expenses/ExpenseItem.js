import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(props.title + "clicked");
  };

  return (
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
  );
}

export default ExpensesItem;
