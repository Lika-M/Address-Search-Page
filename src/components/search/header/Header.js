import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <img className={styles['header-img']} src="images/geo.jpg" alt="Geo" />
            <h1 className={styles['header-title']}>Търсене на адреси</h1>
        </header>
    );
}

export default Header;
