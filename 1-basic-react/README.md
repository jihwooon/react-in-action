# React Start

### React 철학
* **하나의 종속성**: 하나의 빌드 종속성만 있습니다. webpack, Babel, ESLint 및 기타 놀라운 프로젝트를 사용하지만 그 위에 응집력 있는 선별된 경험을 제공합니다.  
* **오직 하나의 의존성** : 앱에는 빌드 종속성이 하나만 필요합니다. 우리는 모든 기본 조각이 원활하게 함께 작동하는지 확인하기 위해 반응 응용 프로그램을 만들기 테스트 - 복잡한 버전 불일치가 없습니다.  
* **No Lock-In** : 내부적으로 webpack, Babel, ESLint 및 기타 놀라운 프로젝트를 사용하여 앱을 강화합니다. 고급 구성이 필요한 경우 Create React App에서 "꺼내기"하고 구성 파일을 직접 편집할 수 있습니다


## 1. Getting Started

```javascript
npx create-react-app my-app
cd my-app
npm start
```
다음 http://localhost:3000 을 열어 앱을 확인합니다.  

프로젝트 구성은 다음과 같습니다.
```
1-basic-react
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├──components
    │   ├──ExpenseDate.css
    │   ├──ExpenseDate.js
    │   ├──ExpenseItem.css
    │   ├──ExpenseItem.js
    │   ├──Expenses.css
    │   └──Expenses.js
    ├── App.js
    ├── index.css
    └── index.js   
```

## 2. 컴포넌트란 무엇인가? 리액트는 컴포넌트의 전부라고 하는가?



## 3. JSX는 무엇인가?


## 4. 리액트 동작 방식


## 컴포지션(Composition)의 개념

컴포지션을 사용하는 이유는 `컴포넌트 간에 코드를 재사용`하는 것이 좋습니다.  
자주 쓰이는 범용적인 Box 형태의 컴포넌트를 childern prop으로 전달을 합니다.  

```javascript
function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
```

```javascript
function ExpenseItem(props) {
  return (
      <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
  );
}
```

컴포넌트 간의 코드를 재사용을 하기 위해서는 `합성` 사용 할 수 있습니다.  
합성에서 중요한 부분은 `props.children`으로 래퍼 컴포넌트르 생성하게 하며 특별한 컴포넌트 입니다. 

### conclude
복잡한 JSX구조를 가진 좀 더 복잡한 중복 코드를 추출하여 수많은 코드 중복을 피할 수 있게 해주고 다른 컴포넌트를 깔끔하게 유지할 수 있게 해줍니다.

* [합성 (Composition) vs 상속 (Inheritance)](https://ko.reactjs.org/docs/composition-vs-inheritance.html)



