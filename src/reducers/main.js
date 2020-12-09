import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers( {currentVideo: currentVideo, videoList: videoList});


/* state ->
  currentVideo: {script: "This is my only line."}
  videoList: (3) [1, 2, 3]
*/
/* action  ->
    type: "CHANGE_VIDEO"
    video: {script: "this is my only line."}
*/

// var rReducer = combineReducers( {'currentvideo': currentVideo, 'videolist': videoList} );

// return rReducer;


//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
