import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  )
}

export default Expenses
