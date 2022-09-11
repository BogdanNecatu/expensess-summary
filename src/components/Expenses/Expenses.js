import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChar from "./ExpenseChar";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFiltredByYear, setSelectedFiltredByYear] = useState("2020");

  const filtredByYear = (selectedYear) => {
    setSelectedFiltredByYear(selectedYear);

    console.log("In the Expense.js");
    console.log(selectedYear);
  };

  const filtredYearExpense = props.items.filter((expense) => {
    //the filter array by year
    return expense.date.getFullYear().toString() === selectedFiltredByYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={selectedFiltredByYear}
          onFiltredByYear={filtredByYear}
        />
        <ExpenseChar expenses={filtredYearExpense} />
      </div>
      <ExpensesList items={filtredYearExpense} />
    </Card>
  );
};
export default Expenses;
