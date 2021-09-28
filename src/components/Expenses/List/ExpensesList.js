import ExpensesItem from "../Item/ExpenseItem.js";

const ExpensesList = (props) => {
  let expensesContent = <p> No expenses found</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpensesItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        onDeleteItem={props.onDelete}
      />
    ));
  }

  return expensesContent;
};

export default ExpensesList;
