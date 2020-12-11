import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import store from '../store/store.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import handleVideoSearch from '../actions/search.js';


var SearchContainer = ({ handleSearchInputChange }) => <Search/>;


const mapDispatchToProps = dispatch => ({
  // handleSearchInputChange: dispatch({type: handleSearchChange})
  handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
});

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(null, mapDispatchToProps)(SearchContainer);
