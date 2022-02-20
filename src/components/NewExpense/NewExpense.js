import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const [isFormShown, setIsFormShown] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString(),
    }

    onAddExpense(expenseData)
    toggleExpense()
  }

  const toggleExpense = () => setIsFormShown((prevState) => !prevState)

  return (
    <div className='new-expense'>
      {isFormShown ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleExpense}
        />
      ) : (
        <button onClick={toggleExpense}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
