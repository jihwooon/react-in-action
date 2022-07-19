//Todo : 컴포넌트 기능이 실행 되는 방법
//Todo : State 와 함께 일하기
//Todo : useState 훅 자세히 살펴보기
//Todo : 양식 입력 추가하기
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  let title = props.title;

  const clickHandler = () => {
    title = 'Updated!';
    console.log(title)
  }

  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title
        </button>
      </Card>
  );
}

export default ExpenseItem;