import styles from "./Buttons.module.css";
function Buttons({ changeColor }) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} font-bold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 `}
        onClick={() => changeColor("red")}
      >
        Red
      </button>
      <button
        className={`${styles.btn} font-bold bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
        onClick={() => changeColor("green")}
      >
        green
      </button>
      <button
        className={`${styles.btn} font-bold bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        onClick={() => changeColor("blue")}
      >
        blue
      </button>
    </div>
  );
}
export default Buttons;
