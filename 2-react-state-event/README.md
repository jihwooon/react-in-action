# React Start

### 목표 (Goals)
이번 목표는 리액트 중 state에 대해서 공부합니다.  
리액트에서 state는 상태가 변경되면, 컴포넌트는 리렌더링됩니다.

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

## useState은 무엇인가요?

useState은 컴포넌트 함수가 다시 호출된 값을 반영하기 위해 `state`로 값을 정의할 수 있게 해주는 함수 입니다.
React 라이브러를 호출합니다. 라이브러리 안에 `{useState}`를 추가 해줍니다.  
useState를 어디에 사용하면 될까요? 리액트 컴포넌트 함수 안에 호출해야 합니다.

useState(프로퍼티.값)을 입력하고 setTitle을 등록하면 상태가 변화 되는 것을 볼 수 있습니다.


## 요약 (Summary)


## reference
* [State and Lifecycle](https://ko.reactjs.org/docs/state-and-lifecycle.html)