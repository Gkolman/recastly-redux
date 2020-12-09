import Redux from 'redux';
import sampleData from '../data/exampleVideoData.js';

var videoListReducer = (state = [], action) => {

  // console.log('sampleData -> ', sampleData);
  // console.log('state - >', state );
  // console.log('action -> ', action);
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var newState = [];
    Object.assign(newState, state);
    newState = action.videos;
    return newState;
  }
  /* action ->
    type: "CHANGE_VIDEO_LIST"
    videos: [{…}]
  */
  /* state ->
    currentVideo: {script: "This is my only line."}
    videoList: (3) [1, 2, 3]
  */
  //TODO: define a reducer for the videoList field of our state.
  return state;
};

export default videoListReducer;
