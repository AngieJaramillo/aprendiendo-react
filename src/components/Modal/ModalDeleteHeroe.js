import React from 'react';
import Modal from './Modal';
import '../../styles/ModalDeleteHeroe.css';

const ModalDeleteHeroe = ({ modalIsOpen, onCloseModal, onDeleteHeroe }) => {
  return (
    <Modal modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className="modaldeleteheroe">
        <h3>¿Estas seguro?</h3>
        <p>Estas apunto de elminar un personaje.</p>
        <div>
          <button className="btn btn-danger" onClick={onDeleteHeroe}>
            Eliminar
          </button>
          <button className="btn btn-default" onClick={onCloseModal}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteHeroe;