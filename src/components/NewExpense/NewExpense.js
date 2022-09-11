import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [introduceNewForm, setIntroduceNewForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //se executa functia creata in parinte si se adauga data creata in component
    setIntroduceNewForm(false);
  };

  const activateFormHandler = () => {
    setIntroduceNewForm(true);
  };

  const cancelFormHandler = () => {
    setIntroduceNewForm(false);
  };

  return (
    <div className="new-expense">
      {!introduceNewForm && (
        <button onClick={activateFormHandler}>Add New Expense</button>
      )}
      {introduceNewForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
