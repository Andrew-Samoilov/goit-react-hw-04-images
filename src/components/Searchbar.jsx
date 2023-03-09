import { useState } from "react";
import css from "./styles.module.css";

export const Searchbar = ({pageS, onSubmit}) => {
    const [inputSearch, setInpSrc] = useState('');
    const [page] = useState('');

    const handleChange = e => {
        // this.setState({ [e.currentTarget.name]: e.currentTarget.value, });
        if (e.currentTarget.name === 'inputSearch') {
            setInpSrc(e.currentTarget.value);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (inputSearch.trim() === '') {
            console.log(`No input, nothing search`);
            return;
        }
        console.log(`Search bar`,inputSearch);
        onSubmit(inputSearch);
        pageS(page);
   
    };

        return (
            <header className={css.Searchbar}>

                <form className={css.SearchForm}
                    onSubmit={handleSubmit}>
                    <button type="submit"
                        className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        name="inputSearch"
                        autoFocus
                        onChange={handleChange}
                        value={inputSearch}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
};
