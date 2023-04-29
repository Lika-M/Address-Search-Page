import { useState, useEffect } from 'react';

import * as service from '../../services/addressService.js'
import AddressList from '../list/addressList/AddressList.js';
import Aside from './aside/Aside.js';
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState({ list: [], display: false });
    const [result, setResult] = useState({ data: [], isFound: false });

    useEffect(() => {
        if (search.length > 0) {
            service.getSuggested(search)
                .then(res => setSelected({ list: res, display: true }))
                .catch(err => console.log(err))
        }
    }, [search])

    const onChange = (ev) => {
        setSearch(ev.target.value);
        setSelected({ list: [], display: false });
        setResult(state => ({
            ...state,
            isFound: false
        }));
    };

    const onClose = (ev) => {
        if (ev.target.tagName === 'BUTTON') {
            return;
        }
        setSearch('');
        setSelected({ list: [], display: false });
    };

    const onFocus = (ev) => {
        if (ev.target.value === search) {
            setResult(state => ({
                ...state,
                isFound: false
            }));
        }
        setSelected(state => ({
            ...state,
            display: true
        }));
    };

    const onSelectHandler = (ev) => {
        getData(ev.target.textContent);
    };

    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const searchData = Object.fromEntries(formData).search.trim().split(',').join(', ');

        getData(searchData);
    };

    const getData = (data) => {
        const currentList = result.data.map(x => x.address.toLowerCase());

        if (data === '' || currentList.includes(data.toLowerCase())) {
            return;
        }

        service.getAddress(data)
            .then(res => setResult({ data: res, isFound: true }))
            .catch(err => console.log(err));

        setSelected(state => ({
            ...state,
            display: false
        }));
    };

    return (
        <main className={styles.search}>
            <header className={styles.header}>
                <img className={styles['header-img']} src="images/geo.jpg" alt="Geo" />
                <h1 className={styles['header-title']}>Търсене на адреси</h1>
            </header>
            <section className={styles.main}>
                <Aside />
                <article className={styles.content}>
                    <div className={styles['content-image-wrapper']}>
                        <img className={styles['content-image']} src="images/bulgaria-map1.jpg" alt="Map" />
                    </div>
                    <div className={styles['container']}>
                        <form className={styles['container-form']} onSubmit={onSubmitHandler}>
                            <input
                                type="text"
                                className={styles['container-form-input']}
                                name="search"
                                onChange={onChange}
                                onFocus={onFocus}
                                value={search}
                                placeholder="Въведете населено място или адрес"
                            />
                            {search.length > 0 &&
                                <button
                                    className={styles['container-form-close-btn']}
                                    onClick={onClose}
                                >
                                    <span> &#10005;</span>
                                </button>}
                            <button type="submit"
                                className={styles['container-form-btn']} >
                                <span className={styles['container-form-btn-search']}> &#9740;</span>
                            </button>
                        </form>
                        {selected.list.length > 0 && selected.display && (
                            <ul className={styles['container-result']}>
                                {selected.list.map(x =>
                                (<li
                                    key={x.magicKey}
                                    className={styles['container-result-item']}
                                    onClick={onSelectHandler}
                                >
                                    {x.text}
                                </li>))}
                            </ul>
                        )}
                    </div>
                </article>
            </section>
            <div className={styles.separator}></div>
            <section className={styles.list}>
                {result.data.length > 0 &&
                    <div>
                        <h2 className={styles['list-title']}>Намерени съвпадения:</h2>
                        <AddressList list={result.data} />
                    </div>}
                {!result.data.length && result.isFound &&
                    <h2 className={styles['list-title']}>Не са открити съвпадения:</h2>}
            </section>
        </main>
    );

}

export default Search;