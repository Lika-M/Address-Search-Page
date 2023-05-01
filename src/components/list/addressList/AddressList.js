import AddressItem from '../addressItem/AddressItem.js';
import styles from './AddressList.module.css';

const AddressList = ({ list, isFound }) => {

    return (
        <section className={styles.list}>
            {list.length > 0 &&
                <>
                    <div className={styles.separator}></div>
                    <h2 className={styles['list-title']}>Намерени съвпадения:</h2>
                    <div className={styles.address}>
                        {list.map((x, i) => <AddressItem key={i} content={x} />)}
                    </div>
                </>}
            {!list.length && isFound &&
                <>
                    <div className={styles.separator}></div>
                    <h2 className={styles['list-title']}>Не са открити съвпадения:</h2>
                </>}

        </section>
    );
}

export default AddressList;

