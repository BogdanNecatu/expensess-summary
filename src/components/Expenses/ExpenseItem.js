import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //special veriable return an array of 2 elements
  //"title" is the value
  //"setTitle" is a function that update the value
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!"); //schimba valoarea
  //   console.log(title);
  // };

  //JSX
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate dateExpense={props.date} />
        <div className="expense-item__description">
          <h2>{props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>{" "}
    </li>
  );
};
export default ExpenseItem;
