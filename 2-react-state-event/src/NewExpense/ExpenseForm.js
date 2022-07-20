import React, {useState} from 'react';
import './ExpenseForm.css'


const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState('initState');
  const [amount, setAmount] = useState('initState');
  const [enterDate, setEnterDate] = useState('initState');

  const [userInput, setUserInput] = useState([{
    enterTitle : '',
    enterAmount : '',
    enterDate : '',
  }]);


  const titleChangeHandler = (event) => {
    setEnterDate(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enterTitle,
      amount: amount,
      date: new Date(enterDate)
    }

    console.log(expenseDate)
  }

  return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>App Expense</button>
      </div>
    </div>
  </form>;
}

export default ExpenseForm;