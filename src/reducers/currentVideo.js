import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {

  //console.log('action type -> ', action.type);
  if (action.type === 'CHANGE_VIDEO') {
    var newState = {};
    Object.assign(newState, state);

    newState = action.video;
    //console.log(' newState.currentVideo -> ', newState.currentVideo);
    return newState ? newState : null;
  }

  return state;
};

export default currentVideoReducer;
