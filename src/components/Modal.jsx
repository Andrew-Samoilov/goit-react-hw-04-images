import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./styles.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class ToDoModal extends Component {

    componentDidMount() {
        // console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        // console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            // console.log('Нажали ESC, нужно закрыть модалку');
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                    {/* {console.log(this.props)} */}
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        );
    }

}
