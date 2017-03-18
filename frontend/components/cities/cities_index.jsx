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
    // debugger;

    const {router} = this.props;

    const cityList = this.props.cities.map(city => (
      <div key={city.id} className="city-detail-container">
        <a onClick={this.handleClick.bind(this, router, `/`)}>
          <h1 className="city-detail-name">{city.name}</h1>
          <img src={`./assets/${city.image}`} alt={`${city.image}`}/>
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
