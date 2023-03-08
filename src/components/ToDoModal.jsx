import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./styles.module.css";

const modalRoot = document.querySelector('#modal-root');

export const ToDoModal = ({imgSrc,imgAlt, onClose}) => {
    useEffect(() => {
        console.log("Mounting phase: same when componentDidMount runs");
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            console.log("Unmounting phase: same when componentWillUnmount runs");
            window.removeEventListener('keydown', handleKeyDown);
        };
    } );

    // componentDidMount() {
    //     // console.log('Modal componentDidMount');
    //     window.addEventListener('keydown', this.handleKeyDown);
    // }

    // componentWillUnmount() {
    //     // console.log('Modal componentWillUnmount');
    //     window.removeEventListener('keydown', this.handleKeyDown);
    // }

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            // console.log('Нажали ESC, нужно закрыть модалку');
            onClose();
        }
    };

   const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

        return createPortal(
            <div className={css.Overlay} onClick={handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
            </div>,
            modalRoot,
        );
    
}
