import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => <VideoPlayer/>;

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching actions returned by action creators
//     'video': () => dispatch(changeVideo()),
//     //   payloadvideos: store.getState().videoList
//   };
// };

var mapStateToProps = function (state) {
  console.log('state right here -> ', state);

  return {video: state.currentVideo};
};



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, null)(VideoPlayerContainer);
