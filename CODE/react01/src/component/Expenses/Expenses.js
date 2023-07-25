import React, { useState } from "react";

import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onSaveYearData={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
      
    </Card>
  );
}

export default Expenses;
