// import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const Initial_expenses = [
    {
      id: "e1",
      title: "Car leni hai",
      amount: 5500000,
      date: new Date(2020, 4, 25),
    },
    {
      id: "e2",
      title: "T.V kharidna hai!",
      amount: 50000,
      date: new Date(2021, 2, 15),
    },
    {
      id: "e3",
      title: "Sofa Kharidna hai!",
      amount: 35000,
      date: new Date(2019, 11, 30),
    },
    {
      id: "e4",
      title: "Ek nya iphone lena hai",
      amount: 150000,
      date: new Date(2023, 7, 24),
    },
    {
      id: "e5",
      title: "Ek nya phone lena hai",
      amount: 15000,
      date: new Date(2019, 7, 24),
    },
  ];
  const [expenses, setExpenses] = useState(Initial_expenses);

  const addExpenseHandler = (expense) => {
    // console.log("app.js");
    // console.log(expense);
    // setExpense(expense, ...expenses);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
