import React from "react";
import css from "./styles.module.css";

export const Button = ({ onLoadMore }) => {

    const handleLoadMore = () => {
        onLoadMore(handleLoadMore);
        // console.log(`onLoadMore`);     
    };

        return (
            <button
                className={css.Button}
                onClick={handleLoadMore}
                type="button">Load more
            </button>
        );   
}
