import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear)

  return (
    <div>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className='expenses'>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
