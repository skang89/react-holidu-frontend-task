import React, { Component } from 'react';
import { connect } from 'react-redux';

import ApartmentItem from '../apartmentItem/apartmentItem';
import { fetchApartments } from '../../actions/apartments.action';
import { loadingState } from '../../actions/loading.action';

import './apartmentList.scss';

class ApartmentList extends Component {
  componentDidMount() {
    console.log(this.props);
    const { fetchApartments } = this.props;

    fetchApartments();
    loadingState();
  }

  renderApartments() {
    const { apartments } = this.props;

    return apartments.map(apartment => {
      return (
        <div key={apartment.apartmentId}>
          <h2 className="title is-3">{apartment.lowestRegionName}</h2>
          <div className="columns is-multiline" key={apartment.apartmentId}>
            {apartment.apartmentSimples.map(simples => {
              return (
                // file is located: src/components/apartmentItem/apartmentItem.jsx
                <ApartmentItem simples={simples} key={simples.apartmentId} />
              );
            })}
          </div>
        </div>
      );
    });
  }

  render() {
    const { loading } = this.props;
    return (
      <section>
        {loading ? <h2 className="title is-3">Loading...</h2> : null}
        {this.renderApartments()}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { apartments: state.apartments, loading: state.loading };
};

export default connect(
  mapStateToProps,
  { fetchApartments, loadingState }
)(ApartmentList);
