import Redux from 'redux';

var currentVideoReducer = (state, action) => {

  if (state === undefined) {
    state = null;
  }

  //console.log('action type -> ', action.type);


  if (action.type === 'CHANGE_VIDEO') {
    var newState = {};
    Object.assign(newState, state);
    newState = action.video;
    //console.log(' newState.currentVideo -> ', newState.currentVideo);
    return newState;
  }

  /* state ->
  currentVideo: {script: "This is my only line."}
  videoList: (3) [1, 2, 3]
  */

  /* action ->
  type: "CHANGE_VIDEO", video: {…}}
  video: {script: "this is my only line."}
  */



  //TODO: define a reducer for the currentVideo field of our state.

  // re render our video player's view

  return state;
};

export default currentVideoReducer;
