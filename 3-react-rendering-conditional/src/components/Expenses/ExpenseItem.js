import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Change!');
    console.log(title)
  }

  const changeHandler = () => {
    setAmount('200,00')
  }

  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changeHandler}>Change Amount</button>
      </Card>
  );
}

export default ExpenseItem;