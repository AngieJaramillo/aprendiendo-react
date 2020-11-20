import React, { useState, useEffect, useReducer } from 'react';
import HeroeForm from '../components/Heroe/HeroeForm';
import HeroePreview from '../components/Heroe/HeroePreview';
import LoaderPage from '../components/Loader/LoaderPage';
import api from '../utils/api';
import { navigate } from "@reach/router";
import reducerMessageSave from '../reducers/MessageSave';

const HeroeEdit = (props) => {

  const [stateHeroe, setStateHeroe] = useState({
    modalIsOpen: false,
    heroeId: props.heroeId,
    loading: false,
    error: null,
    form: {
      Company: '',
      Name: '',
      Movie: '',
      PhotoUrl: '',
    },
    validationMessages: {
      Company: undefined,
      Name: undefined,
      Movie: undefined,
      PhotoUrl: undefined,
    },
  });

  const [objMessageSave, dispatchMessageSave] = useReducer(reducerMessageSave, {
    messageSave: undefined,
  });

  useEffect(() => {
    getDataHeroes();
  }, []);

  const getDataHeroes = async () => {
    setStateHeroe({ ...stateHeroe, loading: true, error: null });
    try {
      const dataHeroe = await api.heroes.getHeroe(stateHeroe.heroeId);
      setStateHeroe({ ...stateHeroe, form: dataHeroe, loading: false });
    } catch (error) {
      setStateHeroe({ ...stateHeroe, error: error, loading: false });
    };
  };

  const handleChange = (e) => {
    setStateHeroe({
      ...stateHeroe,
      form: {
        ...stateHeroe.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleEditHeroe = async () => {
    setStateHeroe({ ...stateHeroe, loading: true, error: null });
    try {
      await api.heroes.updateHeroe(stateHeroe.heroeId, stateHeroe.form);
      setStateHeroe({ ...stateHeroe, loading: false, modalIsOpen: true });
      messageSave();
    } catch (error) {
      setStateHeroe({ ...stateHeroe, loading: false, error: error });
    }
  };

  const handleValidateForm = () => {

    let flagExecution = true;
    let messageCompany = undefined;
    let messageName = undefined;
    let messageMovie = undefined;
    let messagePhotoUrl = undefined;

    if (stateHeroe.form.Company === '') {
      messageCompany = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (stateHeroe.form.Name === '') {
      messageName = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (stateHeroe.form.Movie === '') {
      messageMovie = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (stateHeroe.form.PhotoUrl === '') {
      messagePhotoUrl = 'Este campo es obligatorio';
      flagExecution = false;
    }

    if (flagExecution) {
      handleEditHeroe();
    } else {
      setStateHeroe({
        ...stateHeroe,
        validationMessages: {
          Company: messageCompany,
          Name: messageName,
          Movie: messageMovie,
          PhotoUrl: messagePhotoUrl,
        },
      });
    }
  };

  const onCloseModal = () => {
    navigate('/');
  };

  const onRedirectToHeroes = () => {
    navigate('/');
  };

  const messageSave = () => {
    dispatchMessageSave({ type: 'EDIT' });
  };

  if (stateHeroe.loading) {
    return <LoaderPage />;
  }

  return (
    <div className="container">
      <div className="row">
        <HeroeForm
          onChangeInput={handleChange}
          onSave={handleValidateForm}
          formValues={stateHeroe.form}
          onBack={handleGoBack}
          errorForm={stateHeroe.error}
          validationMessage={stateHeroe.validationMessages}
          modalIsOpen={stateHeroe.modalIsOpen}
          onCloseModal={onCloseModal}
          onRedirectToHeroes={onRedirectToHeroes}
          dispatchMessageSave={objMessageSave.messageSave}
        />
        <HeroePreview
          company={stateHeroe.form.Company || 'COMPANY NAME'}
          name={stateHeroe.form.Name || 'HEROE NAME'}
          movie={stateHeroe.form.Movie || 'MOVIE NAME'}
          photoUrl={
            stateHeroe.form.PhotoUrl ||
            'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
          }
        />
      </div>
    </div>
  );

};

export default HeroeEdit;