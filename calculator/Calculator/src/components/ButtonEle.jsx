import styles from "./ButtonEle.module.css";

const buttonValues = [
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

function ButtonEle({ value = buttonValues }) {
  return (
    <>
      {value.map((val) => (
        <button
          key={val}
          className={styles.ButtonEle}
          onClick={(event) => {
            console.log(event.target.innerText);
          }}
        >
          {val}
        </button>
      ))}
    </>
  );
}

export default ButtonEle;
