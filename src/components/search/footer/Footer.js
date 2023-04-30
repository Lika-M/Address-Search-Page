import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>
        <>
            <div className={styles.separator}></div>
            <div className={styles['footer-text']}>
                &#10026; designed by Lika-M &copy; 2023 &#10026;
            </div>
        </>
    </footer>
    );
}

export default Footer;