import styles from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <ul className={styles['list']}>
                <li className={styles['bold-item']}>Консултиране</li>
                <li className={styles['item']}>Разработка и внедряване</li>
                <li className={styles['item']}>Услуги</li>
                <li className={styles['item']}>Системна интеграция</li>
                <li className={styles['item']}>Поддръжка</li>
                <li className={styles['item']}>Запитване и оферта</li>
            </ul>
            <div className={styles.rectangle}></div>
        </aside>
    );
}

export default Aside;