import React, { Component } from 'react';
import Flickity from 'react-flickity-component';

import './apartmentItem.scss';

class ApartmentItem extends Component {
  renderImages() {
    const { simples } = this.props;
    const url = 'https://static.holidu.com/images';
    const providerPhotoDirectory = `${simples.providerPhotoDirectory}`;
    const apartmentId = `${simples.apartmentId}`;

    return simples.photos.slice(0, 10).map(photo => {
      return (
        <img
          key={photo}
          src={`${url}/${providerPhotoDirectory}/${apartmentId}/t/${photo}.jpg`}
          alt={simples.holiduShortTitle}
          onError={e => {
            e.target.onerror = null;
            e.target.src = 'https://picsum.photos/640/360';
          }}
        />
      );
    });
  }

  renderFacilities() {
    const { simples } = this.props;
    return simples.facilities.map(facility => {
      return (
        <li key={facility} className="navbar-item">
          {facility}
        </li>
      );
    });
  }

  renderCategories() {
    const { simples } = this.props;
    return simples.category.map(category => {
      return (
        <li key={category} className="navbar-item">
          {category}
        </li>
      );
    });
  }

  render() {
    const { simples } = this.props;

    const formatPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(simples.minTotalPrice);

    // console.log(simples);
    // console.log(this.renderImages());
    return (
      <div className="column is-12-mobile is-6-tablet is-4-desktop">
        <div className="card">
          <div className="card-image">
            {this.renderImages().length > 0 && (
              <Flickity
                className="carousel"
                elementType="div"
                options={{
                  resize: true,
                  wrapAround: true,
                  pageDots: false
                }}
                disableImagesLoaded={false}
                reloadOnUpdate
                static
              >
                {this.renderImages()}
              </Flickity>
            )}
            {this.renderImages().length === 0 && (
              <img
                src="https://picsum.photos/640/360"
                alt="Holidu Placeholder"
              />
            )}
          </div>
          <div className="card-content">
            <h2 className="title is-4">{simples.holiduShortTitle}</h2>
            <p className="subtitle is-5">{simples.holiduSuperShortTitle}</p>
            <h3 className="subtitle is-4">Price</h3>
            <p>{`${simples.totalPriceDays} / night`}</p>
            <p>{`Total ${formatPrice}`}</p>

            <h3 className="subtitle is-4">Overview</h3>
            <ul className="navbar">
              {simples.persons && (
                <li className="navbar-item">{`${simples.persons} persons, `}</li>
              )}
              {simples.sleepingRooms && (
                <li className="navbar-item">{`${simples.sleepingRooms} bedroom, `}</li>
              )}
              {simples.flatSize && (
                <li className="navbar-item">
                  {simples.flatSize && `${simples.flatSize}㎡, `}
                </li>
              )}
              {simples.bathRooms && (
                <li className="navbar-item">{`${simples.bathRooms}Bath Rooms, `}</li>
              )}
              {simples.apartmentTypeTitle && (
                <li className="navbar-item">{`${simples.apartmentTypeTitle}`}</li>
              )}
            </ul>

            {(simples.countOfFeedbacks !== 0 || simples.rating !== 0) && (
              <h3 className="subtitle is-4">Rating</h3>
            )}

            {simples.countOfFeedbacks !== 0 && (
              <p>{`Feedback Count = ${simples.countOfFeedbacks}`}</p>
            )}

            {simples.rating !== 0 && <p>{`Rating - ${simples.rating}`}</p>}

            {this.renderCategories().length > 0 && (
              <div>
                <h3 className="subtitle is-4">Categories</h3>
                <ul className="navbar">{this.renderCategories()}</ul>
              </div>
            )}

            {this.renderFacilities().length > 0 && (
              <div>
                <h3 className="subtitle is-4">Facilities</h3>
                <ul className="navbar">{this.renderFacilities()}</ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ApartmentItem;
