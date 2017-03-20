import { connect } from 'react-redux';
import { fetchAllCities, fetchCity } from '../../actions/cities_actions';
import CityEventIndex from './city_event_index';


const mapStateToProps = (state, ownProps) => {
  return{
    city: state.cities[ownProps.params.cityId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchCity: (id) => dispatch(fetchCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEventIndex);
