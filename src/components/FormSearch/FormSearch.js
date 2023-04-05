import React from 'react';

const FormSearch = ({ keyword, sortDataPtoM, sortDataMtoP }) => {
  return (
    <div className="Form-container">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Entrer le nom d'un film"
        onChange={(e) => e.target.value.length > 2 && keyword(e.target.value)}
      />
      <label htmlFor="search">Rechercher</label>
      <button
        className="btn"
        id="top"
        onClick={() => {
          sortDataPtoM(true);
          sortDataMtoP(false);
        }}
      >
        Top <span className="fa-solid fa-arrow-up"></span>
      </button>
      <button
        className="btn"
        id="flop"
        onClick={() => {
          sortDataPtoM(false);
          sortDataMtoP(true);
        }}
      >
        <span className="fa-solid fa-arrow-down"></span>
        Flop
      </button>
    </div>
  );
};

export default FormSearch;
