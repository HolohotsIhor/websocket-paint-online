import styles from './Grid.module.scss';

export const Grid = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.gridItem}>item 1</div>
            <div className={styles.gridItem}>item 2</div>
            <div className={styles.gridItem}>item 3</div>
            <div className={styles.gridItem}>item 1</div>
            <div className={styles.gridItem}>item 2</div>
            <div className={styles.gridItem}>item 3</div>
            <div className={styles.gridItem}>item 1</div>
            <div className={styles.gridItem}>item 2</div>
            <div className={styles.gridItem}>item 3</div>
            <div className={styles.gridItem}>item 1</div>
            <div className={styles.gridItem}>item 2</div>
            <div className={styles.gridItem}>item 3</div>
        </div>
    );
}
