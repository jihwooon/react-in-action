# React Start

### React 철학
* **하나의 종속성**: 하나의 빌드 종속성만 있습니다. webpack, Babel, ESLint 및 기타 놀라운 프로젝트를 사용하지만 그 위에 응집력 있는 선별된 경험을 제공합니다.  
* **오직 하나의 의존성** : 앱에는 빌드 종속성이 하나만 필요합니다. 우리는 모든 기본 조각이 원활하게 함께 작동하는지 확인하기 위해 반응 응용 프로그램을 만들기 테스트 - 복잡한 버전 불일치가 없습니다.  
* **No Lock-In** : 내부적으로 webpack, Babel, ESLint 및 기타 놀라운 프로젝트를 사용하여 앱을 강화합니다. 고급 구성이 필요한 경우 Create React App에서 "꺼내기"하고 구성 파일을 직접 편집할 수 있습니다


## 1. Getting Started

```javascript
npx create-react-app 1-basic-react
cd 1-basic-react
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
    │   ├──Expenses
    │   │    ├──ExpenseDate.css
    │   │    ├──ExpenseDate.js
    │   │    ├──ExpenseItem.css
    │   │    ├──ExpenseItem.js
    │   │    ├──Expenses.css
    │   │    └──Expenses.js
    │   └──UI
    │      ├──Card.css
    │      └──Card.js
    ├── App.js
    ├── index.css
    └── index.js   
```

## 2. 컴포넌트란 무엇인가?
리액트는 복잡한 사용자 인터페이스 작업을 훨씬 더 수월하게 해줍니다.  
응용 프로그램을 구성하는 핵심 비즈니스 로직에 집중 할 수 있게 합니다.  
어떤 일이 발생 했을 때 페이지를 업데이트 하는 작업들에 집중을 대신 합니다.
이러한 이유가 리액트 라이브러리를 사용하는 이유 중 하나입니다.

리액트는 `컴포넌트` 라는 개념을 받아 들였습니다. 리액트에는 컴포넌트가 전부입니다.
그 이유는 무엇일까요? 모든 사용자 인터페이스들은 결국 컴포넌트로 구성이 되어 있습니다.
우리가 보는 모든 사용자 인터페이스에서 중요한 것입니다. 사용자 인터페이스에서 재사용할 수 있는 블럭을 생성합니다.
결국 컴포넌트는 html 코드와 css 코드 그리고 자바스크립트의 결합 입니다.

리액트가 컴포넌트 개념을 도입한 것은 재사용성, 관심사 분리를 할수 있도록 해주기 때문입니다.

이 개념을 받아들인 이유로 커다란 파일 대신 각각의 컴포넌트 하나의 명확한 과제 초점에만 집중 할 수 있습니다.

리액트는 함수의 개념을 가져와 여러 함수로 코드를 분리하고 프론트엔드 웹 응용프로그램을 위한 코드를 해석합니다.
코드를 여러 개의 컴포넌트로 나누어서 우리가 필요할 때 짜 맞춰서 전체 사용자 인터페이스를 구축하는 할 수 있습니다.

## 3. JSX는 무엇인가?

`HTML in JavaScript` 자바스크립트 안에 Html 코드를 의미합니다.  
결국 jsx는 자바스크립트의 xml을 뜻하기도 합니다.  
JSX 구문을 사용하면 브라우저에서는 지원하지 않지만 브라우저에서 작동하는 코드로 변환 될 것입니다.


* [JSX 이해하기](https://ko.reactjs.org/docs/jsx-in-depth.html)


## 4. 리액트 동작 방식

리액트는 실제로 화면에 보이는 것을 업데이트하는 DOM 지시사항들을 생성하고 실행하는 역활을 하고 있습니다.
HTML 문서를 이루는 엘리먼트 브라우저가 HTML 문서를 읽어 들이면서 DOM 엘리먼트 되고, 이 DOM이 화면 인터페이스를 표시합니다.
리액트에는 가상의 돔(Virtual Dom)을 생성하고 브라우저가 렌더링하도록 하는 방식을 따릅니다.

<img src = "https://user-images.githubusercontent.com/68071599/179643131-4fa4feb0-3ef1-4298-be3a-9627f43664af.JPG" width="300" height="200"/>
<img src = "https://user-images.githubusercontent.com/68071599/179644494-3f0e4af2-7a18-40d0-b432-aeb9924fc317.JPG" width="300" height="200"/>
<img src = "https://user-images.githubusercontent.com/68071599/179644502-84b7b935-354a-49ca-ba20-372e83a827a3.JPG" width="300" height="200"/>


## 5. 컴포지션(Composition)의 개념

컴포지션을 사용하는 이유는 `컴포넌트 간에 코드를 재사용`하는 것이 좋습니다.  
자주 쓰이는 범용적인 Box 형태의 컴포넌트를 `childern prop`으로 전달을 합니다.  

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

복잡한 JSX구조를 가진 좀 더 복잡한 중복 코드를 추출하여 수많은 코드 중복을 피할 수 있게 해주고 다른 컴포넌트를 깔끔하게 유지할 수 있게 해줍니다.

* [합성 (Composition) vs 상속 (Inheritance)](https://ko.reactjs.org/docs/composition-vs-inheritance.html)



