import styles from './AddressList.module.css';

const AddressList = ({ list }) => {

    list.map((x, i) => console.log(i, x))

    const address = list.map((x, i) => (
        <article className={styles['address-content']} key={i}>
            <div className={styles['address-content-preview']}>
                <div className={styles['address-content-preview-wrapper']}>
                    <img className={styles['address-content-preview-img']} src="/images/vector.jpg" alt="Vector img" />
                </div >
                <div className={styles['address-content-wrapper']}>
                    <svg className={styles['address-content-wrapper-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                </div>
            </div>
            <div className={styles['address-info']}>
                {/* <h5 className={styles['address-info-title']}>Административен адрес:</h5> */}
                <h4 className={styles['address-info-content']}>{x.address}</h4>
                <div>
                    <h5 className={styles['address-info-title']}>Координати: </h5>
                    <h6 className={styles['address-info-location']}>x: {x.location.x}</h6>
                    <h6 className={styles['address-info-location']}>y: {x.location.y}</h6>
                </div>
            </div>
        </article>
    ))

    return (
        <section className={styles.address}>
            {address}
        </section>

    );
}

export default AddressList;

