import AddressItem from '../addressItem/AddressItem.js';

const AddressList = ({ list }) => {

    return (
        <section className={styles.address}>
            {list.map((x, i) => <AddressItem key={i} content={x} />)}
        </section>

    );
}

export default AddressList;

