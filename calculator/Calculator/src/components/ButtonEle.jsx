import styles from "./ButtonEle.module.css";
function ButtonEle({ value }) {
  value = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {value.map((val) => {
       return <button className={styles.ButtonEle}>{val}</button>;
      })}
    </>
  );
}

export default ButtonEle;
