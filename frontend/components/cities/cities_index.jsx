import React from 'react';
import { withRouter } from 'react-router';

class CitiesIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(router, url) {
  //   router.push(url);
  // }

  componentDidMount() {
    this.props.fetchAllCities();
  }

  handleClick(router, url) {
    router.push(url);
  }

  render() {
    // debugger;
    // const cityList = this.props.cities.map(city => (
    //   <ul>
    //     <CityIndexDetail
    //       key={city.id}
    //       onClick={this.handleClick()}
    //       value={city.name} />
    //   </ul>
    // ));

    const {router} = this.props;

    const cityList = this.props.cities.map(city => (
      <div key={city.id} className="city-index-container">
        <a onClick={this.handleClick.bind(this, router, `/`)}>
          <div>
            <h1>{city.name}</h1>
          </div>
          <img src={`./assets/${city.image}`} alt={`${city.image}`}/>
        </a>
      </div>
    ));

    return (
      <div>
        {cityList}
      </div>

    );
  }
}

export default withRouter(CitiesIndex);
