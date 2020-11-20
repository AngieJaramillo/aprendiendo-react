import React, { useState, useEffect } from 'react';
import HeroeDetailHtml from '../components/Heroe/HeroeDetailHtml';
import LoaderPage from '../components/Loader/LoaderPage';
import api from '../utils/api';
import { navigate } from "@reach/router";

const HeroeDetail = (props) => {

  const [stateHeroe, setStateHeroe] = useState({
    heroeId: props.heroeId,
    loading: true,
    heroe: undefined,
    error: null,
    modalIsOpen: false,
  });

  useEffect(() => {
    getDataHeroes();
  }, []);

  const getDataHeroes = async () => {
    try {
      setStateHeroe({ ...stateHeroe, loading: true, error: null });
      const dataHeroe = await api.heroes.getHeroe(stateHeroe.heroeId);
      setStateHeroe({ ...stateHeroe, loading: false, heroe: dataHeroe });
    } catch (error) {
      setStateHeroe({ ...stateHeroe, loading: false, error: error });
    }
  };

  const onOpenModal = () => {
    setStateHeroe({ ...stateHeroe, modalIsOpen: true });
  };

  const onCloseModal = () => {
    setStateHeroe({ ...stateHeroe, modalIsOpen: false });
  };

  const deleteHeroe = async () => {
    try {
      setStateHeroe({ ...stateHeroe, loading: true, error: null });
      await api.heroes.removeHeroe(stateHeroe.heroeId);
      setStateHeroe({ ...stateHeroe, loading: false });
      navigate('/');
    } catch (error) {
      setStateHeroe({ ...stateHeroe, loading: false, error: error });
    }
  };

  if (stateHeroe.loading) {
    return <LoaderPage />;
  }
  return (
    <HeroeDetailHtml
      heroe={stateHeroe.heroe}
      modalIsOpen={stateHeroe.modalIsOpen}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      onDeleteHeroe={deleteHeroe}
    />
  );

};

export default HeroeDetail;