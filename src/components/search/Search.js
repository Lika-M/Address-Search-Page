import { useState, useEffect } from 'react';

import * as service from '../../services/addressService.js'
import AddressList from '../list/AddressList.js';
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState({ list: [], display: false });
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (search.length > 0) {
            service.getSuggested(search)
                .then(res => setSelected({ list: res, display: true }))
            //.catch(err => console.log(err))
        }
    }, [search])

    const onChange = (ev) => {
        setSearch(ev.target.value);
        setSelected({ list: [], display: false });
        // setResult([]);
    };

    const onClose = () => {
        setSearch('');
        setSelected({ list: [], display: false });
        setResult([]);
    };

    const onFocus = (ev) => {
        if(ev.target.value === search){
            // setResult([]);
            return;
        }
      
        setSelected(state => ({
            ...state,
            display: true
        }));
    };

    const onSelect = (ev) => {
        if (ev.target.textContent.length === 0) {
            return;
        }

        service.getAddress(ev.target.textContent)
            .then(res => setResult(res))
        // .catch(err => console.log(err));

        setSelected(state => ({
            ...state,
            display: false
        }));

    }

    return (
       
        <section className={styles.search}>
            <article className={styles.header}>
                <img className={styles['header-img']} src="images/geo.jpg" alt="Geo" />
                <h1 className={styles['header-title']}>Търсене на адреси</h1>
            </article>

            <article className={styles.content}>
                <div className={styles['content-image-wrapper']}>
                    <img className={styles['content-image']} src="images/bulgaria-map.jpg" alt="Map" />
                </div>
                <div className={styles['container']}>
                    <form className={styles['container-form']}>
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
                                onClick={onClose}>
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
                                onClick={onSelect}
                            >
                                {x.text}
                            </li>))}
                        </ul>
                    )}
                </div>
            </article>
        {result.length > 0 && <AddressList list={result}/>}
        </section>
     
    );

}

export default Search;