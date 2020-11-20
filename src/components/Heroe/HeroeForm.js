import React from 'react';
import ModalSaveHeroe from '../Modal/ModalSaveHeroe';

const HeroeForm = ({ onChangeInput, onSave, formValues, onBack, errorForm, validationMessage,
  modalIsOpen, onCloseModal, onRedirectToHeroes, dispatchMessageSave }) => {
  return (
    <div className="col-sm-5">
      <br />
      <div className="panel panel-default">
        <div className="panel-body form-horizontal payment-form">
          <div className="form-group">
            <label htmlFor="Name" className="col-sm-3 control-label">
              Company
          </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="Company"
                value={formValues.Company}
                onChange={onChangeInput}
              />
              {validationMessage.Company && (
                <p>{validationMessage.Company}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Name" className="col-sm-3 control-label">
              Name
          </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="Name"
                value={formValues.Name}
                onChange={onChangeInput}
              />
              {validationMessage.Name && (
                <p>{validationMessage.Name}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Movie" className="col-sm-3 control-label">
              Movie
          </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="Movie"
                value={formValues.Movie}
                onChange={onChangeInput}
              />
              {validationMessage.Movie && (
                <p>{validationMessage.Movie}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="PhotoUrl" className="col-sm-3 control-label">
              Photo
          </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="PhotoUrl"
                value={formValues.PhotoUrl}
                onChange={onChangeInput}
              />
              {validationMessage.PhotoUrl && (
                <p>{validationMessage.PhotoUrl}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12 text-left">
              <button
                type="button"
                className="btn btn-danger mr-1"
                onClick={onSave}
              >
                Guardar
            </button>
              <ModalSaveHeroe
                modalIsOpen={modalIsOpen}
                onCloseModal={onCloseModal}
                onRedirectToHeroes={onRedirectToHeroes}
                dispatchMessageSave={dispatchMessageSave}
              />
              <button
                type="button"
                className="btn btn-default mr-1"
                onClick={onBack}
              >
                Atras
            </button>
            </div>
          </div>
          {errorForm && (
            <div className="alert alert-danger" role="alert">
              {errorForm.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroeForm;
