import { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
