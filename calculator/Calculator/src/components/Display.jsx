import styles from "./Display.module.css";
function Display({ DisplayValue }) {
  return (
    <div>
      <input
        type="text"
        className={styles.Display}
        placeholder="Expression"
        value={DisplayValue}
        readOnly
      />
    </div>
  );
}
export default Display;
