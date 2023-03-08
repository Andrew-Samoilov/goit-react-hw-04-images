import { Component } from "react";
import css from "./styles.module.css";

export default class Button extends Component {
    state = {
        page: 1,
    }

    onLoadMore = () => {
        // console.log(`onLoadMore`);
        // this.setState({page: this.state.page + 1 })
        this.props.onLoadMore(this.state.page);
    };

    render() {
        return (
            <button
                className={css.Button}
                onClick={this.onLoadMore}
                type="button">Load more
            </button>
        );
    }
}
