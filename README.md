# React 완벽 가이드

작성자: 안지환  
마지막 수정일: 2022.07.22

### 브랜치 구성
* 1-basic-react : 리액트 기초
* 2-react-state-event : 리액트 State 관리 및 이벤트
* 3-react-rendering-conditional : 렌더링 리스트 및 조건부 Content

### 배경 (Background)  
BackEnd 구성만으로는 프로젝트에 완성도가 많이 떨어집니다. 그래서 View(화면)에 해당 하는 부분을 공부 하기 위해서 React를 공부를 하게 되었습니다.  
자바스크립트의 이해도와 HTML, CSS 지식도 익히기 위해서 공부의 필요성을 느끼게 되었습니다.

### 목표 (Goals)
정해진 기간 안에 리액트를 이해하는 것이 목표입니다.
리액트를 배운 후에 Spring 프레임워크와 연동을 해서 스프링에서 제공해주는 API Spec 을 화면에 의도에 맞게 개발 할 수 있습니다.

### 목표가 아닌 것 (Non-goals)
React의 깊은 지식과 React 외 다른 프레임워크, 라이브러리 등 주제에 벗어난는 공부를 지양합니다.
예) HTML 동작 원리, CSS 구성, DOM의 원리 등 깊은 지식은 이번 목표가 아닙니다.

자바스크립트와 CSS, HTML, Node.js 지식이 기본이 부족하다고 해서 지금 학습 하고 있는 것을 놔두고 기본 학습으로 가지 않습니다.
정해진 기간 안에 리액트를 이해하는것이 목표입니다. 그 외에 부족한 공부는 다른 시간이나 다른 기간에 진행 하도록 계획을 수정해야 합니다.
계획 (Plan)
앞으로 계획은 아래와 같습니다.

[Trello - 리액트 완벽 가이드](https://trello.com/c/dyyDR6UC) 내에 CheckList 을 확인 후 전날 계획을 확인합니다.  
다음 [React 완벽 가이드](https://www.udemy.com/course/best-react/) 강의을 준비합니다.  
한 강의가 들을 때는 Input 방식이 아닌 Output 방식(인출 학습)으로 공부를 진행 할 예정입니다.  
강의 시작 전에 브랜치를 새로 생성합니다. 강의가 끝 난 후에는 git 브랜치를 main으로 변경한 후 피드백을 반영하기 위한 새로운 브랜치를 생성한 후 처음부터 다시 구현을 도전합니다.  

```git
git branch -a // 모든 로컬 브랜치 확인
git checkout main

git checkout -b 브랜치이름
ex) git checkout -b apply-feedback
```

강의 끝난 후에 필수 개념 및 중요한 내용은 **README.md**로 정리합니다.

마지막에 TIL 작성에서 오늘 배운 내용에 대해서 Fact/Feeling/Finding 으로 정리 해 기록을 남깁니다.

### 이외 고려사항들 (Other Considerations)
모르는 내용이나 어려운 개념이 나오면 30분정도 고민을 한 후 해결이 안 될 시 넘깁니다. 뒤에 따라올 내용에서 어려운 내용을 반복적으로 다룰 수 있기 때문에 무조건 오래 붙잡고 있기 보다는 기간 내에 따라 간다는 생각으로 목표를 설정합니다.
기본 지식이 부족하다고 해서 기본으로 다시 돌아가면 계획을 못 끝 낼 수 있으니 계획을 우선적으로 지키는 것을 합니다. 기술의 부채는 추후에 채우도록 합니다.

### 마일스톤 (Milestones)
7/19 : React 완벽 가이드 개발 문서 작성, React 세션 4: 리액트 State 및 이벤트 다루기 강의 시청  
7/20 : 세션 4: 리액트 State 및 이벤트 다루기 (52 ~ 57) 강의 시청 및 정리, 모듈 정리  
7/22 : 세션 4: 리액트 State 및 이벤트 다루기 (57 ~ 59) 강의 시청 및 정리, 모듈 정리
