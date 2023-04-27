
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
                <h5 className={styles['address-info-title']}>Административен адрес:</h5>
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
        <>
            <h2 className={styles.title}>Намерени съвпадения:</h2>
            <section className={styles.address}>
                {address}
            </section>
        </>
    );
}

export default AddressList;

//search
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z"/></svg> */ }
//location
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> */ }
