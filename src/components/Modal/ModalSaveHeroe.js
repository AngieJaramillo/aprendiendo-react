import React from 'react';
import Modal from './Modal';
import '../../styles/ModalDeleteHeroe.css';

const ModalSaveHeroe = ({ modalIsOpen, onCloseModal, onRedirectToHeroes, dispatchMessageSave }) => {
  return (
    <Modal modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className="modaldeleteheroe">
        <h3>Mensaje</h3>
        <strong>{dispatchMessageSave}</strong>
        <div>
          <button
            className="btn btn-daprimary"
            onClick={onRedirectToHeroes}
          >
            Aceptar
        </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSaveHeroe;