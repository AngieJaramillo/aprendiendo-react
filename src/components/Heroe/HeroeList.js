import React, { useState, useMemo } from 'react';
import HeroeItem from './HeroeItem';

const HeroeList = ({ stateHeroe }) => {

  const listHeroes = stateHeroe;
  const [txtBuscar, setTxtBuscar] = useState('');

  let resultHeroes = useMemo(() => {
    if (txtBuscar !== '') {
      return listHeroes.filter((item) => {
        return item.Name.toLowerCase().includes(txtBuscar.toLowerCase());
      });
    } else {
      return listHeroes;
    }
  }, [txtBuscar]);

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="filterText"><strong>Filtro</strong></label>
        <input
          type="text"
          className="form-control"
          name="filterText"
          onChange={(e) => setTxtBuscar(e.target.value)}
          value={txtBuscar}
        />
      </div>
      <br />
      <div className="row mb-2">
        {resultHeroes.map((item) => {
          return (
            <div key={item.id} className="col-md-6">
              <HeroeItem heroe={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroeList;