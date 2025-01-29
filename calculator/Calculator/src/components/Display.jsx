import styles from "./Display.module.css";
function Display({DisplayValue}) {
  
  return (
    <div>
      <input
        type="text"
        className={styles.Display}
        placeholder="Expression"
        onChange={DisplayValue}
      />
    </div>
  );
}
export default Display;
