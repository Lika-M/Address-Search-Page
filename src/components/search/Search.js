import { useState, useEffect } from 'react';

import * as service from '../../services/addressService.js'
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState({ list: [], style: { display: 'none' } });

    useEffect(() => {
        if (search.length > 0) {
            service.getSuggested(search)
                .then(res => setSelected({ list: res, style: { display: 'inline' } }))
            //.catch(err => console.log(err))
        }
    }, [search])

    const onChange = (ev) => {
        setSearch(ev.target.value);
        setSelected({ list: [], style: { display: 'none' } });
    };

    const onClose = () => {
        setSearch('');
        setSelected({ list: [], style: { display: 'none' } });
    };

    const onFocus = () => {
        setSelected(state => ({
            ...state, 
            style: { display: 'block' }
        }));
    };

    const onFocusBlur = () => {
        setSelected(state => ({
            ...state, 
            style: { display: 'none' }
        }));
    };

    console.log(search)

    return (
        <form className={styles.search}>
            <div className={styles['search-container']}>
                <input
                    type="text"
                    className={styles['search-container-input']}
                    name="search"
                    onChange={onChange}
                    onBlur={onFocusBlur}
                    onFocus={onFocus}
                    value={search}
                    placeholder="Въведете населено място или адрес"
                />

                {search.length > 0 &&
                    <button
                        className={styles['search-container-close-btn']}
                        onClick={onClose}>
                        <span> &#10005;</span>
                    </button>}

                <button type="submit"
                    className={styles['search-container-btn']} >
                    <span className={styles['search-container-btn-search']}> &#9740;</span>
                </button>
            </div>

            {selected.list.length > 0 && (
                <ul className={styles['search-result']} style={selected.style}>
                    {selected.list.map(x =>
                    (<li
                        key={x.magicKey}
                        className={styles['search-result-item']}
                        onClick={() => console.log(x.text)}

                    >
                        {x.text}
                    </li>))}
                </ul>
            )}
        </form>
    );

}

export default Search;