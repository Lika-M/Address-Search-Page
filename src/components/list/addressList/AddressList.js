import AddressItem from '../addressItem/AddressItem.js';
import styles from './AddressList.module.css';

const AddressList = ({ list }) => {

    return (
        
        <div className={styles.main}>
            <section className={styles.address}>
                {list.map((x, i) => <AddressItem key={i} content={x} />)}
            </section>
        </div>
    );
}

export default AddressList;

