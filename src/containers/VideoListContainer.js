import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import store from '../store/store.js';

var VideoListContainer = () => < VideoList />;

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    'handleVideoListEntryTitleClick': () => dispatch(changeVideo()),
    //   payloadvideos: store.getState().videoList
  };
};

var mapStateToProps = function (state) {
  console.log('state right here -> ', state);

  return {videos: state.videoList};
};

var newList = connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default newList;
