import styles from './CalculatorGrid.module.css';
function CalculatorGrid({ children }) {
    return (
        <div className={styles.CalculatorGrid}>
            {children}
        </div>
    )
}
export default CalculatorGrid;