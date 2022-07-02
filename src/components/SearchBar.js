import React from 'react';
import styles from '../styles/searchBar.module.css';
import searchIcon from '../images/icons/search.svg';

function SearchBar() {
    return(
        <div class={styles.searchBar}>
            <div class={styles.searchBarWrapper}>
            <div class={styles.innerSearchBar}>
                <img src={searchIcon} />
                <input type="text" placeholder="Find what you are looking for..." />
            </div>

            <div class={styles.emptySpace}>
            </div>
            </div>
        </div>
    )
}

export default SearchBar;