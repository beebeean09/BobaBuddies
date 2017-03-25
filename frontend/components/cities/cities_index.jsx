import React from 'react';
import { withRouter } from 'react-router';

class CitiesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllCities();
  }

  handleClick(router, url) {
    router.push(url);
  }

  render() {

    const {router} = this.props;

    const cityList = this.props.cities.map(city => (
      <div key={city.id} className="city-detail-container">
        <a className="city-detail-image-container" onClick={this.handleClick.bind(this, router, `/cities/${city.id}`)}>
          <h1 className="city-detail-name">{city.name}</h1>
          <img  src={city.image} alt={city.name}/>
        </a>
      </div>
    ));

    return (
      <div>
        <div className="city-index-header">
          <p>Choose a city to find your closest boba buddies!</p>
        </div>
        <div className="city-index-container">
          {cityList}
        </div>
      </div>
    );
  }
}

export default withRouter(CitiesIndex);
