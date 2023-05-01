import { useState, useEffect } from 'react';

import * as service from '../../../services/addressService.js'
import AddressList from '../../list/addressList/AddressList.js';
import Aside from '../aside/Aside.js';
import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import ErrorMessage from '../error/ErrorMessage.js';
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState({ list: [], visibility: 'hidden' });
    const [result, setResult] = useState({ data: [], isFound: false });
    const [error, setError] = useState({});

    useEffect(() => {
        if (search.length > 0) {
            service.getSuggested(search)
                .then(res => setSelected({ list: res, visibility: 'visible' }))
                .catch(err => setError(err));
        }
    }, [search])

    const onChange = (ev) => {
        setSearch(ev.target.value);
        setSelected({ list: [], visibility: 'hidden' });
        setResult(state => ({
            ...state,
            isFound: false
        }));
        setError({});
    };

    const onClose = (ev) => {
        if (ev.target.tagName === 'BUTTON') {
            return;
        }
        setSearch('');
        setSelected({ list: [], visibility: 'hidden' });
        setError({});
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
            visibility: 'visible'
        }));
        setError({});
    };

    const onBlur = () => {
        setSelected(state => ({
            ...state,
            visibility: 'hidden'
        }));
    }

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
            .catch(err => setError(err));

        setSelected(state => ({
            ...state,
            visibility: 'hidden'
        }));
    };

    return (
        <div className={styles.search}>

            <Header />

            <section className={styles.main}>
                <Aside />
                <article className={styles.content}>
                    <div className={styles['content-image-wrapper']}>
                        <img className={styles['content-image']} src="images/bulgaria-map.jpg" alt="Map" />
                    </div>
                    <div className={styles['container']}>
                        <form className={styles['container-form']} onSubmit={onSubmitHandler}>
                            <input
                                type="text"
                                className={styles['container-form-input']}
                                name="search"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
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
                        {selected.list.length > 0 && (
                            <div className={styles['container-result-wrapper']}
                                style={{ visibility: selected.visibility }}>
                                <ul className={styles['container-result-list']}>
                                    {selected.list.map(x =>
                                    (<li
                                        key={x.magicKey}
                                        className={styles['container-result-item']}
                                        onClick={onSelectHandler}
                                    >
                                        {x.text}
                                    </li>))}
                                </ul>
                            </div>)}
                    </div>
                </article>
            </section>

            {result.data.length > 0 && <AddressList list={result.data} isFound={result.isFound} />}

            {error.message && <ErrorMessage error={error} />}

            <Footer />

        </div>
    );

}

export default Search;