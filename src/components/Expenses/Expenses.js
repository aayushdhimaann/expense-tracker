// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filterIntoText,setFilterIntoText]=useState("2019,2021,2023");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
    // if(selectedYear==='2019'){
    //   setFilterIntoText("2020,2021,2023")
    // }
    // else if(selectedYear==="2021"){
    //   setFilterIntoText("2019,2020,2023")
    // }
    // else{
    //   setFilterIntoText("2019,2020,2021")
    // }
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses);

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <p>data for {filterIntoText} years are hidden</p> */}
        {/* {expenseContent} */}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
