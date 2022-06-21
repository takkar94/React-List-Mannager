
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-UK", { month: "long" });
  const day = props.date.toLocaleString("en-UK", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
