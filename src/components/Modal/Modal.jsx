import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

function Modal ({onClose, children}) {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            onClose();
        }
    };

    const handelOverlayClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return createPortal(
            <div className={styles.overlay} onClick={handelOverlayClick}>
                <div className={styles.modal}>
                    {children}
                </div>
            </div>,
            modalRoot,
        );    
}

export default Modal;