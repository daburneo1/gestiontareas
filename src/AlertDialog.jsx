import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Reemplaza '#root' con el id de tu elemento raíz de la aplicación

const AlertDialog = ({ isOpen, title, description, onConfirm, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Alert Dialog"
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onConfirm}>Confirmar</button>
            <button onClick={onRequestClose}>Cancelar</button>
        </Modal>
    );
};

export default AlertDialog;