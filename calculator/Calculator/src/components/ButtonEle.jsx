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
  "9",
  "0",
  "<-",
  ".",
  "=",
];
function ButtonEle({ DisplayValue }) {
  return (
    <>
      {buttonValues.map((val) => (
        <button
          key={val}
          className={styles.ButtonEle}
          onClick={(event) => {
            DisplayValue(event);
          }}
        >
          {val}
        </button>
      ))}
    </>
  );
}

export default ButtonEle;
