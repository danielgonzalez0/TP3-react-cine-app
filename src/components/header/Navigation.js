import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}
        >
          <li>Coup de coeur</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
