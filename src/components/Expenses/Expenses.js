import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022')
  const [filteredExpenses, setFilteredExpenses] = useState(expenses)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    const newExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    )

    setFilteredExpenses(newExpenses)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
