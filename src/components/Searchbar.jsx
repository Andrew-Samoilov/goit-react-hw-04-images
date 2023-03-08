import { Component } from "react";
import css from "./styles.module.css";
// import { BsSearch } from 'react-icons/bs';

export default class Searchbar extends Component {
    state = {
        inputSearch: '',
        page: 1,
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value, });
    };

    handleSubmit = e => {
        e.preventDefault();
  
        if (this.state.inputSearch.trim() === '') {
            console.log(`No input, nothing search`);
            return;
        }

        // if (this.state.inputSearch === this.props.onSubmit) {
        //     console.log(`Same qerries`);
        //     return;
        // }

        this.props.onSubmit(this.state.inputSearch);
        this.props.page(this.state.page);
        // console.log(this.state);
        // this.setState({ inputSearch: '' });
    };

    render() {
        return (
            <header className={css.Searchbar}>
        
                <form className={css.SearchForm}
                    onSubmit={this.handleSubmit}>                  
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
                        onChange={this.handleChange}
                        value={this.state.inputSearch}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
};
