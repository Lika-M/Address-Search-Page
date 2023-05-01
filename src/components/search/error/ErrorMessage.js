import styles from './ErrorMessage.module.css';

const ErrorMessage = ({error}) => {
    return (
        <div className={styles['error']}>
            <span className={styles['error-message']}>Възникна следната грешка: </span>
            <span className={styles['error-content']}>{error.message}</span>
            <p className={styles['error-message']}>Моля, опитайте отново!</p>
        </div>
    );
}

export default ErrorMessage;