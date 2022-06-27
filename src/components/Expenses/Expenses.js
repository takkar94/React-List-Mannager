import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  //responsible for changing the the filtered data visually  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //responsible for changing the contents of the list
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  //optimizing the jsx conditional statements
  let expenseContent = <p>No Expense Found</p>


  if(filteredExpenses.length >0 ) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent} {/* Points to the expenseContent variable */}
      </Card>
    </div>
  );
};

export default Expenses;