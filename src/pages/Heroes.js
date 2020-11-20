import React, { useState, useEffect } from 'react';
import HeroeList from '../components/Heroe/HeroeList';
import MessageWarning from '../components/Messages/MessageWarning';
import ButtonNewHero from '../components/Button/ButtonNewHero';
import LoaderHeroes from '../components/Loader/LoaderHeroes';
import api from '../utils/api';

const Heroes = () => {

  const [stateHeroe, setStateHeroe] = useState({
    loading: true,
    error: null,
    heroes: undefined,
  });

  useEffect(() => {
    setTimeout(() => {
      getDataHeroes();
    }, 1000);
  }, []);

  const getDataHeroes = async () => {
    setStateHeroe({ ...stateHeroe, loading: true, error: null });
    try {
      const dataHeroes = await api.heroes.listHeroes();
      setStateHeroe({ ...stateHeroe, loading: false, heroes: dataHeroes });
    } catch (error) {
      setStateHeroe({ ...stateHeroe, loading: false, error: error });
    }
  };

  if (stateHeroe.loading) {
    return (
      <React.Fragment>
        <ButtonNewHero />
        <br />
        <LoaderHeroes />
      </React.Fragment>
    );
  };

  if (stateHeroe.error) {
    return <MessageWarning message={stateHeroe.error.message} />;
  }

  if (!stateHeroe.heroes || stateHeroe.heroes.length === 0) {
    return (
      <div>
        <ButtonNewHero />
        <br />
        <MessageWarning message="No existe información." />;
      </div>
    );
  };

  return (
    <div>
      <ButtonNewHero />
      <br />
      <HeroeList stateHeroe={stateHeroe.heroes} />
    </div>
  );

};

export default Heroes;