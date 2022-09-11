import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*///////////////////////Alternativa la ce este mai sus//////////////
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmont: "",
  //   enteredDate: "",
  // });
/*/ /////////////////////se incheie alternativa////////////////////

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*//////////////////////Alternativa la ce este mai sus//////////////
    // setUserInput({ ...userInput, setEnteredTitle: event.target.value }); //exist o alternativa mai buna este folosind functii
  setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }; //daca depinzi de un State anterior este cea mai buna versiune de ales
    });
  */ //////////////////////se incheie alternativa////////////////////
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-312"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelForm}>
          {" "}
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
