import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';
function SearchBar({ keyword, keywordChange }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <div className='search-bar'>
            <input
                className=""
                type="text"
                placeholder={locale === 'id' ? 'Cari berdasrkan nama' : 'Search by name'}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)} />
        </div>
        
    )
}
 
SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}
 
export default SearchBar;