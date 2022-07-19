# React Start

## React state 정적 상태를 동적인 상태로 변환 하는 것이다.

state 상태에 따라 값이 변합니다.
state 하는 이유는 어떤 이벤트에 발생 했을 때 그 이벤트가 상태 변화를 할 수 있습니다.

## 이벤트 리스닝과 이벤트 핸들러

이벤트 리스닝은 특정한 이벤트 대해서 일어날 동작을 정의 할 수 있습니다.  
지정된 타입의 이벤트가 특정 요소에서 발생하면, 웹 브라우저는 그 요소에 등록된 이벤트 리서너를 실행 시킵니다.  
이벤트 리스너와 이벤트ㅡ 핸드러를 합쳐 이벤트 리스너라고 합니다.  

| 이벤트 | 이벤트 리스너 | 이벤트 핸들러      |
|------|---------|--------------|
| click | onclick | function(){} |

우리가 일반적으로 알고 있는 click을 클릭 했을 때 이벤트 리스너에서 이벤트 핸들러로 반응합니다.

## 컴포넌트 기능에서 상태 변화 실행 되는 방법

아래 코드를 확인 합니다.

```javascript
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
```

`<h2>{title}</h2>` 클릭 이벤트가 발생 할 때마다 title를 변화하려고 합니다.  
하지만 리액트에서는 상태가 변화가 되지 않습니다. 왜 그럴까요?  
### 리액트는 컴포넌트가 함수형입니다.   
컴포넌트는 일반적인 함수이고 그 함수의 특별한 점은 JSX코드로 반환합니다.  
즉 이 함수를 누군가가 호출해야 합니다.
JSX 코드 안에 있는 컴포너트를 이용해서 리액트가 우리의 컴포넌트 함수를 인식하도록 만들었습니다.  

`index.js` -> `App.js` -> `Expenses` -> `ExpenseItem`-> `ExpenseDate` 순으로 컴포넌트 함수를 따라 호출 합니다.  
이 컴포넌트는 JSX코드를 통과하여 다음 호출 할 컴포넌트 코드가 더 이상 남아있지 않을 때까지 통과합니다.

이 모든 과정에서 리액트는 절대 반복하지 않습니다. 응용 프로그램이 처음 렌더링 되었을 때 모든 과정을 실행 한 후 끝냅니다.

그래서 리액트에 어떤 것이 변경이 되었을 때 특정 컴포넌트는 재평가 해야 합니다.

리액트에서 state 개념을 도입합니다.
