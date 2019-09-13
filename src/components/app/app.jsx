import React from 'react';
import ApartmentList from '../apartmentList/apartmentList';

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="navbar-brand">
          <nav>
            <a className="title is-4" href="https://www.holidu.de">
              Holidu
            </a>
          </nav>
        </div>
        <h1 className="title is-2">Frontend Rentals Example</h1>
        <ApartmentList />
      </div>
    </section>
  );
};

export default App;
