import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
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

  


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items = {filteredExpenses}/>
        {/* {expenseContent} Points to the expenseContent variable */}
      </Card>
    </div>
  );
};

export default Expenses;