import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {id: 'e1', title: 'Total Paper', amount: 94.12, date: new Date(2021, 2, 28)},
    {id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 27)},
    {id: 'e3', title: 'Car Existence', amount: 256.12, date: new Date(2021, 4, 15)},
    {id: 'e4', title: 'Paper Company', amount: 100.12, date: new Date(2022, 3, 20)}
  ];

  return (
      <div>
        <NewExpense/>
        <Expenses items={expenses}/>
      </div>
  );
}

export default App;
