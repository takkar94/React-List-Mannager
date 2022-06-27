import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //let title = props.title;
  const [titles, setTitles] = useState(props.title);
  const clickHandler = () => {
    setTitles("Updated");
    console.log(titles);
  };

  console.log(clickHandler);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titles}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/*<button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
