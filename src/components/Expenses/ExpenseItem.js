// import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  // const expenseDate=new Date(2020,4,24);
  // const expenseTitle='Car Insurance';
  // const expenseAmount=5000;
  // const [title, setTitle] = useState(props.title);
  let title = props.title;
  const date = props.date;
  // const clickHandler = () => {
  //   // console.log("clicked!!!!!!!!!");
  //   // title='updated'
  //   setTitle("updated!!!!");
  // };
  return (
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}
export default ExpenseItem;
