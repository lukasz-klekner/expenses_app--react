import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ expense }) => (
  <div className='expense-item'>
    <ExpenseDate date={expense.date} />
    <div className='expense-item__description'>
      <h2>{expense.title}</h2>
      <div className='expense-item__price'>${expense.amount}</div>
    </div>
  </div>
)

export default ExpenseItem
