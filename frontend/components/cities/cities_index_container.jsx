import { connect } from 'react-redux';
import { fetchAllCities } from '../../actions/cities_actions';
import CitiesIndex from './cities_index';

const mapStateToProps = (state) => ({
  cities: Object.keys(state.cities).map(id => state.cities[id])
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex);
